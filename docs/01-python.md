# 01: Python Backend Development

## Scenario

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers.

As a Python developer, you're going to build a Python backend app using FastAPI. For now, you're using the in-memory feature of SQLite.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Prepare Virtual Environment](#prepare-virtual-environment)
- [Build FastAPI Backend App](#build-fastapi-backend-app)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Prepare Virtual Environment

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Use prompt like below to prepare virtual environment for Python app development.

    ```text
    I'd like to write a Python application. But before that, I need to set up a virtual environment. Follow the instructions below.
    
    - Use context7.
    - Your working directory is `python`.
    - Identify all the steps first, which you're going to do.
    - Use `.venv` for the virtual environment.
    - Use `uv` as the Python package manager.
    ```

### Build FastAPI Backend App

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Make sure that the `context7` MCP server is up and running.
1. Add [`product-requirements.md`](../product-requirements.md) and [`openapi.yaml`](../openapi.yaml) to GitHub Copilot.
1. Use prompt like below to build a FastAPI backend application.

    ```text
    I'd like to build a FastAPI application as a backend API. Carefully read the entire PRD and `openapi.yaml`. Then, follow the instructions below.
    
    - Use context7.
    - Your working directory is `python`.
    - Identify all the steps first, which you're going to do.
    - Use FastAPI as the API app framework.
    - Use SQLite as the database.
    - Use `sns_api.db` as the name of the SQLite database.
    - The database should always be initialized whenever starting the app.
    - Use `openapi.yaml` that describes all the endpoints and data schema.
    - Use the port number of `8000`.
    - Make sure to allow CORS from everywhere.
    - Entrypoint is `main.py`.
    - The API application should render Swagger UI page through a default endpoint.
    - The API application should render exactly the same OpenAPI document through a default endpoint.
    - DO NOT add anything not defined in `openapi.yaml`.
    - DO NOT modify anything defined in `openapi.yaml`.
    ```

1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.
1. Once the application is built, verify if it's written properly or not.

    ```text
    Run the FastAPI app and verify if the app is properly running. Also verify the OpenAPI endpoint renders exactly the same content as `openapi.yaml`.

    If app running fails, analyze the issues and fix them.
    ```

1. Open a web browser and navigate to `http://localhost:8000`.
1. Click the ![the "keep" button image](https://img.shields.io/badge/keep-blue) button of GitHub Copilot to take the changes.

---

OK. You've completed the "Python" step. Let's move onto [STEP 02: JavaScript Frontend Development](./02-javascript.md).
