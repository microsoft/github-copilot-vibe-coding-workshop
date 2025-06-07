# Échantillon d'Application Java

Une application API REST Spring Boot complète pour une plateforme de médias sociaux avec des opérations CRUD complètes pour les publications, commentaires et likes.

## Aperçu du Projet

Il s'agit d'une application Spring Boot prête pour la production construite avec les spécifications suivantes :

- **Nom du Package** : `com.contoso.socialapp`
- **ID d'Artefact** : `socialapp`
- **ID de Groupe** : `com.contoso`
- **Type de Package** : `jar`
- **Version Java** : OpenJDK 21
- **Outil de Build** : Gradle
- **Base de données** : SQLite (embarquée)
- **Port** : 8080

### Dépendances du Projet

- **Spring Boot 3.2.5** : Framework principal
- **Spring Web** : Points de terminaison API RESTful
- **Spring Data JPA** : Opérations de base de données
- **Spring Boot Actuator** : Surveillance d'application
- **Spring Boot Validation** : Validation d'entrée
- **SQLite** : Base de données embarquée
- **Hibernate Community Dialects** : Support SQLite
- **Springdoc OpenAPI** : Documentation API (Swagger UI)
- **Lombok** : Réduction du code standard

### Structure du Projet

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # Classe principale de l'application
│   │               ├── config/
│   │               │   ├── WebConfig.java            # Configuration CORS
│   │               │   └── OpenApiConfig.java        # Configuration Swagger/OpenAPI
│   │               ├── controller/
│   │               │   ├── HealthController.java     # Points de terminaison de santé
│   │               │   ├── PostController.java       # Gestion des publications
│   │               │   └── CommentController.java    # Gestion des commentaires et likes
│   │               ├── model/
│   │               │   ├── Post.java                 # Entité Publication
│   │               │   ├── Comment.java              # Entité Commentaire
│   │               │   ├── Like.java                 # Entité Like
│   │               │   └── dto/                      # Objets de Transfert de Données
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # Accès aux données de publication
│   │               │   ├── CommentRepository.java    # Accès aux données de commentaire
│   │               │   └── LikeRepository.java       # Accès aux données de like
│   │               └── service/
│   │                   ├── PostService.java          # Logique métier des publications
│   │                   └── CommentService.java       # Logique métier des commentaires
│   └── resources/
│       ├── application.properties                    # Configuration de l'application
│       └── data.sql                                  # Données d'exemple (optionnel)
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # Tests d'intégration
```

## Fonctionnalités

- ✅ API RESTful complète pour les opérations de médias sociaux
- ✅ Gestion des publications (Créer, Lire, Mettre à jour, Supprimer)
- ✅ Système de commentaires avec opérations CRUD complètes
- ✅ Fonctionnalité Like/Ne plus aimer
- ✅ Base de données SQLite avec JPA/Hibernate
- ✅ Documentation OpenAPI/Swagger
- ✅ CORS activé pour localhost et GitHub Codespaces
- ✅ Configuration d'URL de serveur dynamique
- ✅ Points de terminaison de vérification de santé
- ✅ Intégration Spring Boot Actuator
- ✅ Gestion complète des erreurs
- ✅ Validation d'entrée avec Bean Validation

## Démarrage Rapide

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

Ensuite, naviguez vers le répertoire java.

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. Construire l'Application

```bash
# Rendre gradlew exécutable (si nécessaire)
chmod +x ./gradlew

# Construire le projet
./gradlew build
```

### 3. Exécuter l'Application

```bash
# Démarrer l'application en utilisant Gradle
./gradlew bootRun

# Alternative : Exécuter le fichier JAR directement
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. Vérifier que l'Application Fonctionne

```bash
# Vérifier le point de terminaison de santé
curl http://localhost:8080/api/health

# Réponse attendue : {"status":"healthy"}
```

### 5. Accéder à la Documentation API

Ouvrez votre navigateur et naviguez vers :

