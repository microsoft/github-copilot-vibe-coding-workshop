# Python 应用示例

一个完整的 FastAPI 后端实现，用于简单社交网络服务（SNS），允许用户创建、检索、更新和删除帖子；添加评论；以及对帖子点赞/取消点赞。

## 🏗️ 架构概述

- **框架**: FastAPI with Python 3.12+
- **数据库**: SQLite (`sns_api.db`)
- **API 文档**: Swagger UI + OpenAPI 3.1 规范
- **CORS**: 启用跨域请求
- **数据验证**: 具有全面验证的 Pydantic 模型

## 📁 项目结构

```text
python/
├── main.py              # FastAPI 应用程序入口点
├── models.py            # Pydantic 数据模型和架构
├── database.py          # SQLite 数据库操作
├── openapi.yaml         # OpenAPI 3.0.1 规范
├── sns_api.db          # SQLite 数据库文件（自动创建）
├── README.md           # 此文档
└── .venv/              # 虚拟环境（在设置期间创建）
```

## 🚀 快速开始

### 先决条件

请参考 [README](../../../README.md) 文档进行准备。

### 1. 环境设置

首先，设置 `$REPOSITORY_ROOT` 环境变量。

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

然后，导航到 python 目录并创建虚拟环境：

```bash
cd $REPOSITORY_ROOT/complete/python
```

创建虚拟环境

```bash
# 使用 uv（推荐）
uv venv .venv
```

```bash
# 使用标准 Python（替代方案）
python -m venv .venv
```

### 2. 激活虚拟环境

```bash
# 在 Linux/macOS 上
source .venv/bin/activate
```

```bash
# 在 Windows 命令提示符上
.venv\Scripts\activate
```

### 3. 安装依赖项

```bash
# 使用 uv（推荐）
uv pip install fastapi uvicorn python-multipart pyyaml
```

```bash
# 使用 pip（替代方案）
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. 复制 OpenAPI 规范

从父目录复制 OpenAPI 规范。

```bash
# 在 Linux/macOS 上
cp ../openapi.yaml .
```

```powershell
# 在 Windows 命令提示符上
xcopy ..\openapi.yaml .
```

### 5. 运行应用程序

启动开发服务器

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

应用程序将在以下地址可用：

- **API 基础 URL**: `http://localhost:8000/api/`
- **Swagger UI**: `http://localhost:8000/docs`
- **OpenAPI 规范**: `http://localhost:8000/openapi.json`

## 📊 数据库架构

应用程序使用 SQLite，具有以下表：

### Posts 表

- `id` (TEXT, PRIMARY KEY) - UUID
- `username` (TEXT, NOT NULL) - 作者用户名
- `content` (TEXT, NOT NULL) - 帖子内容
- `created_at` (TEXT, NOT NULL) - ISO 时间戳
- `updated_at` (TEXT, NOT NULL) - ISO 时间戳

### Comments 表

- `id` (TEXT, PRIMARY KEY) - UUID
- `post_id` (TEXT, NOT NULL) - 外键到 posts
- `username` (TEXT, NOT NULL) - 作者用户名
- `content` (TEXT, NOT NULL) - 评论内容
- `created_at` (TEXT, NOT NULL) - ISO 时间戳
- `updated_at` (TEXT, NOT NULL) - ISO 时间戳

### Likes 表

- `post_id` (TEXT, NOT NULL) - 外键到 posts
- `username` (TEXT, NOT NULL) - 点赞用户
- `liked_at` (TEXT, NOT NULL) - ISO 时间戳
- 主键: `(post_id, username)`

## 🔌 API 端点

### 帖子

- `GET /api/posts` - 列出所有帖子
- `POST /api/posts` - 创建新帖子
- `GET /api/posts/{postId}` - 获取特定帖子
- `PATCH /api/posts/{postId}` - 更新帖子
- `DELETE /api/posts/{postId}` - 删除帖子

### 评论

- `GET /api/posts/{postId}/comments` - 列出帖子的评论
- `POST /api/posts/{postId}/comments` - 创建评论
- `GET /api/posts/{postId}/comments/{commentId}` - 获取特定评论
- `PATCH /api/posts/{postId}/comments/{commentId}` - 更新评论
- `DELETE /api/posts/{postId}/comments/{commentId}` - 删除评论

### 点赞

- `POST /api/posts/{postId}/likes` - 点赞帖子
- `DELETE /api/posts/{postId}/likes?username={username}` - 取消点赞帖子

## 🧪 测试 API

### 使用 cURL

#### 创建帖子

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "content": "Hello World! This is my first post."}'
```

#### 获取所有帖子

```bash
curl -X GET "http://localhost:8000/api/posts"
```

#### 添加评论

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/comments" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_smith", "content": "Great post!"}'
```

#### 点赞帖子

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/likes" \
  -H "Content-Type: application/json" \
  -d '{"username": "alice_johnson"}'
```

### 使用 Swagger UI

1. 导航到 `http://localhost:8000/docs`
2. 交互式探索和测试所有 API 端点
3. 查看请求/响应架构和示例

## 📝 数据模型

### 请求模型

- `NewPostRequest`: `{username: str, content: str}`
- `UpdatePostRequest`: `{username: str, content: str}`
- `NewCommentRequest`: `{username: str, content: str}`
- `UpdateCommentRequest`: `{username: str, content: str}`
- `LikeRequest`: `{username: str}`

### 响应模型

- `Post`: 带有元数据和计数的完整帖子对象
- `Comment`: 带有元数据的完整评论对象
- `LikeResponse`: 带有时间戳的点赞确认

## ⚙️ 配置

### 环境变量

应用程序使用默认设置，但可以自定义：

- **数据库**: SQLite 文件 `sns_api.db`（自动创建）
- **主机**: `0.0.0.0`（所有接口）
- **端口**: `8000`
- **CORS**: 为所有来源启用

### 生产考虑事项

对于生产部署，请考虑：

1. **数据库**: 切换到 PostgreSQL 或 MySQL
2. **环境变量**: 用于敏感配置
3. **安全性**: 添加身份验证和授权
4. **CORS**: 限制为特定域
5. **日志记录**: 实施结构化日志记录
6. **监控**: 添加健康检查和指标

## 🛠️ 开发

### 文件组织

- **`main.py`**: FastAPI 应用配置、中间件和路由定义
- **`models.py`**: 用于数据验证和序列化的 Pydantic 模型
- **`database.py`**: SQLite 操作、连接管理和 CRUD 函数

### 代码风格

项目遵循：

- Python PEP 8 风格指南
- FastAPI 最佳实践
- 函数式编程模式
- 全面的类型提示
- 全面的错误处理

### 添加新功能

1. 在 `models.py` 中定义 Pydantic 模型
2. 在 `database.py` 中添加数据库操作
3. 在 `main.py` 中创建 API 端点
4. 如需要，更新 OpenAPI 规范

## 🐛 故障排除

### 常见问题

1. **端口已在使用**: 使用 `--port 8001` 更改端口
2. **虚拟环境问题**: 使用 `rm -rf .venv && uv venv .venv` 重新创建
3. **数据库锁定**: 停止应用程序的所有运行实例
4. **导入错误**: 确保虚拟环境已激活

### 调试模式

使用额外日志记录运行：

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## 📚 其他资源

- [FastAPI 文档](https://fastapi.tiangolo.com/)
- [Pydantic 文档](https://docs.pydantic.dev/)
- [SQLite 文档](https://sqlite.org/docs.html)
- [OpenAPI 规范](https://swagger.io/specification/)