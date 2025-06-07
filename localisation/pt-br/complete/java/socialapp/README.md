# Aplicação Java de Exemplo

Uma aplicação REST API Spring Boot abrangente para uma plataforma de mídia social com operações CRUD completas para posts, comentários e curtidas.

## Visão Geral do Projeto

Esta é uma aplicação Spring Boot pronta para produção construída com as seguintes especificações:

- **Nome do Pacote**: `com.contoso.socialapp`
- **ID do Artefato**: `socialapp`
- **ID do Grupo**: `com.contoso`
- **Tipo de Pacote**: `jar`
- **Versão Java**: OpenJDK 21
- **Ferramenta de Build**: Gradle
- **Banco de Dados**: SQLite (embarcado)
- **Porta**: 8080

### Dependências do Projeto

- **Spring Boot 3.2.5**: Framework principal
- **Spring Web**: Endpoints da RESTful API
- **Spring Data JPA**: Operações de banco de dados
- **Spring Boot Actuator**: Monitoramento da aplicação
- **Spring Boot Validation**: Validação de entrada
- **SQLite**: Banco de dados embarcado
- **Hibernate Community Dialects**: Suporte ao SQLite
- **Springdoc OpenAPI**: Documentação da API (Swagger UI)
- **Lombok**: Redução de código boilerplate

### Estrutura do Projeto

```text
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── contoso/
│   │           └── socialapp/
│   │               ├── SocialAppApplication.java     # Classe principal da aplicação
│   │               ├── config/
│   │               │   ├── WebConfig.java            # Configuração CORS
│   │               │   └── OpenApiConfig.java        # Configuração Swagger/OpenAPI
│   │               ├── controller/
│   │               │   ├── HealthController.java     # Endpoints de saúde
│   │               │   ├── PostController.java       # Gerenciamento de posts
│   │               │   └── CommentController.java    # Gerenciamento de comentários e curtidas
│   │               ├── model/
│   │               │   ├── Post.java                 # Entidade Post
│   │               │   ├── Comment.java              # Entidade Comment
│   │               │   ├── Like.java                 # Entidade Like
│   │               │   └── dto/                      # Objetos de Transferência de Dados
│   │               ├── repository/
│   │               │   ├── PostRepository.java       # Acesso a dados de posts
│   │               │   ├── CommentRepository.java    # Acesso a dados de comentários
│   │               │   └── LikeRepository.java       # Acesso a dados de curtidas
│   │               └── service/
│   │                   ├── PostService.java          # Lógica de negócio de posts
│   │                   └── CommentService.java       # Lógica de negócio de comentários
│   └── resources/
│       ├── application.properties                    # Configuração da aplicação
│       └── data.sql                                  # Dados de exemplo (opcional)
└── test/
    └── java/
        └── com/
            └── contoso/
                └── socialapp/
                    └── SocialAppApplicationTests.java # Testes de integração
```

## Funcionalidades

- ✅ API RESTful completa para operações de mídia social
- ✅ Gerenciamento de posts (Criar, Ler, Atualizar, Excluir)
- ✅ Sistema de comentários com operações CRUD completas
- ✅ Funcionalidade de curtir/descurtir
- ✅ Banco de dados SQLite com JPA/Hibernate
- ✅ Documentação OpenAPI/Swagger
- ✅ CORS habilitado para localhost e GitHub Codespaces
- ✅ Configuração dinâmica de URL do servidor
- ✅ Endpoints de verificação de saúde
- ✅ Integração com Spring Boot Actuator
- ✅ Tratamento abrangente de erros
- ✅ Validação de entrada com Bean Validation

## Início Rápido

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

Em seguida, navegue até o diretório java.

```bash
cd $REPOSITORY_ROOT/complete/java
```

### 2. Construir a Aplicação

```bash
# Tornar gradlew executável (se necessário)
chmod +x ./gradlew

# Construir o projeto
./gradlew build
```

### 3. Executar a Aplicação

```bash
# Iniciar a aplicação usando Gradle
./gradlew bootRun

# Alternativa: Executar o arquivo JAR diretamente
# java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### 4. Verificar se a Aplicação está Executando

```bash
# Verificar endpoint de saúde
curl http://localhost:8080/api/health

