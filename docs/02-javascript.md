# 02: JavaScript Frontend Development

## Scenario

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers.

As a JavaScript developer, you're going to build a JavaScript frontend app using React communicating to the Python backend API app.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Prepare Application Project](#prepare-application-project)
- [Prepare Figma MCP Server](#prepare-figma-mcp-server)
- [Generate UI Components from Figma](#generate-ui-components-from-figma)
- [Run FastAPI Backend App](#run-fastapi-backend-app)
- [Build React Frontend App](#build-react-frontend-app)
- [Verify React Frontend App](#verify-react-frontend-app)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Prepare Application Project

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Use prompt like below to scaffold a React web app project.

    ```text
    I'd like to scaffold a React web app. Follow the instructions below.
    
    - Make sure it's the web app, not the mobile app.
    - Your working directory is `javascript`.
    - Identify all the steps first, which you're going to do.
    - Use ViteJS as the frontend app framework.
    - Use default settings when initializing the project.
    - Use `SimpleSocialMediaApplication` as the name of the project while initializing.
    - Use the port number of `3000`.
    - Only initialize the project. DO NOT go further.
    ```

1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

### Prepare Figma MCP Server

1. Make sure that you've configured [MCP Servers](./00-setup.md#set-up-mcp-servers).
1. Get the personal access token (PAT) from [Figma](https://www.figma.com/).
1. Open Command Palette by typing F1 or `Ctrl`+`Shift`+`P` on Windows or `Cmd`+`Shift`+`P` on Mac OS, and search `MCP: List Servers`.
1. Choose `Framelink Figma MCP` then click `Start Server`.
1. Enter the PAT you get issued from Figma.

### Generate UI Components from Figma

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that you're running the Figma MCP server.
1. Copy the [Figma design template](https://www.figma.com/community/file/1495954632647006209) to your account.

   ![Figma design template page](./images/javascript-01.png)

1. Right-click each section - `Home`, `Search`, `Post Details`, `Post Modal` and `Name Input Modal` 👉 Select `Copy/Paste as` 👉 Select `Copy link to selection` to get the link to each section. Take note all five links.

### Run FastAPI Backend App

1. Make sure that the FastAPI backend app is up and running.

    ```text
    Run the FastAPI backend API, which is located at the `python` directory.
    ```

   > **NOTE**: You may use the [`complete/python`](../complete/python/) sample app instead.

1. If you use GitHub Codespaces, make sure that the port number `8000` is set to `public` instead of `private`. Otherwise, you'll get the `401` error when accessing from the frontend app.

### Build React Frontend App

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Make sure that you have all the Figma section links of 5 retrieved from the [previous section](#generate-ui-components-from-figma).
1. Add [`product-requirements.md`](../product-requirements.md) and [`openapi.yaml`](../openapi.yaml) to GitHub Copilot.
1. Use prompt like below to build the application based on the requirements and OpenAPI document.

    ```text
    I'd like to build a React web app. Follow the instructions below.
    
    - Your working directory is `javascript`.
    - Identify all the steps first, which you're going to do.
    - There's a backend API app running on `http://localhost:8000`.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - Use the port number of `3000`.
    - Create all the UI components defined in this link: {{FIGMA_SECTION_LINK}}.
    - DO NOT add anything not related to the UI components.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    - Give visual indication when the backend API is unavailable or unreachable for any reason.
    ```

1. Repeat four more times for the rest four Figma design links.
1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

### Verify React Frontend App

1. Make sure that the FastAPI backend app is up and running.

    ```text
    Run the FastAPI backend API, which is located at the `python` directory.
    ```

1. Verify if it's built properly or not.

    ```text
    Run the React app and verify if the app is properly running.

    If app running fails, analyze the issues and fix them.
    ```

1. Open a web browser and navigate to `http://localhost:3000`.
1. Verify if both frontend and backend apps are running properly.
1. Click the `[keep]` button of GitHub Copilot to take the changes.

---

OK. You've completed the "JavaScript" step. Let's move onto [STEP 03: Java Migration from Python](./03-java.md).
