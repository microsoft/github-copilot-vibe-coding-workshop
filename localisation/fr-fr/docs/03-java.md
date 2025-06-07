# 03: Migration Java depuis Python

## Scénario

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels.

Parce qu'un développeur Python a quitté l'entreprise, les parties prenantes ont demandé de migrer l'application API backend Python existante vers Java, en utilisant Spring Boot.

Maintenant, en tant que développeur Java, vous devez migrer l'application FastAPI existante vers Spring Boot. Vous avez très peu de connaissances de Python et FastAPI, au fait.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Préparer le Projet Spring Boot](#préparer-le-projet-spring-boot)
- [Migrer l'Application API FastAPI](#migrer-lapplication-api-fastapi)
- [Vérifier l'Application Backend Spring Boot](#vérifier-lapplication-backend-spring-boot)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/java/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/java/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Préparer le Projet Spring Boot

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Installez Spring Boot CLI.

    ```bash
    sdk install springboot
    ```

1. Utilisez une invite comme ci-dessous pour échafauder un projet d'application Spring Boot.

    ```text
    J'aimerais échafauder une application Spring Boot. Suivez les instructions ci-dessous.

    - Utilisez context7.
    - Votre répertoire de travail est `java`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Utilisez Spring Boot CLI pour créer le projet d'application Spring Boot.
    - Utilisez Gradle comme gestionnaire de paquets Java.
    - Utilisez le nom de paquet `com.contoso.socialapp`.
    - Utilisez l'ID d'artefact `socialapp`.
    - Utilisez l'ID de groupe `com.contoso`.
    - Utilisez le type de paquet `jar`.
    - Utilisez la version OpenJDK `21`.
    - Ajoutez les dépendances - `Spring Web`, `Spring Boot Actuator` et `Lombok`.
    - Utilisez le numéro de port `8080`.
    - Assurez-vous d'autoriser CORS depuis partout.
    - Construisez l'application Spring Boot et vérifiez si l'application est construite correctement.
    - Exécutez cette application Spring Boot et vérifiez si l'application fonctionne correctement.
    - Si la construction ou l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

### Migrer l'Application API FastAPI

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Ajoutez [`product-requirements.md`](../product-requirements.md) et [`openapi.yaml`](../openapi.yaml) à GitHub Copilot.
1. Utilisez une invite comme ci-dessous pour migrer FastAPI vers Spring Boot.

    ```text
    Maintenant, nous migrons l'application API basée sur FastAPI existante vers une application API Spring Boot. Suivez les instructions ci-dessous pour la migration.
    
    - Utilisez context7.
    - L'application FastAPI existante se trouve dans `python`.
    - Votre répertoire de travail est `java/socialapp`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Analysez la structure de l'application FastAPI existante.
    - Migrez tous les points de terminaison. Les deux points de terminaison correspondants doivent être exactement identiques l'un à l'autre.
    - Utilisez SQLite comme base de données.
    - Utilisez `sns_api.db` comme nom de la base de données SQLite.
    - La base de données doit toujours être initialisée à chaque démarrage de l'application.
    - Utilisez `openapi.yaml` qui décrit tous les points de terminaison et le schéma de données.
    - L'application API doit rendre la page Swagger UI via un point de terminaison par défaut.
    - L'application API doit rendre exactement le même document OpenAPI via un point de terminaison par défaut.
    - N'ajoutez RIEN qui ne soit pas défini dans `openapi.yaml`.
    - NE modifiez RIEN de ce qui est défini dans `openapi.yaml`.
    - Si nécessaire, ajoutez plus de paquets pour OpenAPI et Swagger UI.
    ```

1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.
1. Une fois la migration terminée, utilisez une invite comme ci-dessous pour vérifier le résultat de la migration.

    ```text
    J'aimerais construire l'application Spring Boot. Suivez les instructions.

    - Utilisez context7.
    - Construisez l'application Spring Boot et vérifiez si l'application est construite correctement.
    - Si la construction de l'application échoue, analysez les problèmes et corrigez-les.
    ```

   > **NOTE**:
   >
   > - Jusqu'à ce que la construction réussisse, itérez cette étape.
   > - Si la construction continue d'échouer, vérifiez les messages d'erreur et demandez-leur à l'Agent GitHub Copilot de les déchiffrer.

1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

### Vérifier l'Application Backend Spring Boot

1. Une fois l'application construite, vérifiez si elle est écrite correctement ou non.

    ```text
    Exécutez l'application Spring Boot et vérifiez si l'application fonctionne correctement en vérifiant tous les points de terminaison. Vérifiez également que le point de terminaison OpenAPI rend exactement le même contenu que `openapi.yaml`.

    Si l'exécution de l'application échoue, analysez les problèmes et corrigez-les. Utilisez context7.
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:8080`.
1. Cliquez sur le bouton ![l'image du bouton "keep"](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

---

OK. Vous avez terminé l'étape "Java". Passons à [ÉTAPE 04: Migration .NET depuis JavaScript](./04-dotnet.md).

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
