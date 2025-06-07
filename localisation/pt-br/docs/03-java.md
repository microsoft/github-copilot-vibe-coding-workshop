# 03: Migração Java do Python

## Cenário

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais.

Como um desenvolvedor Python deixou a empresa, os stakeholders pediram para migrar a aplicação backend Python API existente para Java, usando Spring Boot.

Agora, como desenvolvedor Java, você deve migrar a aplicação FastAPI existente para Spring Boot. Você tem muito pouco conhecimento de Python e FastAPI, a propósito.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Preparar Projeto Spring Boot](#preparar-projeto-spring-boot)
- [Migrar Aplicação API FastAPI](#migrar-aplicação-api-fastapi)
- [Verificar Aplicação Backend Spring Boot](#verificar-aplicação-backend-spring-boot)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Preparar Projeto Spring Boot

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Instale o Spring Boot CLI.

    ```bash
    sdk install springboot
    ```

1. Use um prompt como o abaixo para criar um projeto de aplicação Spring Boot.

    ```text
    Gostaria de criar um projeto de aplicação Spring Boot. Siga as instruções abaixo.

    - Use context7.
    - Seu diretório de trabalho é `java`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Use Spring Boot CLI para criar o projeto de aplicação Spring Boot.
    - Use Gradle como gerenciador de pacotes Java.
    - Use o nome do pacote `com.contoso.socialapp`.
    - Use o artifact ID `socialapp`.
    - Use o group ID `com.contoso`.
    - Use o tipo de pacote `jar`.
    - Use a versão OpenJDK `21`.
    - Adicione dependências - `Spring Web`, `Spring Boot Actuator` e `Lombok`.
    - Use o número da porta `8080`.
    - Certifique-se de permitir CORS de qualquer lugar.
    - Construa a aplicação Spring Boot e verifique se a aplicação foi construída adequadamente.
    - Execute esta aplicação Spring Boot e verifique se a aplicação está funcionando adequadamente.
    - Se construir ou executar a aplicação falhar, analise os problemas e corrija-os.
    ```

1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

### Migrar Aplicação API FastAPI

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Certifique-se de que o servidor MCP `context7` está funcionando.
1. Adicione [`product-requirements.md`](../product-requirements.md) e [`openapi.yaml`](../openapi.yaml) ao GitHub Copilot.
1. Use um prompt como o abaixo para migrar FastAPI para Spring Boot.

    ```text
    Agora, estamos migrando a aplicação API baseada em FastAPI existente para aplicação API Spring Boot. Siga as instruções abaixo para a migração.
    
    - Use context7.
    - A aplicação FastAPI existente está localizada em `python`.
    - Seu diretório de trabalho é `java/socialapp`.
    - Identifique todos os passos primeiro, que você vai fazer.
    - Analise a estrutura da aplicação da aplicação FastAPI existente.
    - Migre todos os endpoints. Ambos os endpoints correspondentes devem ser exatamente iguais um ao outro.
    - Use SQLite como banco de dados.
    - Use `sns_api.db` como nome do banco de dados SQLite.
    - O banco de dados deve sempre ser inicializado sempre que iniciar a aplicação.
    - Use `openapi.yaml` que descreve todos os endpoints e esquema de dados.
    - A aplicação API deve renderizar a página Swagger UI através de um endpoint padrão.
    - A aplicação API deve renderizar exatamente o mesmo documento OpenAPI através de um endpoint padrão.
    - NÃO adicione nada não definido em `openapi.yaml`.
    - NÃO modifique nada definido em `openapi.yaml`.
    - Se necessário, adicione mais pacotes para OpenAPI e Swagger UI.
    ```

1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.
1. Uma vez que a migração esteja completa, use um prompt como o abaixo para verificar o resultado da migração.

    ```text
    Gostaria de construir a aplicação Spring Boot. Siga as instruções.

    - Use context7.
    - Construa a aplicação Spring Boot e verifique se a aplicação foi construída adequadamente.
    - Se construir a aplicação falhar, analise os problemas e corrija-os.
    ```

   > **NOTA**:
   >
   > - Até que a construção seja bem-sucedida, itere esta etapa.
   > - Se a construção continuar falhando, verifique as mensagens de erro e pergunte ao Agente GitHub Copilot para entendê-las.

1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

### Verificar Aplicação Backend Spring Boot

1. Uma vez que a aplicação seja construída, verifique se está escrita adequadamente ou não.

    ```text
    Execute a aplicação Spring Boot e verifique se a aplicação está funcionando adequadamente verificando todos os endpoints. Também verifique se o endpoint OpenAPI renderiza exatamente o mesmo conteúdo que `openapi.yaml`.

    Se a execução da aplicação falhar, analise os problemas e corrija-os. Use context7.
    ```

1. Abra um navegador web e navegue para `http://localhost:8080`.
1. Clique no botão ![a imagem do botão "keep"](https://img.shields.io/badge/keep-blue) do GitHub Copilot para aceitar as mudanças.

---

OK. Você completou a etapa "Java". Vamos seguir para [ETAPA 04: Migração .NET do JavaScript](./04-dotnet.md).

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
