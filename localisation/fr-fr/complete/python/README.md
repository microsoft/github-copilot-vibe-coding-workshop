# Échantillon d'Application Python

Une implémentation backend FastAPI complète pour un Service de Réseau Social Simple (SNS) qui permet aux utilisateurs de créer, récupérer, mettre à jour et supprimer des publications ; d'ajouter des commentaires ; et d'aimer/ne plus aimer les publications.

## 🏗️ Aperçu de l'Architecture

- **Framework** : FastAPI avec Python 3.12+
- **Base de données** : SQLite (`sns_api.db`)
- **Documentation API** : Swagger UI + spécification OpenAPI 3.1
- **CORS** : Activé pour les requêtes cross-origin
- **Validation des données** : Modèles Pydantic avec validation complète

## 📁 Structure du Projet

```text
python/
├── main.py              # Point d'entrée de l'application FastAPI
├── models.py            # Modèles de données et schémas Pydantic
├── database.py          # Opérations de base de données SQLite
├── openapi.yaml         # Spécification OpenAPI 3.0.1
├── sns_api.db          # Fichier de base de données SQLite (créé automatiquement)
├── README.md           # Cette documentation
└── .venv/              # Environnement virtuel (créé pendant la configuration)
```

## 🚀 Démarrage Rapide

### Prérequis

Référez-vous au document [README](../../../README.md) pour la préparation.

### 1. Configuration de l'Environnement

D'abord, définissez la variable d'environnement `$REPOSITORY_ROOT`.

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

Ensuite, naviguez vers le répertoire python et créez un environnement virtuel :

```bash
cd $REPOSITORY_ROOT/complete/python
```

Créer un environnement virtuel

```bash
# Utilisation d'uv (recommandé)
uv venv .venv
```

```bash
# Utilisation de Python standard (alternative)
python -m venv .venv
```

### 2. Activer l'Environnement Virtuel

```bash
# Sur Linux/macOS
source .venv/bin/activate
```

```bash
# Sur Windows Command Prompt
.venv\Scripts\activate
```

### 3. Installer les Dépendances

```bash
# Utilisation d'uv (recommandé)
uv pip install fastapi uvicorn python-multipart pyyaml
```

```bash
# Utilisation de pip (alternative)
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. Copier la Spécification OpenAPI

Copiez la spécification OpenAPI depuis le répertoire parent.

```bash
# Sur Linux/macOS
cp ../openapi.yaml .
```

```powershell
# Sur Windows Command Prompt
xcopy ..\openapi.yaml .
```

### 5. Exécuter l'Application

Démarrer le serveur de développement

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

L'application sera disponible à :

- **URL de Base API** : `http://localhost:8000/api/`
- **Swagger UI** : `http://localhost:8000/docs`
- **Spécification OpenAPI** : `http://localhost:8000/openapi.json`

## 📊 Schéma de Base de Données

L'application utilise SQLite avec les tables suivantes :

### Table Posts

- `id` (TEXT, PRIMARY KEY) - UUID
- `username` (TEXT, NOT NULL) - Nom d'utilisateur de l'auteur
- `content` (TEXT, NOT NULL) - Contenu de la publication
- `created_at` (TEXT, NOT NULL) - Horodatage ISO
- `updated_at` (TEXT, NOT NULL) - Horodatage ISO

### Table Comments

- `id` (TEXT, PRIMARY KEY) - UUID
- `post_id` (TEXT, NOT NULL) - Clé étrangère vers posts
- `username` (TEXT, NOT NULL) - Nom d'utilisateur de l'auteur
- `content` (TEXT, NOT NULL) - Contenu du commentaire
- `created_at` (TEXT, NOT NULL) - Horodatage ISO
- `updated_at` (TEXT, NOT NULL) - Horodatage ISO

### Table Likes

- `post_id` (TEXT, NOT NULL) - Clé étrangère vers posts
- `username` (TEXT, NOT NULL) - Utilisateur qui a aimé
- `liked_at` (TEXT, NOT NULL) - Horodatage ISO
- Clé primaire : `(post_id, username)`

## 🔌 Points de Terminaison API

### Publications

- `GET /api/posts` - Lister toutes les publications
- `POST /api/posts` - Créer une nouvelle publication
- `GET /api/posts/{postId}` - Obtenir une publication spécifique
- `PATCH /api/posts/{postId}` - Mettre à jour une publication
- `DELETE /api/posts/{postId}` - Supprimer une publication

