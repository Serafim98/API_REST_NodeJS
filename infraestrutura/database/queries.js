const conexao = require('./conexao');

const executaQuery = (query, parametros = '')=> {
    return new Promise((resolve, reject)=>{
    return conexao.query(query, parametros, (erros, resultados, campos)=>{
        if(erros){
            reject(erros)
        }
        else{
            resolve(resultados)
        }
    })
})
}