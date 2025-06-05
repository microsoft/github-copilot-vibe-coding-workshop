# Stage 1: Build the application
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu AS build

WORKDIR /app

# Copy gradle files for dependency resolution
COPY java/socialapp/gradle/ ./gradle/
COPY java/socialapp/gradlew java/socialapp/build.gradle java/socialapp/settings.gradle ./

# Give executable permissions to gradlew
RUN chmod +x ./gradlew

# Download dependencies to cache this layer
RUN ./gradlew dependencies --no-daemon

# Copy source code
COPY java/socialapp/src ./src

# Build the application
RUN ./gradlew bootJar --no-daemon

# Stage 2: Extract JRE from JDK
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu AS jre-build

# Create a custom JRE using jlink that only includes modules needed for the application
RUN jlink \
    --add-modules java.base,java.compiler,java.desktop,java.instrument,java.management,java.naming,java.prefs,java.rmi,java.security.jgss,java.security.sasl,java.sql,jdk.crypto.ec,jdk.unsupported,jdk.zipfs,jdk.management \
    --strip-debug \
    --no-man-pages \
    --no-header-files \
    --compress=2 \
    --output /jre-minimal

# Stage 3: Create final image
FROM ubuntu:22.04

# Set environment variables
ENV JAVA_HOME=/opt/jre-minimal
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Copy the extracted JRE from the jre-build stage
COPY --from=jre-build /jre-minimal $JAVA_HOME

# Copy the built application from the build stage
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

# Create a directory for persistent data
RUN mkdir -p /app/data

# Expose the application port
EXPOSE 8080

# Set the entrypoint command to run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]