### Commentaires

- `GET /api/posts/{postId}/comments` - Lister les commentaires d'une publication
- `POST /api/posts/{postId}/comments` - Créer un commentaire
- `GET /api/posts/{postId}/comments/{commentId}` - Obtenir un commentaire spécifique
- `PATCH /api/posts/{postId}/comments/{commentId}` - Mettre à jour un commentaire
- `DELETE /api/posts/{postId}/comments/{commentId}` - Supprimer un commentaire

### Likes

- `POST /api/posts/{postId}/likes` - Aimer une publication
- `DELETE /api/posts/{postId}/likes?username={username}` - Ne plus aimer une publication

## 🧪 Tester l'API

### Utilisation de cURL

#### Créer une Publication

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "content": "Bonjour le monde ! Ceci est ma première publication."}'
```

#### Obtenir Toutes les Publications

```bash
curl -X GET "http://localhost:8000/api/posts"
```

#### Ajouter un Commentaire

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/comments" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_smith", "content": "Super publication !"}'
```

#### Aimer une Publication

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/likes" \
  -H "Content-Type: application/json" \
  -d '{"username": "alice_johnson"}'
```

### Utilisation de Swagger UI

1. Naviguez vers `http://localhost:8000/docs`
2. Explorez et testez tous les points de terminaison API de manière interactive
3. Consultez les schémas et exemples de requête/réponse

## 📝 Modèles de Données

### Modèles de Requête

- `NewPostRequest` : `{username: str, content: str}`
- `UpdatePostRequest` : `{username: str, content: str}`
- `NewCommentRequest` : `{username: str, content: str}`
- `UpdateCommentRequest` : `{username: str, content: str}`
- `LikeRequest` : `{username: str}`

### Modèles de Réponse

- `Post` : Objet publication complet avec métadonnées et compteurs
- `Comment` : Objet commentaire complet avec métadonnées
- `LikeResponse` : Confirmation de like avec horodatage

## ⚙️ Configuration

### Variables d'Environnement

L'application utilise des paramètres par défaut mais peut être personnalisée :

- **Base de données** : Fichier SQLite `sns_api.db` (créé automatiquement)
- **Hôte** : `0.0.0.0` (toutes les interfaces)
- **Port** : `8000`
- **CORS** : Activé pour toutes les origines

### Considérations de Production

Pour un déploiement en production, considérez :

1. **Base de données** : Passer à PostgreSQL ou MySQL
2. **Variables d'environnement** : Utiliser pour la configuration sensible
3. **Sécurité** : Ajouter l'authentification et l'autorisation
4. **CORS** : Restreindre à des domaines spécifiques
5. **Journalisation** : Implémenter la journalisation structurée
6. **Surveillance** : Ajouter des vérifications de santé et des métriques

## 🛠️ Développement

### Organisation des Fichiers

- **`main.py`** : Configuration de l'application FastAPI, middleware et définitions de routes
- **`models.py`** : Modèles Pydantic pour la validation et sérialisation des données
- **`database.py`** : Opérations SQLite, gestion des connexions et fonctions CRUD

### Style de Code

Le projet suit :

- Les directives de style Python PEP 8
- Les meilleures pratiques FastAPI
- Les modèles de programmation fonctionnelle
- Les annotations de type partout
- La gestion complète des erreurs

### Ajouter de Nouvelles Fonctionnalités

1. Définir les modèles Pydantic dans `models.py`
2. Ajouter les opérations de base de données dans `database.py`
3. Créer les points de terminaison API dans `main.py`
4. Mettre à jour la spécification OpenAPI si nécessaire

## 🐛 Dépannage

### Problèmes Courants

1. **Port déjà utilisé** : Changer le port avec `--port 8001`
2. **Problèmes d'environnement virtuel** : Recréer avec `rm -rf .venv && uv venv .venv`
3. **Base de données verrouillée** : Arrêter toutes les instances en cours d'exécution de l'application
4. **Erreurs d'importation** : S'assurer que l'environnement virtuel est activé

### Mode Debug

Exécuter avec journalisation supplémentaire :

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## 📚 Ressources Supplémentaires

- [Documentation FastAPI](https://fastapi.tiangolo.com/)
- [Documentation Pydantic](https://docs.pydantic.dev/)
- [Documentation SQLite](https://sqlite.org/docs.html)
- [Spécification OpenAPI](https://swagger.io/specification/)

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
