const express = require("express");
const router = express.Router();

router.use(express.json());

let titulos = [];
let currentId = 1;

router.get("/", (req, res) => {
    const status = req.query.status;

    if (status === 'concluida') {
        const tarefasConcluidas = titulos.filter(t => t.concluido === true);
        return res.json(tarefasConcluidas);
    }
    res.json(titulos);
})

router.post("/", (req, res) => {
    const titulo = { id: currentId++, title: req.body.title, concluido: req.body.concluido};
    titulos.push(titulo);
    res.status(201).json(titulo);
})

router.put("/:id", (req, res) => {
    const titulo = titulos.find(i => i.id === parseInt(req.params.id));
    if (!titulo) return res.status(404).send("Titulo não encontrado");
    titulo.title = req.body.title;
    res.json(titulo);
})

router.delete("/:id", (req, res) => {
    const titulo = titulos.findIndex(i => i.id === parseInt(req.params.id));
    if (titulo === -1) return res.status(404).send("Titulo não encontrado");
    const deltitle = titulos.splice(titulo, 1);
    res.json(deltitle[0]);
})

module.exports = router;