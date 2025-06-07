# Échantillons d'Applications Complètes

Voici la liste des échantillons d'applications complètes. Parce qu'elles sont également vibe-codées, vous pouvez voir comment elles sont construites.

| Application | Emplacement                 |
|-------------|-----------------------------|
| FastAPI     | [python](./python/)         |
| React       | [javascript](./javascript/) |
| Spring Boot | [java](./java/)             |
| Blazor      | [dotnet](./dotnet/)         |

## Échantillon de Conteneurisation

### Prérequis

Référez-vous au document [README](../../README.md) pour la préparation.

### Démarrage

1. Assurez-vous que Docker fonctionne.

    ```bash
    docker info
    ```

1. Obtenez la racine du référentiel.

    ```bash
    # bash/zsh
    REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
    ```

    ```powershell
    # PowerShell
    $REPOSITORY_ROOT = git rev-parse --show-toplevel
    ```

1. Naviguez vers le répertoire `complete`.

    ```bash
    cd $REPOSITORY_ROOT/complete
    ```

1. Exécutez les applications conteneurisées.

    ```bash
    docker compose up --build -d
    ```

1. Ouvrez un navigateur web et naviguez vers `http://localhost:3030`.
1. Vérifiez si l'application web fonctionne correctement.
1. Nettoyez en exécutant la commande suivante pour supprimer les applications conteneurisées.

    ```bash
    docker compose down --rmi all
    ```

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
