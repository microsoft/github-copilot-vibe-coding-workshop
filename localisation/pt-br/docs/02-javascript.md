# 02: Desenvolvimento de Frontend JavaScript

## Cenário

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais.

Como desenvolvedor JavaScript, você vai construir uma aplicação frontend JavaScript usando React para se comunicar com a aplicação backend Python API.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Preparar Projeto da Aplicação](#preparar-projeto-da-aplicação)
- [Preparar Servidor MCP Figma](#preparar-servidor-mcp-figma)
- [Gerar Componentes UI do Figma](#gerar-componentes-ui-do-figma)
- [Executar Aplicação Backend FastAPI](#executar-aplicação-backend-fastapi)
- [Construir Aplicação Frontend React](#construir-aplicação-frontend-react)
- [Verificar Aplicação Frontend React](#verificar-aplicação-frontend-react)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Projeto da Aplicação

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Use um prompt como o abaixo para criar um projeto de aplicação web React.

    ```text
    Gostaria de criar um projeto de aplicação web React. Siga as instruções abaixo.
    
    - Certifique-se de que é uma aplicação web, não mobile.
    - Seu diretório de trabalho é `javascript`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Use ViteJS como framework da aplicação frontend.
    - Use configurações padrão ao inicializar o projeto.
    - Use `SimpleSocialMediaApplication` como nome do projeto durante a inicialização.
    - Use o número da porta `3000`.
    - Apenas inicialize o projeto. NÃO vá além.
    ```

1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

### Preparar Servidor MCP Figma

1. Certifique-se de que você configurou os [Servidores MCP](./00-setup.md#configurar-servidores-mcp).
1. Obtenha o token de acesso pessoal (PAT) do [Figma](https://www.figma.com/).
1. Abra a Paleta de Comandos digitando F1 ou `Ctrl`+`Shift`+`P` no Windows ou `Cmd`+`Shift`+`P` no Mac OS, e procure `MCP: List Servers`.
1. Escolha `Framelink Figma MCP` e clique em `Start Server`.
1. Digite o PAT que você obteve do Figma.

### Gerar Componentes UI do Figma

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que você está executando o servidor MCP Figma.
1. Copie o [template de design Figma](https://www.figma.com/community/file/1495954632647006209) para sua conta.

   ![Página do template de design Figma](../../../docs/images/javascript-01.png)

1. Clique com o botão direito em cada seção - `Home`, `Search`, `Post Details`, `Post Modal` e `Name Input Modal` 👉 Selecione `Copy/Paste as` 👉 Selecione `Copy link to selection` para obter o link para cada seção. Anote todos os cinco links.

### Executar Aplicação Backend FastAPI

1. Certifique-se de que a aplicação backend FastAPI está funcionando.

    ```text
    Execute a API backend FastAPI, que está localizada no diretório `python`.
    ```

   > **NOTA**: Você pode usar a aplicação de exemplo [`complete/python`](../complete/python/) em vez disso.

1. Se você usar GitHub Codespaces, certifique-se de que o número da porta `8000` está definido como `public` em vez de `private`. Caso contrário, você receberá o erro `401` ao acessar da aplicação frontend.

### Construir Aplicação Frontend React

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Certifique-se de que você tem todos os links das seções Figma dos 5 recuperados da [seção anterior](#gerar-componentes-ui-do-figma).
1. Adicione [`product-requirements.md`](../product-requirements.md) e [`openapi.yaml`](../openapi.yaml) ao GitHub Copilot.
1. Use um prompt como o abaixo para construir a aplicação baseada nos requisitos e documento OpenAPI.

    ```text
    Gostaria de construir uma aplicação web React. Siga as instruções abaixo.
    
    - Seu diretório de trabalho é `javascript`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Há uma aplicação API backend rodando em `http://localhost:8000`.
    - Use `openapi.yaml` que descreve todos os endpoints e esquema de dados.
    - Use o número da porta `3000`.
    - Crie todos os componentes UI definidos neste link: {{FIGMA_SECTION_LINK}}.
    - NÃO adicione nada não relacionado aos componentes UI.
    - NÃO adicione nada não definido em `openapi.yaml`.
    - NÃO modifique nada definido em `openapi.yaml`.
    - Forneça indicação visual quando a API backend estiver indisponível ou inacessível por qualquer motivo.
    ```

1. Repita mais quatro vezes para os outros quatro links de design Figma.
1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

### Verificar Aplicação Frontend React

1. Certifique-se de que a aplicação backend FastAPI está funcionando.

    ```text
    Execute a API backend FastAPI, que está localizada no diretório `python`.
    ```

1. Verifique se foi construída adequadamente ou não.

    ```text
    Execute a aplicação React e verifique se a aplicação está funcionando adequadamente.

    Se a execução da aplicação falhar, analise os problemas e corrija-os.
    ```

1. Abra um navegador web e navegue para `http://localhost:3000`.
1. Verifique se ambas as aplicações frontend e backend estão funcionando adequadamente.
1. Clique no botão `[keep]` do GitHub Copilot para aceitar as mudanças.

---

OK. Você completou a etapa "JavaScript". Vamos seguir para [ETAPA 03: Migração Java do Python](./03-java.md).

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
