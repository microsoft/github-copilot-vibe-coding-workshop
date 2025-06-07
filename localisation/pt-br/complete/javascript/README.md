# Exemplo de Aplicação JavaScript

## Pré-requisitos

Consulte a documentação [README](../../README.md) para preparação.

## Primeiros Passos

### Executar Backend FastAPI

Use [Exemplo de Aplicação Python](../python/).

> **NOTA**: Se você usar GitHub Codespaces, certifique-se de que a porta da aplicação Python, `8000`, está definida como **pública**.

### Executar Frontend React

1. Obtenha a raiz do repositório.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Instale pacotes npm.

    ```bash
    cd $REPOSITORY_ROOT/complete/javascript
    npm install
    ```

1. Execute a aplicação.

    ```bash
    npm run dev
    ```

1. Abra um navegador web e navegue para `http://localhost:3000`.
1. Verifique se a aplicação web está funcionando adequadamente.

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
