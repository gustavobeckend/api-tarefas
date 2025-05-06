const express = require('express');
const validaData = require("../middleware/validaData.js");
const validaTitulo = require("../middleware/validaTitulo.js");

const router = express.Router();
router.use(express.json());
router.use(validaData);

let titulos = [];
let currentId = 1;

router.get("/", (req, res) => {
    const { status } = req.query;

    if (status) {
        const tarefasConcluidas = titulos.filter(t => t.concluido === Boolean(status));
        return res.json(tarefasConcluidas);
    }
    res.json(titulos);
})

router.post("/", validaTitulo, (req, res) => {
    const { title, concluido } = req.body;
    const newTitle = { id: currentId++, title, concluido};
    titulos.push(newTitle);
    res.status(201).json(newTitle);
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