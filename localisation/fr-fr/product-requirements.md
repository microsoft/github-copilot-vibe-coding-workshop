# Document d'Exigences Produit (DEP)

## Titre du Produit

Application de Médias Sociaux Simple

## Version du Document

1.0.0

## Auteur

Propriétaire de Produit / Tech Lead chez Contoso

## Dernière Mise à Jour

2025-05-30

---

## 1. Aperçu

L'objectif de ce projet est de construire un Service de Réseau Social (SNS) basique mais fonctionnel qui permet aux utilisateurs de créer, récupérer, mettre à jour et supprimer des publications ; d'ajouter des commentaires ; et d'aimer/ne plus aimer les publications. L'approche API-first garantit qu'elle peut être utilisée comme backend pour des frontends web ou mobiles.

## 2. Contexte

Contoso est une entreprise qui vend des produits pour diverses activités de plein air. Un département marketing de Contoso souhaiterait lancer un site web de micro-médias sociaux pour promouvoir leurs produits auprès des clients existants et potentiels. Pour leur premier MVP, le département marketing veut construire rapidement le site web.

## 3. Objectifs et Buts

* Fournir des opérations CRUD pour le contenu généré par les utilisateurs (publications).
* Permettre l'interaction sociale via les commentaires et les likes.
* Maintenir la simplicité pour les cas d'usage éducatifs et MVP.
* Assurer une conception d'API RESTful et une gestion d'erreur appropriée.

## 4. Fonctionnalités Clés

### 4.1 Gestion des Publications

* **Lister les Publications**

  * **GET** `/api/posts`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux voir toutes les publications récentes afin de pouvoir parcourir ce que les autres partagent.

* **Créer une Publication**

  * **POST** `/api/posts`
  * Requis : `username`, `content`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux créer une nouvelle publication afin de partager quelque chose avec les autres.

* **Obtenir une Publication Unique**

  * **GET** `/api/posts/{postId}`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux lire une publication spécifique en détail.

* **Mettre à Jour une Publication**

  * **PATCH** `/api/posts/{postId}`
  * Requis : `username`, `content`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux mettre à jour ma publication si j'ai fait une erreur ou ai quelque chose à ajouter.

* **Supprimer une Publication**

  * **DELETE** `/api/posts/{postId}`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux supprimer ma publication si je ne veux plus qu'elle soit partagée.

### 4.2 Gestion des Commentaires

* **Lister les Commentaires d'une Publication**

  * **GET** `/api/posts/{postId}/comments`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux lire tous les commentaires sur une publication.

* **Créer un Commentaire**

  * **POST** `/api/posts/{postId}/comments`
  * Requis : `username`, `content`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux commenter une publication pour partager mes pensées.

* **Obtenir un Commentaire Spécifique**

  * **GET** `/api/posts/{postId}/comments/{commentId}`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux voir un commentaire spécifique en détail.

* **Mettre à Jour un Commentaire**

  * **PATCH** `/api/posts/{postId}/comments/{commentId}`
  * Requis : `username`, `content`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux corriger ou réviser mon commentaire.

* **Supprimer un Commentaire**

  * **DELETE** `/api/posts/{postId}/comments/{commentId}`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux supprimer mon commentaire si nécessaire.

### 4.3 Système de Like

* **Aimer une Publication**

  * **POST** `/api/posts/{postId}/likes`
  * Requis : `username`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux aimer une publication pour montrer mon appréciation.

* **Ne Plus Aimer une Publication**

  * **DELETE** `/api/posts/{postId}/likes`
  * Histoire Utilisateur : En tant qu'utilisateur, je veux retirer mon like si je change d'avis.

## 5. Rôles Utilisateur et Permissions

* **Utilisateurs Anonymes**
  * Peuvent lire les publications et commentaires.

* **Utilisateurs Authentifiés (via le champ username)**
  * Peuvent créer, mettre à jour, supprimer leurs propres publications et commentaires.
  * Peuvent aimer/ne plus aimer les publications.

## 6. Contrats API

* Définir le document OpenAPI avec la spécification v3.0.1 au minimum.
* Utilise les codes d'état HTTP standard.
  * `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`
* Content-Type : `application/json`

## 7. Exigences Non-Fonctionnelles

* **Documentation** : L'API doit être entièrement documentée en utilisant Swagger UI.
* **Sécurité** : Validation des entrées et validation de requête basique, même si l'authentification complète n'est pas implémentée.

## 8. Suppositions et Dépendances

* Utiliser une base de données en mémoire pour ce produit.
* Aucun support de téléchargement de fichiers ou de médias n'est inclus.
* Aucun flux d'inscription utilisateur ou de connexion/authentification.
* Aucun code de test n'est requis.

## 9. Métriques de Succès

* Tous les endpoints API sont accessibles et répondent comme documenté.
* Capable de publier, commenter, aimer et supprimer des ressources de bout en bout.
* Documentation Swagger claire générée à partir d'OpenAPI.

## 10. Hors Périmètre

* Authentification utilisateur (OAuth, JWT, etc.)
* Mises à jour en temps réel ou notifications
* Outils de modération ou de signalement
* Téléchargements multimédia (images, vidéo)

---

**Avertissement**: Ce document a été localisé par [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Par conséquent, il peut contenir des erreurs. Si vous trouvez une traduction inappropriée ou erronée, veuillez créer un [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
