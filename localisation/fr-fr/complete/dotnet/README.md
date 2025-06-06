# Échantillon d'Application .NET

## Prérequis

Référez-vous au document [README](../../../README.md) pour la préparation.

## Démarrage

### Exécuter le Backend Spring Boot

Utilisez [l'Échantillon d'Application Java](../java/).

> **NOTE** : Si vous utilisez GitHub Codespaces, assurez-vous que le port de l'application Java, `8080`, est défini sur **public**.

### Exécuter le Frontend Blazor

1. Obtenez la racine du référentiel.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Exécutez l'application.

    ```bash
    dotnet watch run --project $REPOSITORY_ROOT/complete/dotnet/Contoso.BlazorApp
    ```

1. Vérifiez si l'application web fonctionne correctement.