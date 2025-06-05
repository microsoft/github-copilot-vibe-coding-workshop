# JavaScript App Sample

## Prerequisites

Refer to the [README](../../README.md) doc for preparation.

## Getting Started

### Run FastAPI Backend

Use [Python App Sample](../python/).

### Run React Frontend

1. Get the repository root.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Install npm packages.

    ```bash
    cd $REPOSITORY_ROOT/complete/javascript
    npm install
    ```

1. Run the app.

    ```bash
    npm run dev
    ```

1. Open a web browser and navigate to `http://localhost:3000`.
1. Verify if the web application is running properly.
