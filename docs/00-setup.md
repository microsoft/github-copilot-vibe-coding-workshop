# 00: Development Environment

In this step, you're setting up development environment for the workshop.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Use GitHub Codespaces](#use-github-codespaces)
- [Use Visual Studio Code](#use-visual-studio-code)
  - [Install PowerShell 👉 For Windows Users](#install-powershell--for-windows-users)
  - [Install git CLI](#install-git-cli)
  - [Install GitHub CLI](#install-github-cli)
  - [Install Docker Desktop](#install-docker-desktop)
  - [Install Visual Studio Code](#install-visual-studio-code)
  - [Start Visual Studio Code](#start-visual-studio-code)
  - [Set-up MCP Servers](#set-up-mcp-servers)
- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Analyze Product Requirements Document (PRD) and Design API](#analyze-product-requirements-document-prd-and-design-api)

## Use GitHub Codespaces

1. Take a look at the image below, and follow the steps in the order of clicking ![the "code" button image](https://img.shields.io/badge/%3C%3E_Code-green) 👉 ![the "codespaces" button image](https://img.shields.io/badge/Codespaces-white) 👉 ![the "create codespace on main" button image](https://img.shields.io/badge/Create_codespace_on_main-green) and create a new GitHub Codespace instance. It might take 5-10 mins depending on the network status.

   ![Starting with GitHub Codespaces](./images/setup-01.png)

2. Once the GitHub Codespace instance is ready, open a terminal and run the following command to check out everything you need has been properly installed or not.

    ```bash
    # Python
    python --version
    ```

    ```bash
    # Node.js
    node --version
    npm --version

    ```

    ```bash
    # JDK
    java --version
    ```

    ```bash
    # .NET SDK
    dotnet --list-sdks
    ```

3. Check out your repository status.

    ```bash
    git remote -v
    ```

   You should be able to see the following.

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   If you see something different from above, delete the GitHub Codespace instance and recreate it.

4. Move down to the [Set-up MCP Servers](#set-up-mcp-servers) section.

**👇👇👇 Instead, if you'd like to use VS Code on your local machine, follow the instruction below. The section below doesn't apply to those who use GitHub Codespaces. 👇👇👇**

## Use Visual Studio Code

### Install PowerShell 👉 For Windows Users

1. Check whether you've already installed PowerShell or not.

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   If you don't see the command path of `pwsh`, it means you haven't installed PowerShell yet. Visit [PowerShell installation page](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) and follow the instructions.

1. Check out the version of your PowerShell.

    ```bash
    pwsh --version
    ```

   `7.5.0` or higher is recommended. If yours is lower than that, visit [PowerShell installation page](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) and follow the instructions.

### Install git CLI

1. Check whether you've already installed git CLI or not.

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   If you don't see the command path of `git`, it means you haven't installed the git CLI yet. Visit [git CLI installation page](https://git-scm.com/downloads) and follow the instructions.

1. Check out the version of your git CLI.

    ```bash
    git --version
    ```

   `2.39.0` or higher is recommended. If yours is lower than that, visit [git CLI installation page](https://git-scm.com/downloads) and follow the instructions.

### Install GitHub CLI

1. Check whether you've already installed GitHub CLI or not.

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   If you don't see the command path of `gh`, it means you haven't installed the GitHub CLI yet. Visit [GitHub CLI installation page](https://cli.github.com/) and follow the instructions.

1. Check out the version of your GitHub CLI.

    ```bash
    gh --version
    ```

   `2.65.0` or higher is recommended. If yours is lower than that, visit [GitHub CLI installation page](https://cli.github.com/) and follow the instructions.

1. Check whether you've signed into GitHub or not.

    ```bash
    gh auth status
    ```

   If you haven't signed in yet, run `gh auth login` and sign-in.

### Install Docker Desktop

1. Check whether you've already installed Docker Desktop or not.

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   If you don't see the command path of `docker`, it means you haven't installed Docker Desktop yet. Visit [Docker Desktop installation page](https://docs.docker.com/get-started/introduction/get-docker-desktop/) and follow the instructions.

1. Check out the version of your Docker CLI.

    ```bash
    docker --version
    ```

   `28.0.4` or higher is recommended. If yours is lower than that, visit [Docker Desktop installation page](https://docs.docker.com/get-started/introduction/get-docker-desktop/) and follow the instructions.

### Install Visual Studio Code

1. Check whether you've already installed VS Code or not.

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   If you don't see the command path of `code`, it means you haven't installed VS Code yet. Visit [Visual Studio Code installation page](https://code.visualstudio.com/) and follow the instructions.

1. Check out the version of your VS Code.

    ```bash
    code --version
    ```

   `1.99.0` or higher is recommended. If yours is lower than that, visit [Visual Studio Code installation page](https://code.visualstudio.com/) and follow the instructions.

   > **NOTE**: You might not be able to execute the `code` command. In this case, follow [this document](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) for setup.

### Start Visual Studio Code

1. Create a working directory.
1. Run the command to fork this repo and clone it to your local machine.

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. Navigate into the cloned directory.

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. Run VS Code from the terminal.

    ```bash
    code .
    ```

1. Open a new terminal within VS Code and run the following command to check out your repository status.

    ```bash
    git remote -v
    ```

   You should be able to see the following. If you see `microsoft` in `origin`, you should clone it again from your forked repository.

    ```bash
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<your GitHub ID>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. Check out whether both extensions have been installed or not &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat).

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   If you see nothing, it means you haven't installed those extensions yet. Run the following command to install the extensions.

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### Set-up MCP Servers

1. Set the environment variable of `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copy MCP server settings.

    ```bash
    # bash/zsh
    cp -r $REPOSITORY_ROOT/docs/.vscode/. \
          $REPOSITORY_ROOT/.vscode/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/* `
              -Destination $REPOSITORY_ROOT/.vscode/ -Recurse -Force
    ```

1. Open Command Palette by typing F1 or `Ctrl`+`Shift`+`P` on Windows or `Cmd`+`Shift`+`P` on Mac OS, and search `MCP: List Servers`.
1. Choose `context7` then click `Start Server`.

## Check GitHub Copilot Agent Mode

1. Click the GitHub Copilot icon on the top of GitHub Codespace or VS Code and open GitHub Copilot window.

   ![Open GitHub Copilot Chat](./images/setup-02.png)

1. If you're asked to login or sign up, do it. It's free of charge.
1. Make sure you're using GitHub Copilot Agent Mode.

   ![GitHub Copilot Agent Mode](./images/setup-03.png)

1. Select model to either `GPT-4.1` or `Claude Sonnet 4`.

## Prepare Custom Instructions

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/setup/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/setup/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

## Analyze Product Requirements Document (PRD) and Design API

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Add [`product-requirements.md`](../product-requirements.md) to GitHub Copilot.
1. Enter the prompt like the following for GitHub Copilot Agent to generate an OpenAPI document for you. This OpenAPI document will be the base of your entire application.

    ```text
    Here's the PRD for you. Carefully read through the entire PRD and do the following for me.
    
    - Identify all the steps first, which you're going to do.
    - Generate an OpenAPI document in YAML format.
    - The OpenAPI document should capture all API endpoints, parameters and request/response payloads.
    - Assume the API server is `http://localhost:8080` and the base URL is `/api`.
    - Save it to the `openapi.yaml` file at the repository root.
    ```

1. Verify the `openapi.yaml` is generated at the repository root.
1. Click the `[keep]` button of GitHub Copilot to take the `openapi.yaml` file.

---

OK. You've completed the "Development Environment" step. Let's move onto [STEP 01: Python Backend Development](./01-python.md).
