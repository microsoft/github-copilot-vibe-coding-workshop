# 05: Conteneurisation

## Scénario

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels.

Ils ont maintenant à la fois une application backend basée sur Java et une application frontend basée sur .NET. Ils veulent les conteneuriser pour qu'elles puissent être déployées sur n'importe quelle plateforme.

Maintenant, en tant qu'ingénieur DevOps, vous devez conteneuriser les deux applications.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Conteneuriser l'Application Java](#conteneuriser-lapplication-java)
- [Conteneuriser l'Application .NET](#conteneuriser-lapplication-net)
- [Orchestrer les Conteneurs](#orchestrer-les-conteneurs)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/containerization/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/containerization/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Conteneuriser l'Application Java

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Utilisez une invite comme ci-dessous pour construire une image conteneur pour l'application Java.

    ```text
    J'aimerais construire une image conteneur d'une application Java. Suivez les instructions ci-dessous.

    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - L'application Java se trouve dans `java/socialapp`.
    - Votre répertoire de travail est la racine du dépôt.
    - Créez un Dockerfile, `Dockerfile.java`.
    - Utilisez Microsoft OpenJDK 21.
    - Utilisez l'approche de construction multi-étapes.
    - Extrayez JRE de JDK.
    - Utilisez le numéro de port cible `8080` pour l'image conteneur.
    - Ajoutez les deux variables d'environnement, `CODESPACE_NAME` et `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` de l'hôte à l'image conteneur.
    - Créez un fichier de base de données SQLite, `sns_api.db`, dans l'image conteneur. NE copiez PAS le fichier de l'hôte.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

1. Une fois `Dockerfile.java` créé, construisez l'image conteneur avec l'invite suivante.

    ```text
    Utilisez `Dockerfile.java` et construisez une image conteneur.

    - Utilisez `contoso-backend` comme nom d'image conteneur.
    - Utilisez `latest` comme tag d'image conteneur.
    - Vérifiez si l'image conteneur est construite correctement.
    - Si la construction échoue, analysez les problèmes et corrigez-les.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

1. Une fois la construction réussie, exécutez l'image conteneur avec l'invite suivante.

    ```text
    Utilisez l'image conteneur qui vient d'être construite, exécutez un conteneur et vérifiez si l'application fonctionne correctement.
    
    - Utilisez le port hôte `8080`.
    - Les deux valeurs `CODESPACE_NAME` et `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` doivent être celles de GitHub Codespaces.
    ```

### Conteneuriser l'Application .NET

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Utilisez une invite comme ci-dessous pour construire une image conteneur pour l'application .NET.

    ```text
    J'aimerais construire une image conteneur d'une application .NET. Suivez les instructions ci-dessous.

    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - L'application .NET se trouve dans `dotnet`.
    - Votre répertoire de travail est la racine du dépôt.
    - Créez un Dockerfile, `Dockerfile.dotnet`.
    - Utilisez .NET 9.
    - Utilisez l'approche de construction multi-étapes.
    - Utilisez le numéro de port cible `8080` pour l'image conteneur.
    - Ajoutez la variable d'environnement, `ApiSettings__BaseUrl` au conteneur. Elle doit pointer vers l'application Java, `http://localhost:8080/api`.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

1. Une fois `Dockerfile.dotnet` créé, construisez l'image conteneur avec l'invite suivante.

    ```text
    Utilisez `Dockerfile.dotnet` et construisez une image conteneur.

    - Utilisez `contoso-frontend` comme nom d'image conteneur.
    - Utilisez `latest` comme tag d'image conteneur.
    - Vérifiez si l'image conteneur est construite correctement.
    - Si la construction échoue, analysez les problèmes et corrigez-les.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

1. Une fois la construction réussie, exécutez l'image conteneur avec l'invite suivante.

    ```text
    Utilisez l'image conteneur qui vient d'être construite, exécutez un conteneur et vérifiez si l'application fonctionne correctement.
    
    - Utilisez le port hôte `3030`.
    - Passez la variable d'environnement `ApiSettings__BaseUrl` la valeur de `http://localhost:8080/api`.
    ```

1. Assurez-vous que les applications frontend et backend ne communiquent PAS entre elles car elles ne se connaissent pas encore. Exécutez l'invite comme ci-dessous.

    ```text
    Supprimez les deux conteneurs Java et .NET et leurs images conteneur respectives.
    ```

### Orchestrer les Conteneurs

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Utilisez une invite comme ci-dessous pour construire un fichier Docker Compose.

    ```text
    J'aimerais créer un fichier Docker Compose. Suivez les instructions ci-dessous.
    
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Votre répertoire de travail est la racine du dépôt.
    - Utilisez `Dockerfile.java` comme application backend.
    - Utilisez `Dockerfile.dotnet` comme application frontend.
    - Créez `compose.yaml` comme fichier Docker Compose.
    - Utilisez `contoso` comme nom de réseau.
    - Utilisez `contoso-backend` comme nom de conteneur de l'application Java. Son port cible est 8080, et le port hôte est 8080.
    - Utilisez `contoso-frontend` comme nom de conteneur de l'application .NET. Son port cible est 8080, et le port hôte est 3030.
    - Ajoutez les deux variables d'environnement, `CODESPACE_NAME` et `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN` de l'hôte au conteneur Java.
    - Ajoutez la variable d'environnement, `ApiSettings__BaseUrl` au conteneur .NET. Elle doit pointer vers le `/api` de l'application Java.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

1. Une fois le fichier `compose.yaml` créé, exécutez-le et vérifiez si les deux applications fonctionnent correctement.

    ```text
    Exécutez le fichier Docker compose et vérifiez si toutes les applications fonctionnent correctement.
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:3030`, et vérifiez si les applications sont en marche et fonctionnent correctement.

---

Félicitations ! 🎉 Vous avez terminé toutes les sessions d'atelier avec succès !

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
