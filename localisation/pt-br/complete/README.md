# Exemplos de Aplicações Completas

Aqui está a lista de exemplos de aplicações completas. Como elas também foram codificadas com vibe, você pode verificar como foram construídas.

| Aplicação   | Localização                 |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## Exemplo de Containerização

### Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

### Primeiros Passos

1. Certifique-se de que o Docker está rodando.

    ```bash
    docker info
    ```

1. Obtenha a raiz do repositório.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Navegue para o diretório `complete`.

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. Execute as aplicações containerizadas.

    ```bash
    docker compose up --build -d
    ```

1. Abra um navegador web e navegue para `http://localhost:3030`.
1. Verifique se a aplicação web está funcionando adequadamente.
1. Limpe executando o seguinte comando para remover as aplicações containerizadas.

    ```bash
    docker compose down --rmi all
    ```

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
