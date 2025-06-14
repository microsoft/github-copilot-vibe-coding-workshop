# 05: Containerização

## Cenário

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais.

Eles agora têm tanto uma aplicação backend baseada em Java quanto uma aplicação frontend baseada em .NET. Eles querem containerizá-las para que possam ser implantadas em qualquer plataforma.

Agora, como engenheiro DevOps, você deve containerizar ambas as aplicações.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Containerizar Aplicação Java](#containerizar-aplicação-java)
- [Containerizar Aplicação .NET](#containerizar-aplicação-net)
- [Orquestrar Contêineres](#orquestrar-contêineres)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Containerizar Aplicação Java

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Use um prompt como o abaixo para construir uma imagem de contêiner para a aplicação Java.

    ```text
    Gostaria de construir uma imagem de contêiner de uma aplicação Java. Siga as instruções abaixo.

    - Identifique todos os passos primeiro, que você vai fazer.
    - A aplicação Java está localizada em `java/socialapp`.
    - Seu diretório de trabalho é a raiz do repositório.
    - Crie um Dockerfile, `Dockerfile.java`.
    - Use Microsoft OpenJDK 21.
    - Use abordagem de construção multi-estágio.
    - Extraia JRE do JDK.
    - Use o número da porta de destino `8080` para a imagem do contêiner.
    - Adicione ambas as variáveis de ambiente, `CODESPACE_NAME` e `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` do host para a imagem do contêiner.
    - Crie um arquivo de banco de dados SQLite, `sns_api.db`, na imagem do contêiner. NÃO copie o arquivo do host.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

1. Uma vez que `Dockerfile.java` seja criado, construa a imagem do contêiner com o seguinte prompt.

    ```text
    Use `Dockerfile.java` e construa uma imagem de contêiner.

    - Use `contoso-backend` como nome da imagem do contêiner.
    - Use `latest` como tag da imagem do contêiner.
    - Verifique se a imagem do contêiner foi construída adequadamente.
    - Se a construção falhar, analise os problemas e corrija-os.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

1. Uma vez que a construção seja bem-sucedida, execute a imagem do contêiner com o seguinte prompt.

    ```text
    Use a imagem do contêiner recém-construída, execute um contêiner e verifique se a aplicação está funcionando adequadamente.
    
    - Use a porta do host `8080`.
    - Ambos os valores `CODESPACE_NAME` e `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` devem ser aqueles do GitHub Codespaces.
    ```

### Containerizar Aplicação .NET

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Use um prompt como o abaixo para construir uma imagem de contêiner para a aplicação .NET.

    ```text
    Gostaria de construir uma imagem de contêiner de uma aplicação .NET. Siga as instruções abaixo.

    - Identifique todos os passos primeiro, que você vai fazer.
    - A aplicação .NET está localizada em `dotnet`.
    - Seu diretório de trabalho é a raiz do repositório.
    - Crie um Dockerfile, `Dockerfile.dotnet`.
    - Use .NET 9.
    - Use abordagem de construção multi-estágio.
    - Use o número da porta de destino `8080` para a imagem do contêiner.
    - Adicione a variável de ambiente, `ApiSettings__BaseUrl` ao contêiner. Deve apontar para a aplicação Java, `http://localhost:8080/api`.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

1. Uma vez que `Dockerfile.dotnet` seja criado, construa a imagem do contêiner com o seguinte prompt.

    ```text
    Use `Dockerfile.dotnet` e construa uma imagem de contêiner.

    - Use `contoso-frontend` como nome da imagem do contêiner.
    - Use `latest` como tag da imagem do contêiner.
    - Verifique se a imagem do contêiner foi construída adequadamente.
    - Se a construção falhar, analise os problemas e corrija-os.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

1. Uma vez que a construção seja bem-sucedida, execute a imagem do contêiner com o seguinte prompt.

    ```text
    Use a imagem do contêiner recém-construída, execute um contêiner e verifique se a aplicação está funcionando adequadamente.
    
    - Use a porta do host `3030`.
    - Passe a variável de ambiente `ApiSettings__BaseUrl` o valor de `http://localhost:8080/api`.
    ```

1. Certifique-se de que ambas as aplicações frontend e backend NÃO estão se comunicando uma com a outra porque elas ainda não se conhecem. Execute o prompt como abaixo.

    ```text
    Remova ambos os contêineres Java e .NET e suas respectivas imagens de contêiner.
    ```

### Orquestrar Contêineres

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Use um prompt como o abaixo para construir um arquivo Docker Compose.

    ```text
    Gostaria de criar um arquivo Docker Compose. Siga as instruções abaixo.
    
    - Identifique todos os passos primeiro, que você vai fazer.
    - Seu diretório de trabalho é a raiz do repositório.
    - Use `Dockerfile.java` como aplicação backend.
    - Use `Dockerfile.dotnet` como aplicação frontend.
    - Crie `compose.yaml` como arquivo Docker Compose.
    - Use `contoso` como nome da rede.
    - Use `contoso-backend` como nome do contêiner da aplicação Java. Sua porta de destino é 8080, e porta do host é 8080.
    - Use `contoso-frontend` como nome do contêiner da aplicação .NET. Sua porta de destino é 8080, e porta do host é 3030.
    - Adicione ambas as variáveis de ambiente, `CODESPACE_NAME` e `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` do host para o contêiner Java.
    - Adicione a variável de ambiente, `ApiSettings__BaseUrl` ao contêiner .NET. Deve apontar para o `/api` da aplicação Java.
    ```

1. Clique no botão ![a imagem do botão keep](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

1. Uma vez que o arquivo `compose.yaml` seja criado, execute-o e verifique se ambas as aplicações estão funcionando adequadamente.

    ```text
    Execute o arquivo Docker compose e verifique se todas as aplicações estão funcionando adequadamente.
    ```

1. Abra um navegador web e navegue para `http://localhost:3030`, e verifique se as aplicações estão funcionando adequadamente.

---

Parabéns! 🎉 Você completou todas as sessões do workshop com sucesso!

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
