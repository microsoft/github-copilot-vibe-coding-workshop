# Aplicação Python de Exemplo

Uma implementação completa de backend FastAPI para um Serviço de Rede Social Simples (SNS) que permite aos usuários criar, recuperar, atualizar e excluir posts; adicionar comentários; e curtir/descurtir posts.

## 🏗️ Visão Geral da Arquitetura

- **Framework**: FastAPI com Python 3.12+
- **Banco de Dados**: SQLite (`sns_api.db`)
- **Documentação da API**: Swagger UI + especificação OpenAPI 3.1
- **CORS**: Habilitado para requisições cross-origin
- **Validação de Dados**: modelos Pydantic com validação abrangente

## 📁 Estrutura do Projeto

```text
python/
├── main.py              # Ponto de entrada da aplicação FastAPI
├── models.py            # Modelos de dados e esquemas Pydantic
├── database.py          # Operações do banco de dados SQLite
├── openapi.yaml         # Especificação OpenAPI 3.0.1
├── sns_api.db          # Arquivo de banco de dados SQLite (criado automaticamente)
├── README.md           # Esta documentação
└── .venv/              # Ambiente virtual (criado durante a configuração)
```

## 🚀 Início Rápido

### Pré-requisitos

Consulte a documentação [README](../../README.md) para preparação.

### 1. Configuração do Ambiente

Primeiro, defina a variável de ambiente `$REPOSITORY_ROOT`.

```bash
# bash/zsh
REPOSITORY_ROOT=$(git rev-parse --show-toplevel)
```

```powershell
# PowerShell
$REPOSITORY_ROOT = git rev-parse --show-toplevel
```

Em seguida, navegue até o diretório python e crie um ambiente virtual:

```bash
cd $REPOSITORY_ROOT/complete/python
```

Crie o ambiente virtual

```bash
# Usando uv (recomendado)
uv venv .venv
```

```bash
# Usando Python padrão (alternativa)
python -m venv .venv
```

### 2. Ativar Ambiente Virtual

```bash
# No Linux/macOS
source .venv/bin/activate
```

```bash
# No Windows Command Prompt
.venv\Scripts\activate
```

### 3. Instalar Dependências

```bash
# Usando uv (recomendado)
uv pip install fastapi uvicorn python-multipart pyyaml
```

```bash
# Usando pip (alternativa)
pip install fastapi uvicorn python-multipart pyyaml
```

### 4. Copiar Especificação OpenAPI

Copie a especificação OpenAPI do diretório pai.

```bash
# No Linux/macOS
cp ../openapi.yaml .
```

```powershell
# No Windows Command Prompt
xcopy ..\openapi.yaml .
```

### 5. Executar a Aplicação

Inicie o servidor de desenvolvimento

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

A aplicação estará disponível em:

- **URL Base da API**: `http://localhost:8000/api/`
- **Swagger UI**: `http://localhost:8000/docs`
- **Especificação OpenAPI**: `http://localhost:8000/openapi.json`

## 📊 Esquema do Banco de Dados

A aplicação usa SQLite com as seguintes tabelas:

### Tabela Posts

- `id` (TEXT, PRIMARY KEY) - UUID
- `username` (TEXT, NOT NULL) - Nome de usuário do autor
- `content` (TEXT, NOT NULL) - Conteúdo do post
- `created_at` (TEXT, NOT NULL) - Timestamp ISO
- `updated_at` (TEXT, NOT NULL) - Timestamp ISO

### Tabela Comments

- `id` (TEXT, PRIMARY KEY) - UUID
- `post_id` (TEXT, NOT NULL) - Chave estrangeira para posts
- `username` (TEXT, NOT NULL) - Nome de usuário do autor
- `content` (TEXT, NOT NULL) - Conteúdo do comentário
- `created_at` (TEXT, NOT NULL) - Timestamp ISO
- `updated_at` (TEXT, NOT NULL) - Timestamp ISO

### Tabela Likes

- `post_id` (TEXT, NOT NULL) - Chave estrangeira para posts
- `username` (TEXT, NOT NULL) - Usuário que curtiu
- `liked_at` (TEXT, NOT NULL) - Timestamp ISO
- Chave primária: `(post_id, username)`

## 🔌 Endpoints da API

### Posts

- `GET /api/posts` - Listar todos os posts
- `POST /api/posts` - Criar um novo post
- `GET /api/posts/{postId}` - Obter um post específico
- `PATCH /api/posts/{postId}` - Atualizar um post
- `DELETE /api/posts/{postId}` - Excluir um post

