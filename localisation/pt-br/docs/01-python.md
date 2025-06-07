# 01: Desenvolvimento de Backend Python

## Cenário

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais.

Como desenvolvedor Python, você vai construir uma aplicação backend Python usando FastAPI. Por enquanto, você está usando o recurso em memória do SQLite.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Preparar Ambiente Virtual](#preparar-ambiente-virtual)
- [Construir Aplicação Backend FastAPI](#construir-aplicação-backend-fastapi)

### Verificar o Modo Agente do GitHub Copilot

1. Clique no ícone do GitHub Copilot no topo do GitHub Codespace ou VS Code e abra a janela do GitHub Copilot.

   ![Abrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Se você for solicitado a fazer login ou se inscrever, faça-o. É gratuito.
1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot.

   ![Modo Agente do GitHub Copilot](../../../docs/images/setup-03.png)

1. Selecione o modelo para `GPT-4.1` ou `Claude Sonnet 4`.
1. Certifique-se de que você configurou os [Servidores MCP](./00-setup.md#configurar-servidores-mcp).

### Preparar Instruções Customizadas

1. Defina a variável de ambiente `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copie as instruções customizadas.

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

### Preparar Ambiente Virtual

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Use um prompt como o abaixo para preparar o ambiente virtual para desenvolvimento de aplicação Python.

    ```text
    Gostaria de escrever uma aplicação Python. Mas antes disso, preciso configurar um ambiente virtual. Siga as instruções abaixo.
    
    - Use context7.
    - Seu diretório de trabalho é `python`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Use `.venv` para o ambiente virtual.
    - Use `uv` como gerenciador de pacotes Python.
    ```

### Construir Aplicação Backend FastAPI

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Adicione [`product-requirements.md`](../product-requirements.md) e [`openapi.yaml`](../openapi.yaml) ao GitHub Copilot.
1. Use um prompt como o abaixo para construir uma aplicação backend FastAPI.

    ```text
    Gostaria de construir uma aplicação FastAPI como API backend. Leia cuidadosamente todo o PRD e `openapi.yaml`. Então, siga as instruções abaixo.
    
    - Use context7.
    - Seu diretório de trabalho é `python`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Use FastAPI como framework da aplicação API.
    - Use SQLite como banco de dados.
    - Use `sns_api.db` como nome do banco de dados SQLite.
    - O banco de dados deve sempre ser inicializado sempre que iniciar a aplicação.
    - Use `openapi.yaml` que descreve todos os endpoints e esquema de dados.
    - Use o número da porta `8000`.
    - Certifique-se de permitir CORS de qualquer lugar.
    - O ponto de entrada é `main.py`.
    - A aplicação API deve renderizar a página Swagger UI através de um endpoint padrão.
    - A aplicação API deve renderizar exatamente o mesmo documento OpenAPI através de um endpoint padrão.
    - NÃO adicione nada que não esteja definido em `openapi.yaml`.
    - NÃO modifique nada definido em `openapi.yaml`.
    ```

1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.
1. Uma vez que a aplicação seja construída, verifique se está escrita adequadamente ou não.

    ```text
    Execute a aplicação FastAPI e verifique se a aplicação está funcionando adequadamente. Também verifique se o endpoint OpenAPI renderiza exatamente o mesmo conteúdo que `openapi.yaml`.

    Se a execução da aplicação falhar, analise os problemas e corrija-os.
    ```

1. Abra um navegador web e navegue para `http://localhost:8000`.
1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

---

OK. Você completou a etapa "Python". Vamos seguir para [ETAPA 02: Desenvolvimento de Frontend JavaScript](./02-javascript.md).

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
