# 00: Ambiente de Desenvolvimento

Nesta etapa, você está configurando o ambiente de desenvolvimento para o workshop.

## Pré-requisitos

Consulte a documentação [README](../README.md) para preparação.

## Primeiros Passos

- [Usar GitHub Codespaces](#usar-github-codespaces)
- [Usar Visual Studio Code](#usar-visual-studio-code)
  - [Instalar PowerShell 👉 Para Usuários Windows](#instalar-powershell--para-usuários-windows)
  - [Instalar git CLI](#instalar-git-cli)
  - [Instalar GitHub CLI](#instalar-github-cli)
  - [Instalar Docker Desktop](#instalar-docker-desktop)
  - [Instalar Visual Studio Code](#instalar-visual-studio-code)
  - [Iniciar Visual Studio Code](#iniciar-visual-studio-code)
  - [Configurar Servidores MCP](#configurar-servidores-mcp)
- [Verificar o Modo Agente do GitHub Copilot](#verificar-o-modo-agente-do-github-copilot)
- [Configurar Modo Fera](#configurar-modo-fera)
- [Preparar Instruções Customizadas](#preparar-instruções-customizadas)
- [Analisar Documento de Requisitos do Produto (PRD) e Projetar API](#analisar-documento-de-requisitos-do-produto-prd-e-projetar-api)

## Usar GitHub Codespaces

1. Clique neste link 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. Uma vez que a instância do GitHub Codespace esteja pronta, abra um terminal e execute o seguinte comando para verificar se tudo que você precisa foi devidamente instalado ou não.

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

1. Verifique o status do seu repositório.

    ```bash
    git remote -v
    ```

   Você deve conseguir ver o seguinte.

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   Se você ver algo diferente do acima, delete a instância do GitHub Codespace e recrie-a.

1. Vá para a seção [Configurar Servidores MCP](#configurar-servidores-mcp).

**👇👇👇 Ao invés disso, se você gostaria de usar VS Code em sua máquina local, siga as instruções abaixo. A seção abaixo não se aplica àqueles que usam GitHub Codespaces. 👇👇👇**

## Usar Visual Studio Code

### Instalar PowerShell 👉 Para Usuários Windows

1. Verifique se você já instalou o PowerShell ou não.

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   Se você não vir o caminho do comando `pwsh`, significa que você ainda não instalou o PowerShell. Visite a [página de instalação do PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) e siga as instruções.

1. Verifique a versão do seu PowerShell.

    ```bash
    pwsh --version
    ```

   `7.5.0` ou superior é recomendado. Se o seu for inferior a isso, visite a [página de instalação do PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) e siga as instruções.

### Instalar git CLI

1. Verifique se você já instalou o git CLI ou não.

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   Se você não vir o caminho do comando `git`, significa que você ainda não instalou o git CLI. Visite a [página de instalação do git CLI](https://git-scm.com/downloads) e siga as instruções.

1. Verifique a versão do seu git CLI.

    ```bash
    git --version
    ```

   `2.39.0` ou superior é recomendado. Se o seu for inferior a isso, visite a [página de instalação do git CLI](https://git-scm.com/downloads) e siga as instruções.

### Instalar GitHub CLI

1. Verifique se você já instalou o GitHub CLI ou não.

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   Se você não vir o caminho do comando `gh`, significa que você ainda não instalou o GitHub CLI. Visite a [página de instalação do GitHub CLI](https://cli.github.com/) e siga as instruções.

1. Verifique a versão do seu GitHub CLI.

    ```bash
    gh --version
    ```

   `2.65.0` ou superior é recomendado. Se o seu for inferior a isso, visite a [página de instalação do GitHub CLI](https://cli.github.com/) e siga as instruções.

1. Verifique se você fez login no GitHub ou não.

    ```bash
    gh auth status
    ```

   Se você ainda não fez login, execute `gh auth login` e faça login.

### Instalar Docker Desktop

1. Verifique se você já instalou o Docker Desktop ou não.

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   Se você não vir o caminho do comando `docker`, significa que você ainda não instalou o Docker Desktop. Visite a [página de instalação do Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) e siga as instruções.

1. Verifique a versão do seu Docker CLI.

    ```bash
    docker --version
    ```

   `28.0.4` ou superior é recomendado. Se o seu for inferior a isso, visite a [página de instalação do Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) e siga as instruções.

### Instalar Visual Studio Code

1. Verifique se você já instalou o VS Code ou não.

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   Se você não vir o caminho do comando `code`, significa que você ainda não instalou o VS Code. Visite a [página de instalação do Visual Studio Code](https://code.visualstudio.com/) e siga as instruções.

1. Verifique a versão do seu VS Code.

    ```bash
    code --version
    ```

   `1.99.0` ou superior é recomendado. Se o seu for inferior a isso, visite a [página de instalação do Visual Studio Code](https://code.visualstudio.com/) e siga as instruções.

   > **NOTA**: Você pode não conseguir executar o comando `code`. Neste caso, siga [este documento](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) para configuração.

### Iniciar Visual Studio Code

1. Crie um diretório de trabalho.
1. Execute o comando para fazer fork deste repo e cloná-lo em sua máquina local.

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. Navegue para o diretório clonado.

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. Execute o VS Code a partir do terminal.

    ```bash
    code .
    ```

1. Abra um novo terminal dentro do VS Code e execute o seguinte comando para verificar o status do seu repositório.

    ```bash
    git remote -v
    ```

   Você deve conseguir ver o seguinte. Se você vir `microsoft` em `origin`, você deve cloná-lo novamente do seu repositório com fork.

    ```bash
    origin  https://github.com/<seu GitHub ID>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<seu GitHub ID>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. Verifique se ambas as extensões foram instaladas ou não &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) e [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat).

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   Se você não vir nada, significa que você ainda não instalou essas extensões. Execute o seguinte comando para instalar as extensões.

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### Configurar Servidores MCP

1. Certifique-se de que o Docker Desktop esteja em execução se você usar o VS Code em sua máquina local.
1. Defina a variável de ambiente `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copie as configurações do servidor MCP.

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

1. Abra a Paleta de Comandos digitando F1 ou `Ctrl`+`Shift`+`P` no Windows ou `Cmd`+`Shift`+`P` no Mac OS, e procure `MCP: List Servers`.
1. Escolha `context7` e clique em `Start Server`.
1. Escolha `awesome-copilot` e clique em `Start Server`.

## Verificar o Modo Agente do GitHub Copilot

1. Clique no ícone do GitHub Copilot no topo do GitHub Codespace ou VS Code e abra a janela do GitHub Copilot.

   ![Abrir GitHub Copilot Chat](.../../../docs/images/setup-02.png)

1. Se você for solicitado a fazer login ou se inscrever, faça-o. É gratuito.
1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot.

   ![Modo Agente do GitHub Copilot](../../../docs/images/setup-03.png)

1. Selecione o modelo para `GPT-4.1` ou `Claude Sonnet 4`.

## Configurar Modo Fera

1. Digite `/mcp.awesome-copilot.get_search_prompt`, seguido de palavras-chave como "beast mode"

   Isso deve mostrar a lista de modos de chat fera. Digite um prompt similar a `4.1 Beast Chat Mode`. Em seguida, será salvo no diretório `.github/chatmodes`.

1. Escolha o modo `4.1-Beast` em vez do modo `Agent`. Ele mudará automaticamente o LLM para `GPT 4.1`.

1. Defina a variável de ambiente `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copie as configurações do workspace.

    ```bash
    # bash/zsh
    cp $REPOSITORY_ROOT/docs/.vscode/settings.json \
       $REPOSITORY_ROOT/.vscode/settings.json
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/.vscode/settings.json `
              -Destination $REPOSITORY_ROOT/.vscode/settings.json -Force
    ```

## Preparar Instruções Customizadas

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/setup/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/setup/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

## Analisar Documento de Requisitos do Produto (PRD) e Projetar API

1. Certifique-se de que você está usando o Modo Agente do GitHub Copilot com o modelo `Claude Sonnet 4` ou `GPT-4.1`.
1. Adicione [`product-requirements.md`](../product-requirements.md) ao GitHub Copilot.
1. Digite o prompt como o seguinte para o Agente GitHub Copilot gerar um documento OpenAPI para você. Este documento OpenAPI será a base de toda a sua aplicação.

    ```text
    Aqui está o PRD para você. Leia cuidadosamente todo o PRD e faça o seguinte para mim.
    
    - Identifique todos os passos primeiro, que você vai fazer.
    - Gere um documento OpenAPI em formato YAML.
    - O documento OpenAPI deve capturar todos os endpoints da API, parâmetros e payloads de requisição/resposta.
    - Assuma que o servidor da API é `http://localhost:8080` e a URL base é `/api`.
    - Salve-o no arquivo `openapi.yaml` na raiz do repositório.
    ```

1. Verifique se o `openapi.yaml` foi gerado na raiz do repositório.
1. Clique no botão `[keep]` do GitHub Copilot para aceitar o arquivo `openapi.yaml`.

---

OK. Você completou a etapa "Ambiente de Desenvolvimento". Vamos seguir para [ETAPA 01: Desenvolvimento de Backend Python](./01-python.md).

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
