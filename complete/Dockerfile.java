# Multi-stage build for Java Spring Boot application
# Stage 1: Build stage with Microsoft OpenJDK 21
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu AS builder

# Set working directory for build
WORKDIR /workspace

# Copy Gradle configuration files
COPY java/socialapp/gradle ./gradle
COPY java/socialapp/gradlew .
COPY java/socialapp/gradlew.bat .
COPY java/socialapp/build.gradle .
COPY java/socialapp/settings.gradle .

# Make gradlew executable
RUN chmod +x ./gradlew

# Download dependencies (for better Docker layer caching)
RUN ./gradlew dependencies --no-daemon

# Copy source code
COPY java/socialapp/src ./src

# Build the application
RUN ./gradlew build --no-daemon -x test

# Stage 2: Extract JRE from JDK
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu AS jre-builder

# Create a custom JRE using jlink
RUN jlink \
    --add-modules java.base,java.desktop,java.instrument,java.management,java.naming,java.net.http,java.security.jgss,java.sql,jdk.unsupported \
    --strip-debug \
    --no-man-pages \
    --no-header-files \
    --compress=2 \
    --output /custom-jre

# Stage 3: Runtime stage with custom JRE
FROM ubuntu:22.04

# Install required packages and clean up
RUN apt-get update && \
    apt-get install -y \
        ca-certificates \
        sqlite3 \
        curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy custom JRE from jre-builder stage
COPY --from=jre-builder /custom-jre /opt/java/openjdk

# Set JAVA_HOME and update PATH
ENV JAVA_HOME=/opt/java/openjdk
ENV PATH="${JAVA_HOME}/bin:${PATH}"

# Create application user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Set working directory
WORKDIR /app

# Copy the built JAR from builder stage
COPY --from=builder /workspace/build/libs/*.jar app.jar

# Create SQLite database file with proper permissions
RUN touch sns_api.db && \
    chown appuser:appuser sns_api.db && \
    chmod 664 sns_api.db

# Change ownership of the app directory
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Set environment variables for GitHub Codespaces
ENV CODESPACE_NAME="${CODESPACE_NAME}"
ENV GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN="${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}"

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