### Comentários

- `GET /api/posts/{postId}/comments` - Listar comentários de um post
- `POST /api/posts/{postId}/comments` - Criar um comentário
- `GET /api/posts/{postId}/comments/{commentId}` - Obter um comentário específico
- `PATCH /api/posts/{postId}/comments/{commentId}` - Atualizar um comentário
- `DELETE /api/posts/{postId}/comments/{commentId}` - Excluir um comentário

### Curtidas

- `POST /api/posts/{postId}/likes` - Curtir um post
- `DELETE /api/posts/{postId}/likes?username={username}` - Descurtir um post

## 🧪 Testando a API

### Usando cURL

#### Criar um Post

```bash
curl -X POST "http://localhost:8000/api/posts" \
  -H "Content-Type: application/json" \
  -d '{"username": "john_doe", "content": "Olá Mundo! Este é meu primeiro post."}'
```

#### Obter Todos os Posts

```bash
curl -X GET "http://localhost:8000/api/posts"
```

#### Adicionar um Comentário

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/comments" \
  -H "Content-Type: application/json" \
  -d '{"username": "jane_smith", "content": "Ótimo post!"}'
```

#### Curtir um Post

```bash
curl -X POST "http://localhost:8000/api/posts/{POST_ID}/likes" \
  -H "Content-Type: application/json" \
  -d '{"username": "alice_johnson"}'
```

### Usando Swagger UI

1. Navegue para `http://localhost:8000/docs`
2. Explore e teste todos os endpoints da API interativamente
3. Visualize esquemas e exemplos de request/response

## 📝 Modelos de Dados

### Modelos de Request

- `NewPostRequest`: `{username: str, content: str}`
- `UpdatePostRequest`: `{username: str, content: str}`
- `NewCommentRequest`: `{username: str, content: str}`
- `UpdateCommentRequest`: `{username: str, content: str}`
- `LikeRequest`: `{username: str}`

### Modelos de Response

- `Post`: Objeto post completo com metadados e contadores
- `Comment`: Objeto comentário completo com metadados
- `LikeResponse`: Confirmação de curtida com timestamp

## ⚙️ Configuração

### Variáveis de Ambiente

A aplicação usa configurações padrão mas pode ser personalizada:

- **Banco de Dados**: Arquivo SQLite `sns_api.db` (criado automaticamente)
- **Host**: `0.0.0.0` (todas as interfaces)
- **Porta**: `8000`
- **CORS**: Habilitado para todas as origens

### Considerações para Produção

Para implantação em produção, considere:

1. **Banco de Dados**: Mude para PostgreSQL ou MySQL
2. **Variáveis de Ambiente**: Use para configuração sensível
3. **Segurança**: Adicione autenticação e autorização
4. **CORS**: Restrinja a domínios específicos
5. **Logging**: implemente logging estruturado
6. **Monitoramento**: Adicione verificações de saúde e métricas

## 🛠️ Desenvolvimento

### Organização de Arquivos

- **`main.py`**: Configuração da app FastAPI, middleware e definições de rotas
- **`models.py`**: Modelos Pydantic para validação e serialização de dados
- **`database.py`**: Operações SQLite, gerenciamento de conexão e funções CRUD

### Estilo de Código

O projeto segue:

- Diretrizes de estilo Python PEP 8
- Melhores práticas do FastAPI
- Padrões de programação funcional
- Type hints em todo o código
- Tratamento de erros abrangente

### Adicionando Novas Funcionalidades

1. Defina modelos Pydantic em `models.py`
2. Adicione operações de banco de dados em `database.py`
3. Crie endpoints da API em `main.py`
4. Atualize a especificação OpenAPI se necessário

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Porta já em uso**: Mude a porta com `--port 8001`
2. **Problemas com ambiente virtual**: Recrie com `rm -rf .venv && uv venv .venv`
3. **Banco de dados bloqueado**: Pare todas as instâncias em execução da aplicação
4. **Erros de importação**: Certifique-se de que o ambiente virtual está ativado

### Modo Debug

Execute com logging adicional:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload --log-level debug
```

## 📚 Recursos Adicionais

- [Documentação do FastAPI](https://fastapi.tiangolo.com/)
- [Documentação do Pydantic](https://docs.pydantic.dev/)
- [Documentação do SQLite](https://sqlite.org/docs.html)
- [Especificação OpenAPI](https://swagger.io/specification/)

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
