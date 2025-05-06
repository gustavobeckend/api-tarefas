function aguardandoDados () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Processando os dados`);
        }, 3000);
    });
}

export default async function processamento(req, res, next) {
    const { titulo } = await aguardandoDados();
    console.log("Processamento concluido");
    next();
}