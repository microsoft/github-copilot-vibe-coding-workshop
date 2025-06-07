# 03: Java Migration from Python

## Scenario

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers.

Because a Python developer has left the company, the stakeholders asked to migrate the existing Python backend API app to Java, using Spring Boot.

Now, as a Java developer, you should migrate the existing FastAPI app to Spring Boot. You've got very little knowledge of Python and FastAPI, by the way.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Prepare Spring Boot Project](#prepare-spring-boot-project)
- [Migrate FastAPI API App](#migrate-fastapi-api-app)
- [Verify Spring Boot Backend App](#verify-spring-boot-backend-app)

### Check GitHub Copilot Agent Mode

1. Click the GitHub Copilot icon on the top of GitHub Codespace or VS Code and open GitHub Copilot window.

   ![Open GitHub Copilot Chat](./images/setup-02.png)

1. If you're asked to login or sign up, do it. It's free of charge.
1. Make sure you're using GitHub Copilot Agent Mode.

   ![GitHub Copilot Agent Mode](./images/setup-03.png)

1. Select model to either `GPT-4.1` or `Claude Sonnet 4`.
1. Make sure that you've configured [MCP Servers](./00-setup.md#set-up-mcp-servers).

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Prepare Spring Boot Project

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Install Spring Boot CLI.

    ```bash
    sdk install springboot
    ```

1. Use prompt like below to scaffold a Spring Boot app project.

    ```text
    I'd like to scaffold a Spring Boot app. Follow the instructions below.

    - Use context7.
    - Your working directory is `java`.
    - Identify all the steps first, which you're going to do.
    - Use Spring Boot CLI to create the Spring Boot app project.
    - Use Gradle as the Java package manager.
    - Use the package name of `com.contoso.socialapp`.
    - Use the artifact ID of `socialapp`.
    - Use the group ID of `com.contoso`.
    - Use the package type of `jar`.
    - Use OpenJDK version of `21`.
    - Add dependencies - `Spring Web`, `Spring Boot Actuator` and `Lombok`.
    - Use the port number of `8080`.
    - Make sure to allow CORS from everywhere.
    - Build the Spring Boot app and verify if the app is built properly.
    - Run this Spring Boot app and verify if the app is running properly.
    - If either building or running the app fails, analyze the issues and fix them.
    ```

1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

### Migrate FastAPI API App

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Add [`product-requirements.md`](../product-requirements.md) and [`openapi.yaml`](../openapi.yaml) to GitHub Copilot.
1. Use prompt like below to migrate FastAPI to Spring Boot.

    ```text
    Now, we're migrating the existing FastAPI-based API app to Spring Boot API app. Follow the instructions below for the migration.
    
    - Use context7.
    - The existing FastAPI application is located at `python`.
    - Your working directory is `java/socialapp`.
    - Identify all the steps first, which you're going to do.
    - Analyze the application structure of the existing FastAPI app.
    - Migrate all the endpoints. Both corresponding endpoints should be exactly the same as each other.
    - Use SQLite as the database.
    - Use `sns_api.db` as the name of the SQLite database.
    - The database should always be initialized whenever starting the app.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - The API application should render Swagger UI page through a default endpoint.
    - The API application should render exactly the same OpenAPI document through a default endpoint.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    - If necessary, add more packages for OpenAPI and Swagger UI.
    ```

1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.
1. Once migration is over, use prompt like below to verify the migration result.

    ```text
    I'd like to build the Spring Boot app. Follow the instructions.

    - Use context7.
    - Build the Spring Boot app and verify if the app is built properly.
    - If building the app fails, analyze the issues and fix them.
    ```

   > **NOTE**:
   >
   > - Until the build succeeds, iterate this step.
   > - If the build keeps failing, check out the error messages and ask them to GitHub Copilot Agent to figure them out.

1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

### Verify Spring Boot Backend App

1. Once the application is built, verify if it's written properly or not.

    ```text
    Run the Spring Boot app and verify if the app is properly running by checking all the endpoints. Also verify the OpenAPI endpoint renders exactly the same content as `openapi.yaml`.

    If app running fails, analyze the issues and fix them. Use context7.
    ```

1. Open a web browser and navigate to `http://localhost:8080`.
1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

---

OK. You've completed the "Java" step. Let's move onto [STEP 04: .NET Migration from JavaScript](./04-dotnet.md).
