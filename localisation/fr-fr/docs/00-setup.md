# 00: Environnement de Développement

Dans cette étape, vous configurez l'environnement de développement pour l'atelier.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Utiliser GitHub Codespaces](#utiliser-github-codespaces)
- [Utiliser Visual Studio Code](#utiliser-visual-studio-code)
  - [Installer PowerShell 👉 Pour les Utilisateurs Windows](#installer-powershell--pour-les-utilisateurs-windows)
  - [Installer git CLI](#installer-git-cli)
  - [Installer GitHub CLI](#installer-github-cli)
  - [Installer Docker Desktop](#installer-docker-desktop)
  - [Installer Visual Studio Code](#installer-visual-studio-code)
  - [Démarrer Visual Studio Code](#démarrer-visual-studio-code)
  - [Configurer les Serveurs MCP](#configurer-les-serveurs-mcp)
- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Configurer le Mode Bête](#configurer-le-mode-bête)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Analyser le Document d'Exigences Produit (PRD) et Concevoir l'API](#analyser-le-document-dexigences-produit-prd-et-concevoir-lapi)

## Utiliser GitHub Codespaces

1. Cliquez sur ce lien 👉 [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

1. Une fois que l'instance GitHub Codespace est prête, ouvrez un terminal et exécutez la commande suivante pour vérifier si tout ce dont vous avez besoin a été installé correctement ou non.

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

1. Vérifiez le statut de votre dépôt.

    ```bash
    git remote -v
    ```

   Vous devriez pouvoir voir ce qui suit.

    ```bash
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

   Si vous voyez quelque chose de différent de ce qui précède, supprimez l'instance GitHub Codespace et recréez-la.

1. Descendez à la section [Configurer les Serveurs MCP](#configurer-les-serveurs-mcp).

**👇👇👇 Au lieu de cela, si vous souhaitez utiliser VS Code sur votre machine locale, suivez les instructions ci-dessous. La section ci-dessous ne s'applique pas à ceux qui utilisent GitHub Codespaces. 👇👇👇**

## Utiliser Visual Studio Code

### Installer PowerShell 👉 Pour les Utilisateurs Windows

1. Vérifiez si vous avez déjà installé PowerShell ou non.

    ```bash
    # Bash/Zsh
    which pwsh
    ```

    ```bash
    # PowerShell
    Get-Command pwsh
    ```

   Si vous ne voyez pas le chemin de commande de `pwsh`, cela signifie que vous n'avez pas encore installé PowerShell. Visitez la [page d'installation PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) et suivez les instructions.

1. Vérifiez la version de votre PowerShell.

    ```bash
    pwsh --version
    ```

   `7.5.0` ou supérieur est recommandé. Si la vôtre est inférieure à cela, visitez la [page d'installation PowerShell](https://learn.microsoft.com/powershell/scripting/install/installing-powershell) et suivez les instructions.

### Installer git CLI

1. Vérifiez si vous avez déjà installé git CLI ou non.

    ```bash
    # Bash/Zsh
    which git
    ```

    ```bash
    # PowerShell
    Get-Command git
    ```

   Si vous ne voyez pas le chemin de commande de `git`, cela signifie que vous n'avez pas encore installé le git CLI. Visitez la [page d'installation git CLI](https://git-scm.com/downloads) et suivez les instructions.

1. Vérifiez la version de votre git CLI.

    ```bash
    git --version
    ```

   `2.39.0` ou supérieur est recommandé. Si la vôtre est inférieure à cela, visitez la [page d'installation git CLI](https://git-scm.com/downloads) et suivez les instructions.

### Installer GitHub CLI

1. Vérifiez si vous avez déjà installé GitHub CLI ou non.

    ```bash
    # Bash/Zsh
    which gh
    ```

    ```bash
    # PowerShell
    Get-Command gh
    ```

   Si vous ne voyez pas le chemin de commande de `gh`, cela signifie que vous n'avez pas encore installé le GitHub CLI. Visitez la [page d'installation GitHub CLI](https://cli.github.com/) et suivez les instructions.

1. Vérifiez la version de votre GitHub CLI.

    ```bash
    gh --version
    ```

   `2.65.0` ou supérieur est recommandé. Si la vôtre est inférieure à cela, visitez la [page d'installation GitHub CLI](https://cli.github.com/) et suivez les instructions.

1. Vérifiez si vous vous êtes connecté à GitHub ou non.

    ```bash
    gh auth status
    ```

   Si vous ne vous êtes pas encore connecté, exécutez `gh auth login` et connectez-vous.

### Installer Docker Desktop

1. Vérifiez si vous avez déjà installé Docker Desktop ou non.

    ```bash
    # Bash/Zsh
    which docker
    ```

    ```bash
    # PowerShell
    Get-Command docker
    ```

   Si vous ne voyez pas le chemin de commande de `docker`, cela signifie que vous n'avez pas encore installé Docker Desktop. Visitez la [page d'installation Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) et suivez les instructions.

1. Vérifiez la version de votre Docker CLI.

    ```bash
    docker --version
    ```

   `28.0.4` ou supérieur est recommandé. Si la vôtre est inférieure à cela, visitez la [page d'installation Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/) et suivez les instructions.

### Installer Visual Studio Code

1. Vérifiez si vous avez déjà installé VS Code ou non.

    ```bash
    # Bash/Zsh
    which code
    ```

    ```bash
    # PowerShell
    Get-Command code
    ```

   Si vous ne voyez pas le chemin de commande de `code`, cela signifie que vous n'avez pas encore installé VS Code. Visitez la [page d'installation Visual Studio Code](https://code.visualstudio.com/) et suivez les instructions.

1. Vérifiez la version de votre VS Code.

    ```bash
    code --version
    ```

   `1.99.0` ou supérieur est recommandé. Si la vôtre est inférieure à cela, visitez la [page d'installation Visual Studio Code](https://code.visualstudio.com/) et suivez les instructions.

   > **NOTE**: Vous pourriez ne pas être capable d'exécuter la commande `code`. Dans ce cas, suivez [cette documentation](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) pour la configuration.

### Démarrer Visual Studio Code

1. Créez un répertoire de travail.
1. Exécutez la commande pour forker ce dépôt et le cloner sur votre machine locale.

    ```bash
    gh repo fork microsoft/github-copilot-vibe-coding-workshop --clone
    ```

1. Naviguez dans le répertoire cloné.

    ```bash
    cd github-copilot-vibe-coding-workshop
    ```

1. Exécutez VS Code depuis le terminal.

    ```bash
    code .
    ```

1. Ouvrez un nouveau terminal dans VS Code et exécutez la commande suivante pour vérifier le statut de votre dépôt.

    ```bash
    git remote -v
    ```

   Vous devriez pouvoir voir ce qui suit. Si vous voyez `microsoft` dans `origin`, vous devriez le cloner à nouveau depuis votre dépôt forké.

    ```bash
    origin  https://github.com/<votre ID GitHub>/github-copilot-vibe-coding-workshop.git (fetch)
    origin  https://github.com/<votre ID GitHub>/github-copilot-vibe-coding-workshop.git (push)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (fetch)
    upstream        https://github.com/microsoft/github-copilot-vibe-coding-workshop.git (push)
    ```

1. Vérifiez si les deux extensions ont été installées ou non &ndash; [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) et [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat).

    ```bash
    # Bash/Zsh
    code --list-extensions | grep github.copilot
    ```

    ```powershell
    # PowerShell
    code --list-extensions | Select-String "github.copilot"
    ```

   Si vous ne voyez rien, cela signifie que vous n'avez pas encore installé ces extensions. Exécutez la commande suivante pour installer les extensions.

    ```bash
    code --install-extension "github.copilot" --force && code --install-extension "github.copilot-chat" --force
    ```

### Configurer les Serveurs MCP

1. Assurez-vous que Docker Desktop est en cours d'exécution si vous utilisez VS Code sur votre machine locale.
1. Définissez la variable d'environnement de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copiez les paramètres du serveur MCP.

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

1. Ouvrez la Palette de Commandes en tapant F1 ou `Ctrl`+`Shift`+`P` sur Windows ou `Cmd`+`Shift`+`P` sur Mac OS, et recherchez `MCP: List Servers`.
1. Choisissez `context7` puis cliquez sur `Start Server`.
1. Choisissez `awesome-copilot` puis cliquez sur `Start Server`.

## Vérifier le Mode Agent GitHub Copilot

1. Cliquez sur l'icône GitHub Copilot en haut de GitHub Codespace ou VS Code et ouvrez la fenêtre GitHub Copilot.

   ![Ouvrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Si on vous demande de vous connecter ou de vous inscrire, faites-le. C'est gratuit.
1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot.

   ![Mode Agent GitHub Copilot](../../../docs/images/setup-03.png)

1. Sélectionnez le modèle soit `GPT-4.1` soit `Claude Sonnet 4`.

## Configurer le Mode Bête

1. Entrez `/mcp.awesome-copilot.get_search_prompt`, suivi de mots-clés comme "beast mode"

   Cela devrait afficher la liste des modes de chat bête. Entrez un prompt similaire à `4.1 Beast Chat Mode`. Ensuite, il sera sauvegardé sous le répertoire `.github/chatmodes`.

1. Choisissez le mode `4.1-Beast` au lieu du mode `Agent`. Il changera automatiquement le LLM vers `GPT 4.1`.

1. Définissez la variable d'environnement de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copiez les paramètres de l'espace de travail.

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

## Préparer les Instructions Personnalisées

1. Définissez la variable d'environnement de `$REPOSITORY_ROOT`.

   ```bash
   # bash/zsh
   REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
   ```

   ```powershell
   # PowerShell
   $REPOSITORY_ROOT = git rev-parse --show-toplevel
   ```

1. Copiez les instructions personnalisées.

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

## Analyser le Document d'Exigences Produit (PRD) et Concevoir l'API

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Ajoutez [`product-requirements.md`](../product-requirements.md) à GitHub Copilot.
1. Entrez l'invite comme suit pour que l'Agent GitHub Copilot génère un document OpenAPI pour vous. Ce document OpenAPI sera la base de toute votre application.

    ```text
    Voici le PRD pour vous. Lisez attentivement l'ensemble du PRD et faites ce qui suit pour moi.
    
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Générez un document OpenAPI au format YAML.
    - Le document OpenAPI doit capturer tous les points de terminaison API, paramètres et charges utiles de requête/réponse.
    - Supposez que le serveur API est `http://localhost:8080` et l'URL de base est `/api`.
    - Enregistrez-le dans le fichier `openapi.yaml` à la racine du dépôt.
    ```

1. Vérifiez que le fichier `openapi.yaml` est généré à la racine du dépôt.
1. Cliquez sur le bouton `[keep]` de GitHub Copilot pour prendre le fichier `openapi.yaml`.

---

OK. Vous avez terminé l'étape "Environnement de Développement". Passons à [ÉTAPE 01: Développement Backend Python](./01-python.md).

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
