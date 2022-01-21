const fs = require('fs')
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada)=>{
    const tipo = path.extname(caminho);
    const tiposValidos = ['jpg', 'png', 'jpeg'];
    let eValido = tiposValidos.indexOf(tipo.substring(1)) != -1;

    if(eValido){
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }
    else{
        const erro = "Tipo é inválido"
        console.log("Tipo Inválido")
        callbackImagemCriada(erro);
    }
    
}