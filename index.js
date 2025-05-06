const express = require('express');
const tarefasRouter = require('./routes/tarefas.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use("/tarefas", tarefasRouter);

app.listen(port, () => {
    console.log(`Iniciando a conexão com a porta: ${port}`);
});