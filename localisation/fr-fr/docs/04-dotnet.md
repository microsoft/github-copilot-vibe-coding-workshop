# 04: Migration .NET depuis JavaScript

## Scénario

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels.

Ils ont déjà une application frontend écrite en JavaScript, plus spécifiquement en React. Cependant, tout d'un coup, ils ont envoyé de nouvelles exigences pour redévelopper l'application frontend en utilisant .NET, spécialement en Blazor.

Maintenant, en tant que développeur .NET, vous devez migrer l'application React existante vers Blazor. Vous avez très peu de connaissances de JavaScript et React, au fait.

## Prérequis

Consultez le document [README](../README.md) pour la préparation.

## Commencer

- [Vérifier le Mode Agent GitHub Copilot](#vérifier-le-mode-agent-github-copilot)
- [Préparer les Instructions Personnalisées](#préparer-les-instructions-personnalisées)
- [Préparer le Projet d'Application Web Blazor](#préparer-le-projet-dapplication-web-blazor)
- [Exécuter l'Application Backend Spring Boot](#exécuter-lapplication-backend-spring-boot)
- [Migrer l'Application Web React](#migrer-lapplication-web-react)
- [Vérifier l'Application Frontend Blazor](#vérifier-lapplication-frontend-blazor)

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
    cp -r $REPOSITORY_ROOT/docs/custom-instructions/dotnet/. \
          $REPOSITORY_ROOT/.github/
    ```

    ```powershell
    # PowerShell
    Copy-Item -Path $REPOSITORY_ROOT/docs/custom-instructions/dotnet/* `
              -Destination $REPOSITORY_ROOT/.github/ -Recurse -Force
    ```

### Préparer le Projet d'Application Web Blazor

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Utilisez une invite comme ci-dessous pour échafauder un projet d'application web Blazor.

    ```text
    J'aimerais échafauder une application web Blazor. Suivez les instructions ci-dessous.

    - Utilisez context7.
    - Votre répertoire de travail est `dotnet`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Montrez-moi la liste des projets .NET liés à Blazor et demandez-moi de choisir.
    - Générez un projet Blazor.
    - Utilisez le nom de projet `Contoso.BlazorApp`.
    - Mettez à jour `launchSettings.json` pour changer le numéro de port à `3031` pour HTTP, `43031` pour HTTPS.
    - Créez une solution, `ContosoWebApp`, et ajoutez le projet Blazor dans cette solution.
    - Construisez l'application Blazor et vérifiez si l'application est construite correctement.
    - Exécutez cette application Blazor et vérifiez si l'application fonctionne correctement.
    - Si la construction ou l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

### Exécuter l'Application Backend Spring Boot

1. Assurez-vous que l'application backend Spring Boot est lancée et en cours d'exécution.

    ```text
    Exécutez l'API backend Spring Boot, qui se trouve dans le répertoire `java`.
    ```

   > **NOTE**: Vous pouvez utiliser l'application d'exemple [`complete/java`](../complete/java/) à la place.

1. Si vous utilisez GitHub Codespaces, assurez-vous que le numéro de port `8080` est défini sur `public` au lieu de `private`. Sinon, vous obtiendrez l'erreur `401` lors de l'accès depuis l'application frontend.

### Migrer l'Application Web React

1. Assurez-vous que vous utilisez le Mode Agent GitHub Copilot avec le modèle `Claude Sonnet 4` ou `GPT-4.1`.
1. Assurez-vous que le serveur MCP `context7` est en cours d'exécution.
1. Utilisez une invite comme ci-dessous pour migrer React vers Blazor.

    ```text
    Maintenant, nous migrons l'application web basée sur React existante vers une application web Blazor. Suivez les instructions ci-dessous pour la migration.
    
    - Utilisez context7.
    - L'application React existante se trouve dans `javascript`.
    - Votre répertoire de travail est `dotnet/Contoso.BlazorApp`.
    - Identifiez d'abord toutes les étapes que vous allez effectuer.
    - Il y a une application API backend qui fonctionne sur `http://localhost:8080`.
    - Analysez la structure de l'application React existante.
    - Migrez tous les composants React vers Blazor. Les deux composants correspondants doivent être aussi exactement proches l'un de l'autre que possible.
    - Migrez tous les éléments CSS nécessaires de React vers Blazor.
    - Lors de la migration des éléments JavaScript de React vers Blazor, maximisez l'utilisation des fonctionnalités natives de Blazor autant que possible. Si vous devez utiliser JavaScript, utilisez les fonctionnalités JSInterop de Blazor.
    - Si nécessaire, ajoutez des packages NuGet compatibles avec .NET 9.
    ```

1. Une fois la migration terminée, utilisez une invite comme ci-dessous pour vérifier le résultat de la migration.

    ```text
    J'aimerais construire l'application Blazor. Suivez les instructions.

    - Utilisez context7.
    - Construisez l'application Blazor et vérifiez si l'application est construite correctement.
    - Si la construction de l'application échoue, analysez les problèmes et corrigez-les.
    ```

   > **NOTE**:
   >
   > - Jusqu'à ce que la construction réussisse, itérez cette étape.
   > - Si la construction continue d'échouer, vérifiez les messages d'erreur et demandez-leur à l'Agent GitHub Copilot de les déchiffrer.

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.
1. Une fois la construction réussie, utilisez une invite comme ci-dessous pour vérifier le résultat de la migration.

    ```text
    J'aimerais exécuter l'application Blazor. Suivez les instructions.

    - Utilisez context7.
    - Exécutez cette application Blazor et vérifiez si l'application fonctionne correctement.
    - Ignorez l'erreur de connexion de l'application API backend à ce stade.
    - Si l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

### Vérifier l'Application Frontend Blazor

1. Assurez-vous que l'application backend Spring Boot est lancée et en cours d'exécution.

    ```text
    Exécutez l'API backend Spring Boot, qui se trouve dans le répertoire `java`.
    ```

1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.
1. Vérifiez si elle est construite correctement ou non.

    ```text
    Exécutez l'application Blazor et vérifiez si l'application fonctionne correctement.

    Si l'exécution de l'application échoue, analysez les problèmes et corrigez-les.
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:3031`.
1. Vérifiez si les applications frontend et backend fonctionnent correctement.
1. Cliquez sur le bouton ![l'image du bouton keep](https://img.shields.io/badge/keep-blue) de GitHub Copilot pour prendre les modifications.

---

OK. Vous avez terminé l'étape ".NET". Passons à [ÉTAPE 05: Conteneurisation](./05-containerization.md).

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
