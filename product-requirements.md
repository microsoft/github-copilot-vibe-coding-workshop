# Product Requirements Document (PRD)

## Product Title

Simple Social Media Application

## Document Version

1.0.0

## Author

Product Owner / Tech Lead at Contoso

## Last Updated

2025-05-30

---

## 1. Overview

The goal of this project is to build a basic but functional Social Networking Service (SNS) that allows users to create, retrieve, update, and delete posts; add comments; and like/unlike posts. The API-first approach ensures that it can be used as a backend for web or mobile frontends.

## 2. Background

Contoso is a company that sells products for various outdoor activities. A marketing department of Contoso would like to launch a micro social media website to promote their products for existing and potential customers. As their first MVP, the marketing department wants to quickly build the website.

## 3. Objectives and Goals

* Provide CRUD operations for user-generated content (posts).
* Enable social interaction through comments and likes.
* Maintain simplicity for educational and MVP use cases.
* Ensure RESTful API design and proper error handling.

## 4. Key Features

### 4.1 Post Management

* **List Posts**

  * **GET** `/api/posts`
  * User Story: As a user, I want to see all recent posts so I can browse what others are sharing.

* **Create Post**

  * **POST** `/api/posts`
  * Required: `username`, `content`
  * User Story: As a user, I want to create a new post so I can share something with others.

* **Get Single Post**

  * **GET** `/api/posts/{postId}`
  * User Story: As a user, I want to read a specific post in detail.

* **Update Post**

  * **PATCH** `/api/posts/{postId}`
  * Required: `username`, `content`
  * User Story: As a user, I want to update my post if I made a mistake or have something to add.

* **Delete Post**

  * **DELETE** `/api/posts/{postId}`
  * User Story: As a user, I want to delete my post if I no longer want it shared.

### 4.2 Comment Management

* **List Comments for a Post**

  * **GET** `/api/posts/{postId}/comments`
  * User Story: As a user, I want to read all the comments on a post.

* **Create Comment**

  * **POST** `/api/posts/{postId}/comments`
  * Required: `username`, `content`
  * User Story: As a user, I want to comment on a post to share my thoughts.

* **Get Specific Comment**

  * **GET** `/api/posts/{postId}/comments/{commentId}`
  * User Story: As a user, I want to see a specific comment in detail.

* **Update Comment**

  * **PATCH** `/api/posts/{postId}/comments/{commentId}`
  * Required: `username`, `content`
  * User Story: As a user, I want to correct or revise my comment.

* **Delete Comment**

  * **DELETE** `/api/posts/{postId}/comments/{commentId}`
  * User Story: As a user, I want to delete my comment if necessary.

### 4.3 Like System

* **Like a Post**

  * **POST** `/api/posts/{postId}/likes`
  * Required: `username`
  * User Story: As a user, I want to like a post to show appreciation.

* **Unlike a Post**

  * **DELETE** `/api/posts/{postId}/likes`
  * User Story: As a user, I want to remove my like if I change my mind.

## 5. User Roles and Permissions

* **Anonymous Users**
  * Can read posts and comments.

* **Authenticated Users (via username field)**
  * Can create, update, delete their own posts and comments.
  * Can like/unlike posts.

## 6. API Contracts

* Define the OpenAPI doc with the v3.0.1 spec at least.
* Uses standard HTTP status codes.
  * `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`
* Content-Type: `application/json`

## 7. Non-Functional Requirements

* **Documentation**: API should be fully documented using Swagger UI.
* **Security**: Input validation and basic request validation, even if full auth is not implemented.

## 8. Assumptions and Dependencies

* Use memory DB for this product.
* No file upload or media support is included.
* No user registration or login/auth flows.
* No test code is required.

## 9. Success Metrics

* All API endpoints are reachable and respond as documented.
* Able to post, comment, like, and delete resources end-to-end.
* Clear Swagger documentation generated from OpenAPI.

## 10. Out of Scope

* User authentication (OAuth, JWT, etc.)
* Real-time updates or notifications
* Moderation tools or reporting
* Multimedia uploads (images, video)
