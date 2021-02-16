const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexão');
const Tabelas = require('./infraestrutura/tabela')

conexao.connect(erro=>{
    if(erro){
        console.log(erro);
    }else{
        console.log('Conectado com sucesso!!!');

        Tabelas.init(conexao);
        
        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
});