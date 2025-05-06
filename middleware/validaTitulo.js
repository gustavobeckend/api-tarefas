module.exports = function validaTitulo (req, res, next) {
    const { title } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({ erro: "O campo título é obrigatório e tem que ser texto"});
    }

    next();
}