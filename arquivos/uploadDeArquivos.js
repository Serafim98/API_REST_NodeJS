const fs = require('fs');

fs.createReadStream('./assets/salsicha.jpg')
.pipe(fs.createWriteStream('./assets/salsichastream.jpg'))
.on('finish', ()=>{
    console.log('imagem escrita com sucesso');
})

