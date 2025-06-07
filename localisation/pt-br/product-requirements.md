# Documento de Requisitos do Produto (PRD)

## Título do Produto

Aplicação de Mídia Social Simples

## Versão do Documento

1.0.0

## Autor

Product Owner / Tech Lead na Contoso

## Última Atualização

2025-05-30

---

## 1. Visão Geral

O objetivo deste projeto é construir um Serviço de Rede Social (SNS) básico, mas funcional, que permita aos usuários criar, recuperar, atualizar e excluir postagens; adicionar comentários; e curtir/descurtir postagens. A abordagem API-first garante que pode ser usado como backend para frontends web ou móveis.

## 2. Contexto

A Contoso é uma empresa que vende produtos para várias atividades ao ar livre. O departamento de marketing da Contoso gostaria de lançar um site de micro mídia social para promover seus produtos para clientes existentes e potenciais. Como seu primeiro MVP, o departamento de marketing quer construir rapidamente o site.

## 3. Objetivos e Metas

* Fornecer operações CRUD para conteúdo gerado pelo usuário (postagens).
* Permitir interação social através de comentários e curtidas.
* Manter simplicidade para casos de uso educacionais e MVP.
* Garantir design de API RESTful e tratamento adequado de erros.

## 4. Funcionalidades Principais

### 4.1 Gerenciamento de Postagens

* **Listar Postagens**

  * **GET** `/api/posts`
  * História do Usuário: Como usuário, quero ver todas as postagens recentes para poder navegar pelo que outros estão compartilhando.

* **Criar Postagem**

  * **POST** `/api/posts`
  * Obrigatório: `username`, `content`
  * História do Usuário: Como usuário, quero criar uma nova postagem para poder compartilhar algo com outros.

* **Obter Postagem Específica**

  * **GET** `/api/posts/{postId}`
  * História do Usuário: Como usuário, quero ler uma postagem específica em detalhes.

* **Atualizar Postagem**

  * **PATCH** `/api/posts/{postId}`
  * Obrigatório: `username`, `content`
  * História do Usuário: Como usuário, quero atualizar minha postagem se cometi um erro ou tenho algo a acrescentar.

* **Deletar Postagem**

  * **DELETE** `/api/posts/{postId}`
  * História do Usuário: Como usuário, quero deletar minha postagem se não quero mais que seja compartilhada.

### 4.2 Gerenciamento de Comentários

* **Listar Comentários de uma Postagem**

  * **GET** `/api/posts/{postId}/comments`
  * História do Usuário: Como usuário, quero ler todos os comentários de uma postagem.

* **Criar Comentário**

  * **POST** `/api/posts/{postId}/comments`
  * Obrigatório: `username`, `content`
  * História do Usuário: Como usuário, quero comentar em uma postagem para compartilhar meus pensamentos.

* **Obter Comentário Específico**

  * **GET** `/api/posts/{postId}/comments/{commentId}`
  * História do Usuário: Como usuário, quero ver um comentário específico em detalhes.

* **Atualizar Comentário**

  * **PATCH** `/api/posts/{postId}/comments/{commentId}`
  * Obrigatório: `username`, `content`
  * História do Usuário: Como usuário, quero corrigir ou revisar meu comentário.

* **Deletar Comentário**

  * **DELETE** `/api/posts/{postId}/comments/{commentId}`
  * História do Usuário: Como usuário, quero deletar meu comentário se necessário.

### 4.3 Sistema de Curtidas

* **Curtir uma Postagem**

  * **POST** `/api/posts/{postId}/likes`
  * Obrigatório: `username`
  * História do Usuário: Como usuário, quero curtir uma postagem para mostrar apreço.

* **Descurtir uma Postagem**

  * **DELETE** `/api/posts/{postId}/likes`
  * História do Usuário: Como usuário, quero remover minha curtida se mudar de ideia.

## 5. Funções de Usuário e Permissões

* **Usuários Anônimos**
  * Podem ler postagens e comentários.

* **Usuários Autenticados (via campo username)**
  * Podem criar, atualizar, deletar suas próprias postagens e comentários.
  * Podem curtir/descurtir postagens.

## 6. Contratos de API

* Definir o documento OpenAPI com especificação v3.0.1 no mínimo.
* Usa códigos de status HTTP padrão.
  * `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`
* Content-Type: `application/json`

## 7. Requisitos Não-Funcionais

* **Documentação**: A API deve ser totalmente documentada usando Swagger UI.
* **Segurança**: Validação de entrada e validação básica de requisições, mesmo que autenticação completa não seja implementada.

## 8. Suposições e Dependências

* Usar banco de dados em memória para este produto.
* Nenhum suporte para upload de arquivos ou mídia está incluído.
* Nenhum registro de usuário ou fluxos de login/autenticação.
* Nenhum código de teste é necessário.

## 9. Métricas de Sucesso

* Todos os endpoints da API são acessíveis e respondem conforme documentado.
* Capaz de postar, comentar, curtir e deletar recursos de ponta a ponta.
* Documentação Swagger clara gerada a partir do OpenAPI.

## 10. Fora do Escopo

* Autenticação de usuário (OAuth, JWT, etc.)
* Atualizações em tempo real ou notificações
* Ferramentas de moderação ou relatórios
* Uploads multimídia (imagens, vídeo)

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
