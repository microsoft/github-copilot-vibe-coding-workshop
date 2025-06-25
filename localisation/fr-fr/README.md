# Atelier de Codage Vibe GitHub Copilot

![Atelier de Codage Vibe GitHub Copilot](../../images/banner.png)

Vibrons-codons avec [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) et ses fonctionnalités les plus récentes et les plus avancées dans divers langages de programmation tels que Python, JavaScript, Java et .NET, ainsi que pour rendre les applications cloud-natives par conteneurisation. Êtes-vous prêt à vous lancer ?

## Contexte

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Le département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels. Pour leur premier MVP, ils veulent construire rapidement le site web. Le département informatique de Contoso a actuellement deux développeurs utilisant respectivement Python et JavaScript. La date de lancement approche rapidement, alors les deux développeurs doivent livrer l'application rapidement.

Mais voici la situation...

## Objectifs de l'Atelier

- Construire des applications en utilisant le mode Agent de GitHub Copilot.
- Ajouter des instructions personnalisées à GitHub Copilot pour avoir plus de contrôle sur GitHub Copilot.
- Ajouter divers serveurs MCP à GitHub Copilot pour construire les applications plus précisément.

## Atelier dans Votre Langue

Ce matériel d'atelier est actuellement fourni dans les langues suivantes :

[English](../../README.md) | [Español](../es-es/) | [Français](./README.md) | [日本語](../ja-jp/) | [한국어](../ko-kr/) | [Português](../pt-br/) | [中文(简体)](../zh-cn/)

## Prérequis

Pendant cet atelier, [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) est fortement recommandé car il n'y a pas besoin de préparation, sauf un navigateur web.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/github-copilot-vibe-coding-workshop)

Cependant, si vous devez vraiment utiliser votre machine, assurez-vous d'avoir installé tout ce qui est identifié ci-dessous.

### Commun

- [Visual Studio Code](https://code.visualstudio.com/)
- Extension VS Code [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Extension VS Code [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- 💥 Pour les utilisateurs Windows 👉 [PowerShell 7](https://learn.microsoft.com/powershell/scripting/install/installing-powershell)
- [git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/)
- [Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

### Python

- [pyenv](https://github.com/pyenv/pyenv) ou [pyenv pour Windows](https://github.com/pyenv-win/pyenv-win)
- Python 3.12+ via pyenv
- Gestionnaire de paquets `uv` (recommandé) ou `pip`
- Extension VS Code [Python](https://marketplace.visualstudio.com/items/?itemName=ms-python.python)
- Extension VS Code [Pylance](https://marketplace.visualstudio.com/items/?itemName=ms-python.vscode-pylance)
- Extension VS Code [Python Debugger](https://marketplace.visualstudio.com/items/?itemName=ms-python.debugpy)
- Extension VS Code [autopep8](https://marketplace.visualstudio.com/items/?itemName=ms-python.autopep8)

### JavaScript

- [nvm](https://github.com/nvm-sh/nvm) ou [nvm pour Windows](https://github.com/coreybutler/nvm-windows)
- La dernière LTS de [Node.js](https://nodejs.org/) via nvm

### Java

- [SDKMAN](https://sdkman.io/)
- [OpenJDK 21](https://learn.microsoft.com/java/openjdk/download) via SDKMAN
- [Apache Maven](https://maven.apache.org/download.cgi) via SDKMAN
- [Gradle Build Tool](https://docs.gradle.org/current/userguide/installation.html) via SDKMAN
- [Spring Boot Initializr](https://docs.spring.io/spring-boot/cli/installation.html) via SDKMAN
- Extension VS Code [Extension Pack for Java](https://marketplace.visualstudio.com/items/?itemName=vscjava.vscode-java-pack)
- Extension VS Code [Spring Boot Extension Pack](https://marketplace.visualstudio.com/items/?itemName=vmware.vscode-boot-dev-pack)

### .NET

- [.NET SDK 9](https://dotnet.microsoft.com/download/dotnet/9.0)
- Extension VS Code [C# Dev Kit](https://marketplace.visualstudio.com/items/?itemName=ms-dotnettools.csdevkit)

## Document d'Exigences Produit

Tout d'abord, l'endroit où vous devez commencer est ce [PRD (Document d'Exigences Produit)](./product-requirements.md). Ce document vous donnera une meilleure compréhension de ce qu'il faut faire et comment le faire.

## Instructions de l'Atelier

Ceci est un atelier à rythme libre en suivant les liens ci-dessous :

| Étape                                  | Lien                                                    |
|----------------------------------------|---------------------------------------------------------|
| 00: Environnement de Développement     | [00-setup.md](./docs/00-setup.md)                      |
| 01: Backend Python                     | [01-python.md](./docs/01-python.md)                    |
| 02: Frontend JavaScript                | [02-javascript.md](./docs/02-javascript.md)            |
| 03: Migration Java depuis Python      | [03-java.md](./docs/03-java.md)                        |
| 04: Migration .NET depuis JavaScript  | [04-dotnet.md](./docs/04-dotnet.md)                    |
| 05: Conteneurisation                   | [05-containerization.md](./docs/05-containerization.md)|

## Échantillons Complets

Consultez l'exemple complet de chaque application. Ils sont également vibe-codés avec GitHub Copilot, par conséquent, ils pourraient ne pas être parfaits, et vous n'avez pas à suivre l'application.

| Langage              | Application | Emplacement                          |
|----------------------|-------------|--------------------------------------|
| Backend Python       | FastAPI     | [python](./complete/python/)         |
| Frontend JavaScript  | React       | [javascript](./complete/javascript/) |
| Backend Java         | Spring Boot | [java](./complete/java/)             |
| Frontend .NET        | Blazor      | [dotnet](./complete/dotnet/)         |
| Conteneurisation     | Container   | [containerization](./complete/)      |

## En Savoir Plus...

- [GitHub Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces)
- [GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot)
- [GitHub Copilot: Mode Agent](https://code.visualstudio.com/blogs/2025/04/07/agentMode)
- [GitHub Copilot: MCP](https://code.visualstudio.com/blogs/2025/05/12/agent-mode-meets-mcp)
- [GitHub Copilot: Instructions Personnalisées](https://code.visualstudio.com/docs/copilot/copilot-customization)
- [GitHub Copilot: Changer les Modèles IA](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat?tool=vscode)
- [Serveurs MCP Sélectionnés](https://github.com/modelcontextprotocol/servers)

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
