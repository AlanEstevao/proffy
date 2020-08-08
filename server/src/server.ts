import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

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


app.listen(9999);