module.exports = (app) => {
    app.get('/', (req, resp) => resp.send('Servidor rodando, tudo ok!!!'));
}