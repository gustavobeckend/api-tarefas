module.exports = function validaData (req, res, next) {
    const data = Date().toLocaleString();
    console.log(`[${data}] : ${req.method} : ${req.url}`);
    next();
}