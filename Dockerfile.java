# Stage 1: Build stage
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu AS builder

WORKDIR /app

# Install Maven
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*

# Copy Maven files
COPY java/socialapp/pom.xml .
COPY java/socialapp/src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Runtime stage
FROM mcr.microsoft.com/openjdk/jdk:21-ubuntu

WORKDIR /app

# Set environment variables
ENV PATH="/usr/local/openjdk-21/bin:${PATH}" \
    JAVA_HOME="/usr/local/openjdk-21"

# Install SQLite and create database
RUN apt-get update && apt-get install -y sqlite3 curl && \
    rm -rf /var/lib/apt/lists/* && \
    sqlite3 /app/sns_api.db < /dev/null

# Copy the built JAR from builder stage
COPY --from=builder /app/target/socialapp-*.jar /app/socialapp.jar

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run the application
CMD ["java", "-jar", "/app/socialapp.jar"]
