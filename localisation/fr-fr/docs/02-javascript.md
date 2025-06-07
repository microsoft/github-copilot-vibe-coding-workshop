# 02: Développement Frontend JavaScript

## Scénario

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels.

En tant que développeur JavaScript, vous allez construire une application frontend JavaScript en utilisant React qui communique avec l'application API backend Python.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Préparer le Projet d'Application](#préparer-le-projet-dapplication)
- [Préparer le Serveur MCP Figma](#préparer-le-serveur-mcp-figma)
- [Générer les Composants UI depuis Figma](#générer-les-composants-ui-depuis-figma)
- [Exécuter l'Application Backend FastAPI](#exécuter-lapplication-backend-fastapi)
- [Construire l'Application Frontend React](#construire-lapplication-frontend-react)
- [Vérifier l'Application Frontend React](#vérifier-lapplication-frontend-react)

### Vérifier le Mode Agent GitHub Copilot

1. Cliquez sur l'icône GitHub Copilot en haut de GitHub Codespace ou VS Code et ouvrez la fenêtre GitHub Copilot.

   ![Ouvrir GitHub Copilot Chat](../../../docs/images/setup-02.png)

1. Si on vous demande de vous connecter ou de vous inscrire, faites-le. C'est gratuit.
1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot.

   ![Mode Agent GitHub Copilot](../../../docs/images/setup-03.png)

1. Sélectionnez le modèle soit `GPT-4.1` soit `Claude Sonnet 4`.
1. Assurez-vous que vous avez configuré les [Serveurs MCP](./00-setup.md#configurer-les-serveurs-mcp).

### Préparer les Instructions Personnalisées

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/javascript/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/javascript/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Préparer le Projet d'Application

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Utilisez une invite comme ci-dessous pour échafauder un projet d'application web React.

    ```text
    J'aimerais échafauder une application web React. Suivez les instructions ci-dessous.
    
    - Assurez-vous que c'est l'application web, pas l'application mobile.
    - Votre répertoire de travail est `javascript`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Utilisez ViteJS comme framework d'application frontend.
    - Utilisez les paramètres par défaut lors de l'initialisation du projet.
    - Utilisez `SimpleSocialMediaApplication` comme nom du projet lors de l'initialisation.
    - Utilisez le numéro de port `3000`.
    - Initialisez seulement le projet. N'allez PAS plus loin.
    ```

1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

### Préparer le Serveur MCP Figma

1. Assurez-vous que vous avez configuré les [Serveurs MCP](./00-setup.md#configurer-les-serveurs-mcp).
1. Obtenez le jeton d'accès personnel (PAT) depuis [Figma](https://www.figma.com/).
1. Ouvrez la Palette de Commandes en tapant F1 ou `Ctrl`+`Shift`+`P` sur Windows ou `Cmd`+`Shift`+`P` sur Mac OS, et recherchez `MCP: List Servers`.
1. Choisissez `Framelink Figma MCP` puis cliquez sur `Start Server`.
1. Entrez le PAT que vous avez obtenu de Figma.

### Générer les Composants UI depuis Figma

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que vous exécutez le serveur MCP Figma.
1. Copiez le [modèle de conception Figma](https://www.figma.com/community/file/1495954632647006209) vers votre compte.

   ![Page de modèle de conception Figma](../../../docs/images/javascript-01.png)

1. Faites un clic droit sur chaque section - `Home`, `Search`, `Post Details`, `Post Modal` et `Name Input Modal` 👉 Sélectionnez `Copy/Paste as` 👉 Sélectionnez `Copy link to selection` pour obtenir le lien vers chaque section. Notez les cinq liens.

### Exécuter l'Application Backend FastAPI

1. Assurez-vous que l'application backend FastAPI est lancée et en cours d'exécution.

    ```text
    Exécutez l'API backend FastAPI, qui se trouve dans le répertoire `python`.
    ```

   > **NOTE**: Vous pouvez utiliser l'application d'exemple [`complete/python`](../complete/python/) à la place.

1. Si vous utilisez GitHub Codespaces, assurez-vous que le numéro de port `8000` est défini sur `public` au lieu de `private`. Sinon, vous obtiendrez l'erreur `401` lors de l'accès depuis l'application frontend.

### Construire l'Application Frontend React

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Assurez-vous que vous avez tous les liens de section Figma des 5 récupérés de la [section précédente](#generer-les-composants-ui-depuis-figma).
1. Ajoutez [`product-requirements.md`](../product-requirements.md) et [`openapi.yaml`](../openapi.yaml) à GitHub Copilot.
1. Utilisez une invite comme ci-dessous pour construire l'application basée sur les exigences et le document OpenAPI.

    ```text
    J'aimerais construire une application web React. Suivez les instructions ci-dessous.
    
    - Votre répertoire de travail est `javascript`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Il y a une application API backend qui fonctionne sur `http://localhost:8000`.
    - Utilisez `openapi.yaml` qui décrit tous les points de terminaison et le schéma de données.
    - Utilisez le numéro de port `3000`.
    - Créez tous les composants UI définis dans ce lien : {{FIGMA_SECTION_LINK}}.
    - N'ajoutez RIEN qui ne soit pas lié aux composants UI.
    - N'ajoutez RIEN qui ne soit pas défini dans `openapi.yaml`.
    - NE modifiez RIEN de ce qui est défini dans `openapi.yaml`.
    - Donnez une indication visuelle quand l'API backend est indisponible ou inaccessible pour quelque raison que ce soit.
    ```

1. Répétez quatre fois de plus pour les quatre autres liens de conception Figma.
1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

### Vérifier l'Application Frontend React

1. Assurez-vous que l'application backend FastAPI est lancée et en cours d'exécution.

    ```text
    Exécutez l'API backend FastAPI, qui se trouve dans le répertoire `python`.
    ```

1. Vérifiez si elle est construite correctement ou non.

    ```text
    Exécutez l'application React et vérifiez si l'application fonctionne correctement.

    Si l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:3000`.
1. Vérifiez si les applications frontend et backend fonctionnent correctement.
1. Cliquez sur le bouton `[keep]` de GitHub Copilot pour prendre les modifications.

---

OK. Vous avez terminé l'étape "JavaScript". Passons à [ÉTAPE 03: Migration Java depuis Python](./03-java.md).

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
