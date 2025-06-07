# Échantillon d'Application JavaScript

## Prérequis

Référez-vous au document [README](../../../README.md) pour la préparation.

## Démarrage

### Exécuter le Backend FastAPI

Utilisez [l'Échantillon d'Application Python](../python/).

> **NOTE** : Si vous utilisez GitHub Codespaces, assurez-vous que le port de l'application Python, `8000`, est défini sur **public**.

### Exécuter le Frontend React

1. Obtenez la racine du référentiel.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Installez les paquets npm.

    ```bash
    cd $REPOSITORY_ROOT/complete/javascript
    npm install
    ```

1. Exécutez l'application.

    ```bash
    npm run dev
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:3000`.
1. Vérifiez si l'application web fonctionne correctement.

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