- **Swagger UI** : [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **JSON OpenAPI** : [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## Points de Terminaison API

### Santé et Bienvenue

- `GET /api/health` - Point de terminaison de vérification de santé personnalisé
- `GET /api/welcome` - Point de terminaison de message de bienvenue

### Gestion des Publications

- `GET /api/posts` - Obtenir toutes les publications
- `GET /api/posts/{id}` - Obtenir une publication spécifique par ID
- `POST /api/posts` - Créer une nouvelle publication
- `PATCH /api/posts/{id}` - Mettre à jour une publication existante
- `DELETE /api/posts/{id}` - Supprimer une publication

### Gestion des Commentaires

- `GET /api/posts/{postId}/comments` - Obtenir tous les commentaires d'une publication
- `GET /api/posts/{postId}/comments/{commentId}` - Obtenir un commentaire spécifique
- `POST /api/posts/{postId}/comments` - Ajouter un commentaire à une publication
- `PATCH /api/posts/{postId}/comments/{commentId}` - Mettre à jour un commentaire
- `DELETE /api/posts/{postId}/comments/{commentId}` - Supprimer un commentaire

### Gestion des Likes

- `POST /api/posts/{postId}/like` - Aimer une publication
- `DELETE /api/posts/{postId}/like` - Ne plus aimer une publication

### Spring Boot Actuator

- `GET /actuator/health` - Indicateur de santé Spring Boot
- `GET /actuator/info` - Information de l'application

## Tester l'API

### Exemples d'Utilisation de cURL

#### Créer une Publication

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Ma Première Publication",
    "content": "Ceci est le contenu de ma première publication !",
    "authorName": "Jean Dupont"
  }'
```

#### Obtenir Toutes les Publications

```bash
curl http://localhost:8080/api/posts
```

#### Ajouter un Commentaire

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Super publication !",
    "authorName": "Marie Martin"
  }'
```

#### Aimer une Publication

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "jean_dupont"
  }'
```

### Utilisation de Swagger UI

1. Ouvrez [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
2. Explorez les points de terminaison disponibles
3. Cliquez sur "Try it out" sur n'importe quel point de terminaison
4. Remplissez les paramètres et cliquez sur "Execute"

## Développement

### Exécuter les Tests

```bash
# Exécuter tous les tests
./gradlew test

# Exécuter avec rapport de couverture
./gradlew test jacocoTestReport

# Exécuter une classe de test spécifique
./gradlew test --tests "SocialAppApplicationTests"
```

### Base de Données

L'application utilise SQLite comme base de données embarquée :

- **Fichier de base de données** : `sns_api.db` (créé automatiquement)
- **Emplacement** : Répertoire racine du projet
- **Schéma** : Auto-généré par Hibernate
- **Données d'exemple** : Chargées depuis `data.sql` (si présent)

Pour réinitialiser la base de données, supprimez simplement le fichier `sns_api.db` et redémarrez l'application.

## Configuration

### Propriétés de l'Application

Paramètres de configuration clés dans `application.properties` :

```properties
# Paramètres de l'Application
spring.application.name=socialapp
server.port=8080

# Configuration de la Base de Données
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# Configuration OpenAPI/Swagger
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### Configuration CORS

L'application supporte à la fois localhost et GitHub Codespaces :

- **Localhost** : `http://localhost:8080`
- **GitHub Codespaces** : Auto-détecté et configuré dynamiquement

### Détection d'Environnement

L'application détecte automatiquement l'environnement d'exécution :

- **Développement Local** : Utilise `http://localhost:8080`
- **GitHub Codespaces** : Utilise `https://{codespace-name}-8080.{domain}`

## Déploiement

### Construction pour la Production

```bash
# Créer un JAR de production
./gradlew clean build

# Emplacement du JAR
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### Exécution en Production

```bash
# Exécuter avec le profil de production
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# Ou avec un port personnalisé
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## Dépannage

### Problèmes Courants

#### Port Déjà Utilisé

```bash
# Trouver le processus utilisant le port 8080
lsof -i :8080

# Tuer le processus (remplacer PID)
kill -9 <PID>

# Ou utiliser un port différent
./gradlew bootRun --args='--server.port=8081'
```

#### Échecs de Construction

```bash
# Nettoyer et reconstruire
./gradlew clean build

# Mettre à jour le wrapper Gradle
./gradlew wrapper --gradle-version=8.5
```

#### Problèmes de Base de Données

```bash
# Réinitialiser la base de données
rm sns_api.db
./gradlew bootRun
```

### Journaux et Surveillance

- **Journaux d'application** : Sortie console lors de l'exécution de `./gradlew bootRun`
- **Vérification de santé** : `GET /actuator/health`
- **Information de l'application** : `GET /actuator/info`

## Considérations de Sécurité

⚠️ **Configuration de Développement** : La configuration actuelle est optimisée pour le développement avec :

- CORS activé pour toutes les origines
- Base de données SQLite (non adaptée à l'échelle de production)
- Aucune authentification/autorisation

Pour un déploiement en production, considérez :

- Restreindre CORS à des domaines spécifiques
- Utiliser PostgreSQL/MySQL au lieu de SQLite
- Implémenter Spring Security pour l'authentification
- Ajouter la limitation de débit et la désinfection d'entrée
- Utiliser le chiffrement HTTPS/TLS

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
