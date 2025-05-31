# 04: .NET Migration from JavaScript

## Scenario

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers.

They already have a frontend app written in JavaScript, more specifically in React. However, all of sudden, they sent a new requirements to redevelop the frontend app using .NET, especially in Blazor.

Now, as a .NET developer, you should migrate the existing React app to Blazor. You've got very little knowledge of JavaScript and React, by the way.

## Prerequisites

Refer to the [README](../README.md) doc for preparation.

## Getting Started

- [Check GitHub Copilot Agent Mode](#check-github-copilot-agent-mode)
- [Prepare Custom Instructions](#prepare-custom-instructions)
- [Prepare Blazor Web App Project](#prepare-blazor-web-app-project)
- [Migrate React Web App](#migrate-react-web-app)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Prepare Blazor Web App Project

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Use prompt like below to scaffold a Blazor web app project.

    ```text
    I'd like to scaffold a Blazor web app. Follow the instructions below.

    - Your working directory is `dotnet`.
    - Identify all the steps first, which is you're going to do.
    - Show me the list of .NET projects related to Blazor and ask me to choose.
    - Generate a Blazor project.
    - Use the project name of `Contoso.BlazorApp`.
    - Update `launchSettings.json` to change the port number of `3030` for HTTP, `43030` for HTTPS.
    - Create a solution, `ContosoWebApp`, and add the Blazor project into this solution.
    - Build the Blazor app and verify if the app is built properly.
    - Run this Blazor app and verify if the app is running properly.
    - If either building or running the app fails, analyze the issues and fix them.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

### Migrate React Web App

1. Make sure that you're using GitHub Copilot Agent Mode with the model of `Claude Sonnet 4` or `GPT-4.1`.
1. Use prompt like below to migrate React to Blazor.

    ```text
    Now, we're migrating the existing React-based web app to Blazor web app. Follow the instructions below for the migration.
    
    - The existing React application is located at `javascript`.
    - Your working directory is `dotnet/Contoso.BlazorApp`.
    - Identify all the steps first, which is you're going to do.
    - Analyze the application structure of the existing React app.
    - Migrate all the React components to Blazor ones. Both corresponding components should be as exactly close to each other as possible.
    - Migrate all necessary CSS elements from React to Blazor.
    - While migrating JavaScript elements from React to Blazor, maximize using Blazor's native features as much as possible. If you have to use JavaScript, use Blazor's JSInterop features.
    - If necessary, add NuGet packages that is compatible with .NET 9.
    ```

1. Once migration is over, use prompt like below to verify the migration result.

    ```text
    - Build the Blazor app and verify if the app is built properly.
    - If building the app fails, analyze the issues and fix them.
    ```

   > **NOTE**:
   >
   > - Until the build succeeds, iterate this step.
   > - If the build keeps failing, check out the error messages and ask them to GitHub Copilot Agent to figure them out.

1. Click the `[keep]` button of GitHub Copilot to take the changes.

1. Once the build succeeds, use prompt like below to verify the migration result.

    ```text
    - Run this Blazor app and verify if the app is running properly.
    - If running the app fails, analyze the issues and fix them.
    ```

1. Click the `[keep]` button of GitHub Copilot to take the changes.

---

OK. You've completed the ".NET" step. Let's move onto [STEP 05: Containerization](./05-containerization.md).
