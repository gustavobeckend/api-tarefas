const express = require("express");
const app = express();
const tarefasRouter = require("./routes/tarefas");

app.use(express.json());
app.use("/tarefas", tarefasRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Iniciando a conexão com a porta: ${port}`);
});