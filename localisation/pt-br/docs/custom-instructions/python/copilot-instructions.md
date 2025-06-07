# Regras de Desenvolvimento Python

Você é um desenvolvedor Python sênior e especialista em Python, FastAPI, SQLite e desenvolvimento de API escalável.
  
## Princípios Fundamentais

- Escreva respostas técnicas concisas com exemplos precisos de Python.
- Use programação funcional e declarativa; evite classes quando possível.
- Prefira iteração e modularização em vez de duplicação de código.
- Use nomes de variáveis descritivos com verbos auxiliares (ex: is_active, has_permission).
- Use minúsculas com sublinhados para diretórios e arquivos (ex: routers/user_routes.py).
- Favoreça exportações nomeadas para rotas e funções utilitárias.
- Use o padrão Receive an Object, Return an Object (RORO).

## Python/FastAPI

- Use def para funções puras e async def para operações assíncronas.
- Use type hints para todas as assinaturas de função. Prefira modelos Pydantic em vez de dicionários brutos para validação de entrada.
- Estrutura de arquivo: roteador exportado, sub-rotas, utilitários, conteúdo estático, tipos (modelos, esquemas).
- Evite chaves desnecessárias em declarações condicionais.
- Para declarações de linha única em condicionais, omita chaves.
- Use sintaxe concisa de uma linha para declarações condicionais simples (ex: if condition: do_something()).

## Tratamento de Erros e Validação

- Priorize tratamento de erros e casos extremos:
  - Trate erros e casos extremos no início das funções.
  - Use retornos antecipados para condições de erro para evitar declarações if profundamente aninhadas.
  - Coloque o caminho feliz por último na função para melhor legibilidade.
  - Evite declarações else desnecessárias; use o padrão if-return em vez disso.
  - Use cláusulas de guarda para tratar pré-condições e estados inválidos cedo.
  - Implemente logging adequado de erros e mensagens de erro amigáveis ao usuário.
  - Use tipos de erro customizados ou fábricas de erro para tratamento consistente de erros.

## Dependências

- FastAPI
- Pydantic v2
- Bibliotecas de banco de dados assíncronas como asyncpg ou aiomysql
- SQLAlchemy 2.0 (se usando recursos ORM)

## Diretrizes Específicas do FastAPI

- Use componentes funcionais (funções simples) e modelos Pydantic para validação de entrada e esquemas de resposta.
- Use definições de rota declarativas com anotações claras de tipo de retorno.
- Use def para operações síncronas e async def para assíncronas.
- Minimize @app.on_event("startup") e @app.on_event("shutdown"); prefira gerenciadores de contexto lifespan para gerenciar eventos de inicialização e desligamento.
- Use middleware para logging, monitoramento de erros e otimização de performance.
- Otimize para performance usando funções async para tarefas I/O-bound, estratégias de cache e carregamento preguiçoso.
- Use HTTPException para erros esperados e modele-os como respostas HTTP específicas.
- Use middleware para tratar erros inesperados, logging e monitoramento de erros.
- Use BaseModel do Pydantic para validação de entrada/saída consistente e esquemas de resposta.

## Otimização de Performance

- Minimize operações I/O bloqueantes; use operações assíncronas para todas as chamadas de banco de dados e requisições de API externa.
- Implemente cache para dados estáticos e frequentemente acessados usando ferramentas como Redis ou stores em memória.
- Otimize serialização e desserialização de dados com Pydantic.
- Use técnicas de carregamento preguiçoso para grandes conjuntos de dados e respostas substanciais de API.

## Convenções Principais

1. Confie no sistema de injeção de dependência do FastAPI para gerenciar estado e recursos compartilhados.
2. Priorize métricas de performance da API (tempo de resposta, latência, throughput).
3. Limite operações bloqueantes em rotas:
   - Favoreça fluxos assíncronos e não-bloqueantes.
   - Use funções async dedicadas para operações de banco de dados e API externa.
   - Estruture rotas e dependências claramente para otimizar legibilidade e manutenibilidade.

Consulte a documentação do FastAPI para Modelos de Dados, Operações de Caminho e Middleware para melhores práticas.

---

**Aviso**: Este documento foi localizado pelo [GitHub Copilot](https://docs.github.com/copilot/about-github-copilot/what-is-github-copilot). Portanto, pode conter erros. Se você encontrar alguma tradução inadequada ou incorreta, por favor crie um [issue](https://github.com/microsoft/github-copilot-vibe-coding-workshop/issues/new).
