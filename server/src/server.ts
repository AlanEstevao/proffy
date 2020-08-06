import express from 'express';

const app = express();

app.use(express.json());

// Rota - http://localhost:9999/users
// Recurso - /users
// Médodos:
// GET - Buscar ou listar uma informação
// POST - Criar alguma nova informação
// PUT - Atualizar uma informação existente
// DELETE - Deletar uma informação existente

// O navegador sempre usa GET

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso quero atualizar ou deletar
// Ex.: /users/:id
// Query Params: Paginação, filtro, ordenação em listagem pelo GET
// Ex.: /users?page=2&sort=name

app.get('/', (request, response) => {
  return response.json({
    message: "Hello World!",
  });
});

app.listen(9999);