# Resposta esperada: {"status":"healthy"}
```

### 5. Acessar Documentação da API

Abra seu navegador e navegue para:

- **Swagger UI**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
- **OpenAPI JSON**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

## Endpoints da API

### Saúde e Boas-vindas

- `GET /api/health` - Endpoint personalizado de verificação de saúde
- `GET /api/welcome` - Endpoint de mensagem de boas-vindas

### Gerenciamento de Posts

- `GET /api/posts` - Obter todos os posts
- `GET /api/posts/{id}` - Obter post específico por ID
- `POST /api/posts` - Criar um novo post
- `PATCH /api/posts/{id}` - Atualizar um post existente
- `DELETE /api/posts/{id}` - Excluir um post

### Gerenciamento de Comentários

- `GET /api/posts/{postId}/comments` - Obter todos os comentários de um post
- `GET /api/posts/{postId}/comments/{commentId}` - Obter comentário específico
- `POST /api/posts/{postId}/comments` - Adicionar um comentário a um post
- `PATCH /api/posts/{postId}/comments/{commentId}` - Atualizar um comentário
- `DELETE /api/posts/{postId}/comments/{commentId}` - Excluir um comentário

### Gerenciamento de Curtidas

- `POST /api/posts/{postId}/like` - Curtir um post
- `DELETE /api/posts/{postId}/like` - Descurtir um post

### Spring Boot Actuator

- `GET /actuator/health` - Indicador de saúde do Spring Boot
- `GET /actuator/info` - Informações da aplicação

## Testando a API

### Usando Exemplos de cURL

#### Criar um Post

```bash
curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meu Primeiro Post",
    "content": "Este é o conteúdo do meu primeiro post!",
    "authorName": "João Silva"
  }'
```

#### Obter Todos os Posts

```bash
curl http://localhost:8080/api/posts
```

#### Adicionar um Comentário

```bash
curl -X POST http://localhost:8080/api/posts/1/comments \
  -H "Content-Type: application/json" \
  -d '{
    "content": "Ótimo post!",
    "authorName": "Maria Santos"
  }'
```

#### Curtir um Post

```bash
curl -X POST http://localhost:8080/api/posts/1/like \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "joao_silva"
  }'
```

### Usando Swagger UI

1. Abra [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
2. Explore os endpoints disponíveis
3. Clique em "Try it out" em qualquer endpoint
4. Preencha os parâmetros e clique em "Execute"

## Desenvolvimento

### Executando Testes

```bash
# Executar todos os testes
./gradlew test

# Executar com relatório de cobertura
./gradlew test jacocoTestReport

# Executar classe de teste específica
./gradlew test --tests "SocialAppApplicationTests"
```

### Banco de Dados

A aplicação usa SQLite como banco de dados embarcado:

- **Arquivo do banco de dados**: `sns_api.db` (criado automaticamente)
- **Localização**: Diretório raiz do projeto
- **Schema**: Gerado automaticamente pelo Hibernate
- **Dados de exemplo**: Carregados de `data.sql` (se presente)

Para resetar o banco de dados, simplesmente exclua o arquivo `sns_api.db` e reinicie a aplicação.

## Configuração

### Propriedades da Aplicação

Configurações principais em `application.properties`:

```properties
# Configurações da Aplicação
spring.application.name=socialapp
server.port=8080

# Configuração do Banco de Dados
spring.datasource.url=jdbc:sqlite:sns_api.db
spring.jpa.hibernate.ddl-auto=update

# Configuração OpenAPI/Swagger
springdoc.swagger-ui.path=/swagger-ui.html
springdoc.swagger-ui.operationsSorter=method
```

### Configuração CORS

A aplicação suporta tanto localhost quanto GitHub Codespaces:

- **Localhost**: `http://localhost:8080`
- **GitHub Codespaces**: Detectado e configurado automaticamente de forma dinâmica

### Detecção de Ambiente

A aplicação detecta automaticamente o ambiente de execução:

- **Desenvolvimento Local**: Usa `http://localhost:8080`
- **GitHub Codespaces**: Usa `https://{codespace-name}-8080.{domain}`

## Implantação

### Construindo para Produção

```bash
# Criar JAR de produção
./gradlew clean build

# Localização do JAR
ls -la build/libs/socialapp-0.0.1-SNAPSHOT.jar
```

### Executando em Produção

```bash
# Executar com perfil de produção
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

# Ou com porta personalizada
java -jar build/libs/socialapp-0.0.1-SNAPSHOT.jar --server.port=8081
```

## Solução de Problemas

### Problemas Comuns

#### Porta Já em Uso

```bash
# Encontrar processo usando porta 8080
lsof -i :8080

# Matar o processo (substitua PID)
kill -9 <PID>

# Ou usar uma porta diferente
./gradlew bootRun --args='--server.port=8081'
```

#### Falhas de Build

```bash
# Limpar e reconstruir
./gradlew clean build

# Atualizar wrapper Gradle
./gradlew wrapper --gradle-version=8.5
```

#### Problemas com Banco de Dados

```bash
# Resetar banco de dados
rm sns_api.db
./gradlew bootRun
```

### Logs e Monitoramento

- **Logs da aplicação**: Saída do console ao executar `./gradlew bootRun`
- **Verificação de saúde**: `GET /actuator/health`
- **Informações da aplicação**: `GET /actuator/info`

## Considerações de Segurança

⚠️ **Configuração de Desenvolvimento**: A configuração atual é otimizada para desenvolvimento com:

- CORS habilitado para todas as origens
- Banco de dados SQLite (não adequado para escala de produção)
- Sem autenticação/autorização

Para implantação em produção, considere:

- Restringir CORS a domínios específicos
- Usar PostgreSQL/MySQL em vez de SQLite
- Implementar Spring Security para autenticação
- Adicionar limitação de taxa e sanitização de entrada
- Usar criptografia HTTPS/TLS

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
