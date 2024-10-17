import { createServer } from 'node:http'

const servidor = createServer((req, res) => { //requisição e resposta
    console.log('qualquer coisa')
    res.write('ta funcionando 2')                                         
    return res.end()
})
//servidor onde o servidor roda
servidor.listen(8000)



//package.json alterações:

//LINHA 06
//  "type": "module",

//LINHA 09 
//"dev": "nodemon index.js"
//


//INSTALAÇÕES
//NODEMON: https://www.npmjs.com/package/nodemon --> para não precisar derrubar o servidor quando atualizar o código
//EXPRESS: https://www.npmjs.com/package/express --> api para navegar entre as diferentes rotas, como por exemplo, o user deletar uma música de sua playlist, sem deletar o banco de dados