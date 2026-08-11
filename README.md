# Todo App

API backend para uma aplicação de tarefas (to-do list), construída com Express, TypeScript e MongoDB.

## Tecnologias

- [Express](https://expressjs.com/) 5
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/) / MongoDB
- [Docker Compose](https://docs.docker.com/compose/) (para subir o MongoDB localmente)

## Pré-requisitos

- Node.js
- [pnpm](https://pnpm.io/) (versão definida em `backend/package.json`)
- Docker (para rodar o MongoDB via `docker-compose`)

## Configuração

1. Instale as dependências do backend:

   ```bash
   cd backend
   pnpm install
   ```

2. Crie um arquivo `backend/.env` com as variáveis de ambiente:

   ```
   MONGODB_URI=mongodb://localhost:27017/todo-app
   PORT=3000
   ```

3. Suba o MongoDB com Docker Compose (a partir da raiz do projeto):

   ```bash
   docker-compose up -d
   ```

## Rodando o projeto

A partir da pasta `backend`:

```bash
# ambiente de desenvolvimento (com hot reload)
pnpm dev

# build de produção
pnpm build
pnpm start
```

## Endpoints da API

Todas as rotas de tarefas estão sob o prefixo `/tasks`:

| Método | Rota         | Descrição                  |
| ------ | ------------ | --------------------------- |
| GET    | `/tasks`     | Lista todas as tarefas      |
| GET    | `/tasks/:id` | Busca uma tarefa por id     |
| POST   | `/tasks`     | Cria uma nova tarefa        |
| PATCH  | `/tasks/:id` | Atualiza uma tarefa         |
| DELETE | `/tasks/:id` | Remove uma tarefa           |
