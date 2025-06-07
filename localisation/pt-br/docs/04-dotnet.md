# 04: Migração .NET do JavaScript

## Cenário

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais.

Eles já têm uma aplicação frontend escrita em JavaScript, mais especificamente em React. No entanto, de repente, eles enviaram novos requisitos para redesenvolver a aplicação frontend usando .NET, especialmente em Blazor.

Agora, como desenvolvedor .NET, você deve migrar a aplicação React existente para Blazor. Você tem muito pouco conhecimento de JavaScript e React, a propósito.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Preparar Projeto de Aplicação Web Blazor](#preparar-projeto-de-aplicação-web-blazor)
- [Executar Aplicação Backend Spring Boot](#executar-aplicação-backend-spring-boot)
- [Migrar Aplicação Web React](#migrar-aplicação-web-react)
- [Verificar Aplicação Frontend Blazor](#verificar-aplicação-frontend-blazor)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Projeto de Aplicação Web Blazor

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Use um prompt como o abaixo para criar um projeto de aplicação web Blazor.

    ```text
    Gostaria de criar um projeto de aplicação web Blazor. Siga as instruções abaixo.

    - Use context7.
    - Seu diretório de trabalho é `dotnet`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Mostre-me a lista de projetos .NET relacionados ao Blazor e peça para eu escolher.
    - Gere um projeto Blazor.
    - Use o nome do projeto `Contoso.BlazorApp`.
    - Atualize `launchSettings.json` para mudar o número da porta para `3031` para HTTP, `43031` para HTTPS.
    - Crie uma solução, `ContosoWebApp`, e adicione o projeto Blazor nesta solução.
    - Construa a aplicação Blazor e verifique se a aplicação foi construída adequadamente.
    - Execute esta aplicação Blazor e verifique se a aplicação está funcionando adequadamente.
    - Se construir ou executar a aplicação falhar, analise os problemas e corrija-os.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

### Executar Aplicação Backend Spring Boot

1. Certifique-se de que a aplicação backend Spring Boot está funcionando.

    ```text
    Execute a API backend Spring Boot, que está localizada no diretório `java`.
    ```

   > **NOTA**: Você pode usar a aplicação de exemplo [`complete/java`](../complete/java/) em vez disso.

1. Se você usar GitHub Codespaces, certifique-se de que o número da porta `8080` está definido como `public` em vez de `private`. Caso contrário, você receberá o erro `401` ao acessar da aplicação frontend.

### Migrar Aplicação Web React

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Use um prompt como o abaixo para migrar React para Blazor.

    ```text
    Agora, estamos migrando a aplicação web baseada em React existente para aplicação web Blazor. Siga as instruções abaixo para a migração.
    
    - Use context7.
    - A aplicação React existente está localizada em `javascript`.
    - Seu diretório de trabalho é `dotnet/Contoso.BlazorApp`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Há uma aplicação API backend rodando em `http://localhost:8080`.
    - Analise a estrutura da aplicação da aplicação React existente.
    - Migre todos os componentes React para componentes Blazor. Ambos os componentes correspondentes devem ser o mais próximo possível um do outro.
    - Migre todos os elementos CSS necessários do React para Blazor.
    - Ao migrar elementos JavaScript do React para Blazor, maximize o uso dos recursos nativos do Blazor o máximo possível. Se você tiver que usar JavaScript, use os recursos JSInterop do Blazor.
    - Se necessário, adicione pacotes NuGet que sejam compatíveis com .NET 9.
    ```

1. Uma vez que a migração esteja completa, use um prompt como o abaixo para verificar o resultado da migração.

    ```text
    Gostaria de construir a aplicação Blazor. Siga as instruções.

    - Use context7.
    - Construa a aplicação Blazor e verifique se a aplicação foi construída adequadamente.
    - Se construir a aplicação falhar, analise os problemas e corrija-os.
    ```

   > **NOTA**:
   >
   > - Até que a construção seja bem-sucedida, itere esta etapa.
   > - Se a construção continuar falhando, verifique as mensagens de erro e pergunte ao Agente GitHub Copilot para entendê-las.

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.
1. Uma vez que a construção seja bem-sucedida, use um prompt como o abaixo para verificar o resultado da migração.

    ```text
    Gostaria de executar a aplicação Blazor. Siga as instruções.

    - Use context7.
    - Execute esta aplicação Blazor e verifique se a aplicação está funcionando adequadamente.
    - Ignore o erro de conexão da aplicação API backend nesta etapa.
    - Se executar a aplicação falhar, analise os problemas e corrija-os.
    ```

### Verificar Aplicação Frontend Blazor

1. Certifique-se de que a aplicação backend Spring Boot está funcionando.

    ```text
    Execute a API backend Spring Boot, que está localizada no diretório `java`.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.
1. Verifique se foi construída adequadamente ou não.

    ```text
    Execute a aplicação Blazor e verifique se a aplicação está funcionando adequadamente.

    Se a execução da aplicação falhar, analise os problemas e corrija-os.
    ```

1. Abra um navegador web e navegue para `http://localhost:3031`.
1. Verifique se ambas as aplicações frontend e backend estão funcionando adequadamente.
1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

---

OK. Você completou a etapa ".NET". Vamos seguir para [ETAPA 05: Containerização](./05-containerization.md).

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
