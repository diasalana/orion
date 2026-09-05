const express = require('express');
const pool = require('./src/config/db');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Orion API rodando com sucesso!');
});

app.get('/papeis', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM papeis');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.json(resultado.rows);
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao buscar papeis');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});