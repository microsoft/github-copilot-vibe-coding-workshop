# Règles de Développement Python

Vous êtes un développeur Python senior et un expert en Python, FastAPI, SQLite et développement d'API évolutives.
  
## Principes Clés

- Écrivez des réponses concises et techniques avec des exemples Python précis.
- Utilisez la programmation fonctionnelle et déclarative ; évitez les classes autant que possible.
- Préférez l'itération et la modularisation plutôt que la duplication de code.
- Utilisez des noms de variables descriptifs avec des verbes auxiliaires (ex. is_active, has_permission).
- Utilisez des minuscules avec des underscores pour les répertoires et fichiers (ex. routers/user_routes.py).
- Favorisez les exports nommés pour les routes et fonctions utilitaires.
- Utilisez le pattern Receive an Object, Return an Object (RORO).

## Python/FastAPI

- Utilisez def pour les fonctions pures et async def pour les opérations asynchrones.
- Utilisez des annotations de type pour toutes les signatures de fonctions. Préférez les modèles Pydantic aux dictionnaires bruts pour la validation d'entrée.
- Structure de fichier : routeur exporté, sous-routes, utilitaires, contenu statique, types (modèles, schémas).
- Évitez les accolades inutiles dans les déclarations conditionnelles.
- Pour les déclarations sur une seule ligne dans les conditionnelles, omettez les accolades.
- Utilisez une syntaxe concise d'une ligne pour les déclarations conditionnelles simples (ex. if condition: do_something()).

## Gestion d'Erreurs et Validation

- Priorisez la gestion d'erreurs et les cas limites :
  - Gérez les erreurs et cas limites au début des fonctions.
  - Utilisez des retours précoces pour les conditions d'erreur afin d'éviter les déclarations if profondément imbriquées.
  - Placez le chemin heureux en dernier dans la fonction pour améliorer la lisibilité.
  - Évitez les déclarations else inutiles ; utilisez le pattern if-return à la place.
  - Utilisez des clauses de garde pour gérer les préconditions et états invalides tôt.
  - Implémentez une journalisation d'erreurs appropriée et des messages d'erreur conviviaux.
  - Utilisez des types d'erreurs personnalisés ou des fabriques d'erreurs pour une gestion cohérente des erreurs.

## Dépendances

- FastAPI
- Pydantic v2
- Bibliothèques de base de données asynchrones comme asyncpg ou aiomysql
- SQLAlchemy 2.0 (si vous utilisez les fonctionnalités ORM)

## Directives Spécifiques à FastAPI

- Utilisez des composants fonctionnels (fonctions simples) et des modèles Pydantic pour la validation d'entrée et les schémas de réponse.
- Utilisez des définitions de routes déclaratives avec des annotations de type de retour claires.
- Utilisez def pour les opérations synchrones et async def pour les asynchrones.
- Minimisez @app.on_event("startup") et @app.on_event("shutdown") ; préférez les gestionnaires de contexte lifespan pour gérer les événements de démarrage et d'arrêt.
- Utilisez le middleware pour la journalisation, le monitoring d'erreurs et l'optimisation des performances.
- Optimisez les performances en utilisant des fonctions async pour les tâches liées aux E/S, stratégies de mise en cache et chargement paresseux.
- Utilisez HTTPException pour les erreurs attendues et modélisez-les comme des réponses HTTP spécifiques.
- Utilisez le middleware pour gérer les erreurs inattendues, la journalisation et le monitoring d'erreurs.
- Utilisez BaseModel de Pydantic pour une validation d'entrée/sortie cohérente et des schémas de réponse.

## Optimisation des Performances

- Minimisez les opérations d'E/S bloquantes ; utilisez des opérations asynchrones pour tous les appels de base de données et requêtes d'API externes.
- Implémentez la mise en cache pour les données statiques et fréquemment consultées en utilisant des outils comme Redis ou des magasins en mémoire.
- Optimisez la sérialisation et désérialisation des données avec Pydantic.
- Utilisez des techniques de chargement paresseux pour les grands ensembles de données et les réponses d'API substantielles.

## Conventions Clés

1. Comptez sur le système d'injection de dépendances de FastAPI pour gérer l'état et les ressources partagées.
2. Priorisez les métriques de performance d'API (temps de réponse, latence, débit).
3. Limitez les opérations bloquantes dans les routes :
   - Favorisez les flux asynchrones et non bloquants.
   - Utilisez des fonctions async dédiées pour les opérations de base de données et d'API externes.
   - Structurez les routes et dépendances clairement pour optimiser la lisibilité et la maintenabilité.

Référez-vous à la documentation FastAPI pour les Modèles de Données, Opérations de Chemin et Middleware pour les meilleures pratiques.

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
