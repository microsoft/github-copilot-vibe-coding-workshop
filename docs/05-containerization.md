# 05: Containerization

## Scenario

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers.

They now have both Java-based backend app and .NET-based frontend app. They want to make them containerized so that they can be deployed any platform.

Now, as a DevOps engineer, you should containerize both apps.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Containerize Java Application](#containerize-java-application)
- [Containerize .NET Application](#containerize-net-application)
- [Orchestrate Containers](#orchestrate-containers)

### Check GitHub Copilot Agent Mode

1. Click the GitHub Copilot icon on the top of GitHub Codespace or VS Code and open GitHub Copilot window.

   ![Open GitHub Copilot Chat](./images/setup-02.png)

1. If you're asked to login or sign up, do it. It's free of charge.
1. Make sure you're using GitHub Copilot Agent Mode.

   ![GitHub Copilot Agent Mode](./images/setup-03.png)

1. Select model to either `GPT-4.1` or `Claude Sonnet 4`.

### Prepare Custom Instructions

1. Set the environment variable of `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copy custom instructions.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Containerize Java Application

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Use prompt like below to build a container image for the Java app.

    ```text
    I'd like to build a container image of a Java app. Follow the instructions below.

    - The Java app is located at `complete/java`.
    - Your working directory is the repository root.
    - Identify all the steps first, which is you're going to do.
    - Create a Dockerfile, `Dockerfile.java`.
    - Use Microsoft OpenJDK 21.
    - Use multi-stage build approach.
    - Extract JRE from JDK.
    - Use the target port number of `8080` for the container image.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

1. Once `Dockerfile.java` is created, build the container image with the following prompt.

    ```text
    Use `Dockerfile.java` and build a container image.

    - Use `contoso-backend` as the container image name.
    - Use `latest` as the container image tag.
    - Verify if the container image is built properly.
    - If the build fails, analyze the issues and fix them.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

1. Once the build succeeds, run the container image with the following prompt.

    ```text
    Use the container image just built, run a container and verify if the app is running properly.
    
    - Use the host port of `5050`.
    ```

### Containerize .NET Application

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Use prompt like below to build a container image for the .NET app.

    ```text
    I'd like to build a container image of a .NET app. Follow the instructions below.

    - The .NET app is located at `complete/dotnet`.
    - Your working directory is the repository root.
    - Identify all the steps first, which is you're going to do.
    - Create a Dockerfile, `Dockerfile.dotnet`.
    - Use .NET 9.
    - Use multi-stage build approach.
    - Use the target port number of `8080` for the container image.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

1. Once `Dockerfile.dotnet` is created, build the container image with the following prompt.

    ```text
    Use `Dockerfile.dotnet` and build a container image.

    - Use `contoso-frontend` as the container image name.
    - Use `latest` as the container image tag.
    - Verify if the container image is built properly.
    - If the build fails, analyze the issues and fix them.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

1. Once the build succeeds, run the container image with the following prompt.

    ```text
    Use the container image just built, run a container and verify if the app is running properly.
    
    - Use the host port of `3000`.
    ```

1. Make sure that both frontend and backend apps are NOT communicating with each other because they don't know each other yet. Run the prompt like below.

    ```text
    Regardless or not, remove both containers currently running.
    ```

### Orchestrate Containers

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Use prompt like below to build a Docker Compose file.

    ```text
    I'd like to create a Docker Compose file. Follow the instructions below.
    
    - Your working directory is the repository root.
    - Use `Dockerfile.java` as a backend app.
    - Use `Dockerfile.dotnet` as a frontend app.
    - Create `compose.yaml` as the Docker Compose file.
    - Use `contoso` as the network name.
    - Use `contoso-backend` as the container name of the Java app. Its target port is 8080, and host port is 5050.
    - Use `contoso-frontend` as the container name of the .NET app. Its target port is 8080, and host port is 3000.
    ```

1. Once the `compose.yaml` file is created, run it and verify if both apps are running properly.

    ```text
    Now, run the Docker compose file and verify if the apps are running properly.
    ```

---

Congratulations! 🎉 You've completed all the workshop sessions successfully!
