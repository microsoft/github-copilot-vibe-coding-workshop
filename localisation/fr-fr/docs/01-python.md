# 01: Développement Backend Python

## Scénario

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels.

En tant que développeur Python, vous allez construire une application backend Python en utilisant FastAPI. Pour l'instant, vous utilisez la fonctionnalité en mémoire de SQLite.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Préparer l'Environnement Virtuel](#préparer-lenvironnement-virtuel)
- [Construire l'Application Backend FastAPI](#construire-lapplication-backend-fastapi)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/python/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/python/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Préparer l'Environnement Virtuel

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Utilisez une invite comme ci-dessous pour préparer l'environnement virtuel pour le développement d'applications Python.

    ```text
    J'aimerais écrire une application Python. Mais avant cela, j'ai besoin de configurer un environnement virtuel. Suivez les instructions ci-dessous.
    
    - Utilisez context7.
    - Votre répertoire de travail est `python`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Utilisez `.venv` pour l'environnement virtuel.
    - Utilisez `uv` comme gestionnaire de paquets Python.
    ```

### Construire l'Application Backend FastAPI

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Ajoutez [`product-requirements.md`](../product-requirements.md) et [`openapi.yaml`](../openapi.yaml) à GitHub Copilot.
1. Utilisez une invite comme ci-dessous pour construire une application backend FastAPI.

    ```text
    J'aimerais construire une application FastAPI comme API backend. Lisez attentivement l'ensemble du PRD et `openapi.yaml`. Ensuite, suivez les instructions ci-dessous.
    
    - Utilisez context7.
    - Votre répertoire de travail est `python`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Utilisez FastAPI comme framework d'application API.
    - Utilisez SQLite comme base de données.
    - Utilisez `sns_api.db` comme nom de la base de données SQLite.
    - La base de données doit toujours être initialisée à chaque démarrage de l'application.
    - Utilisez `openapi.yaml` qui décrit tous les points de terminaison et le schéma de données.
    - Utilisez le numéro de port `8000`.
    - Assurez-vous d'autoriser CORS depuis partout.
    - Le point d'entrée est `main.py`.
    - L'application API doit rendre la page Swagger UI via un point de terminaison par défaut.
    - L'application API doit rendre exactement le même document OpenAPI via un point de terminaison par défaut.
    - N'ajoutez RIEN qui ne soit pas défini dans `openapi.yaml`.
    - NE modifiez RIEN de ce qui est défini dans `openapi.yaml`.
    ```

1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.
1. Une fois l'application construite, vérifiez si elle est écrite correctement ou non.

    ```text
    Exécutez l'application FastAPI et vérifiez si l'application fonctionne correctement. Vérifiez également que le point de terminaison OpenAPI rend exactement le même contenu que `openapi.yaml`.

    Si l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:8000`.
1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

---

OK. Vous avez terminé l'étape "Python". Passons à [ÉTAPE 02: Développement Frontend JavaScript](./02-javascript.md).

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
