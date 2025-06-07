# 产品需求文档 (PRD)

## 产品标题

简单社交媒体应用程序

## 文档版本

1.0.0

## 作者

Contoso 产品负责人/技术负责人

## 最后更新

2025-05-30

---

## 1. 概述

本项目的目标是构建一个基本但功能完整的社交网络服务 (SNS)，允许用户创建、检索、更新和删除帖子；添加评论；以及对帖子点赞/取消点赞。API 优先的方法确保它可以用作 Web 或移动前端的后端。

## 2. 背景

Contoso 是一家销售各种户外活动产品的公司。Contoso 的市场部门希望启动一个微型社交媒体网站，为现有客户和潜在客户推广他们的产品。作为他们的第一个 MVP，市场部门希望快速构建网站。

## 3. 目标和目的

* 为用户生成的内容（帖子）提供 CRUD 操作。
* 通过评论和点赞实现社交互动。
* 保持简单性，适用于教育和 MVP 用例。
* 确保 RESTful API 设计和适当的错误处理。

## 4. 核心功能

### 4.1 帖子管理

* **列出帖子**

  * **GET** `/api/posts`
  * 用户故事：作为用户，我想查看所有最近的帖子，以便浏览其他人分享的内容。

* **创建帖子**

  * **POST** `/api/posts`
  * 必需参数：`username`、`content`
  * 用户故事：作为用户，我想创建新帖子，以便与他人分享内容。

* **获取单个帖子**

  * **GET** `/api/posts/{postId}`
  * 用户故事：作为用户，我想详细阅读特定帖子。

* **更新帖子**

  * **PATCH** `/api/posts/{postId}`
  * 必需参数：`username`、`content`
  * 用户故事：作为用户，我想更新我的帖子，如果我犯了错误或有内容要添加。

* **删除帖子**

  * **DELETE** `/api/posts/{postId}`
  * 用户故事：作为用户，我想删除我的帖子，如果我不再希望分享它。

### 4.2 评论管理

* **列出帖子的评论**

  * **GET** `/api/posts/{postId}/comments`
  * 用户故事：作为用户，我想阅读帖子上的所有评论。

* **创建评论**

  * **POST** `/api/posts/{postId}/comments`
  * 必需参数：`username`、`content`
  * 用户故事：作为用户，我想对帖子评论以分享我的想法。

* **获取特定评论**

  * **GET** `/api/posts/{postId}/comments/{commentId}`
  * 用户故事：作为用户，我想详细查看特定评论。

* **更新评论**

  * **PATCH** `/api/posts/{postId}/comments/{commentId}`
  * 必需参数：`username`、`content`
  * 用户故事：作为用户，我想更正或修改我的评论。

* **删除评论**

  * **DELETE** `/api/posts/{postId}/comments/{commentId}`
  * 用户故事：作为用户，我想在必要时删除我的评论。

### 4.3 点赞系统

* **为帖子点赞**

  * **POST** `/api/posts/{postId}/likes`
  * 必需参数：`username`
  * 用户故事：作为用户，我想为帖子点赞以表示赞赏。

* **取消帖子点赞**

  * **DELETE** `/api/posts/{postId}/likes`
  * 用户故事：作为用户，我想在改变主意时取消我的点赞。

## 5. 用户角色和权限

* **匿名用户**
  * 可以阅读帖子和评论。

* **已认证用户（通过用户名字段）**
  * 可以创建、更新、删除自己的帖子和评论。
  * 可以为帖子点赞/取消点赞。

## 6. API 契约

* 至少使用 v3.0.1 规范定义 OpenAPI 文档。
* 使用标准 HTTP 状态码。
  * `200 OK`、`201 Created`、`204 No Content`、`400 Bad Request`、`404 Not Found`、`500 Internal Server Error`
* Content-Type: `application/json`

## 7. 非功能性需求

* **文档**：API 应使用 Swagger UI 完整记录。
* **安全性**：输入验证和基本请求验证，即使没有实现完整的身份验证。

## 8. 假设和依赖关系

* 此产品使用内存数据库。
* 不包括文件上传或媒体支持。
* 没有用户注册或登录/身份验证流程。
* 不需要测试代码。

## 9. 成功指标

* 所有 API 端点都可访问并按文档中的描述响应。
* 能够端到端地发帖、评论、点赞和删除资源。
* 从 OpenAPI 生成清晰的 Swagger 文档。

## 10. 范围外

* 用户身份验证（OAuth、JWT 等）
* 实时更新或通知
* 审核工具或举报功能
* 多媒体上传（图片、视频）

---

**免责声明**: 本文档由 [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot) 本地化。因此，可能包含错误。如果您发现任何不当或错误的翻译，请创建一个 [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new)。
