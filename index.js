const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let titulos = [];
let currentId = 1;

app.get("/tarefas", (req, res) => {
    const status = req.query.status;

    if (status === 'concluida') {
        const tarefasConcluidas = titulos.filter(t => t.concluido === true);
        return res.json(tarefasConcluidas);
    }
    res.json(titulos);
})

// app.get("/tarefas/:id", (req, res) => {
//     const titulo = titulos.find(i => i.id === parseInt(req.params.id));
//     if (!titulo) return res.status(404).send("Titulo não encontrado");
//     res.json(titulo);
// })

app.post("/tarefas", (req, res) => {
    const titulo = { id: currentId++, title: req.body.title, concluido: req.body.concluido};
    titulos.push(titulo);
    res.status(201).json(titulo);
})

app.put("/tarefas/:id", (req, res) => {
    const titulo = titulos.find(i => i.id === parseInt(req.params.id));
    if (!titulo) return res.status(404).send("Titulo não encontrado");
    titulo.title = req.body.title;
    res.json(titulo);
})

app.delete("/tarefas/:id", (req, res) => {
    const titulo = titulos.findIndex(i => i.id === parseInt(req.params.id));
    if (titulo === -1) return res.status(404).send("Titulo não encontrado");
    const deltitle = titulos.splice(titulo, 1);
    res.json(deltitle[0]);
})

app.listen(port, () => {
    console.log(`Iniciando a conexão com a porta: ${port}`);
})