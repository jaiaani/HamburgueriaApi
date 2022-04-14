import express from 'express'
import Mensagem from './src/utils/Mensagens.js'
import db from './src/config/dbConexao.js'
import HamburguersController from './src/controller/hamburguersController.js'

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

db.on("error", console.log.bind(console, "Houve um erro ao se conectar com o banco de dados"))
db.once("open", ()=> {
   console.log("Banco de dados conectado com sucesso")
})

app.get('/', (req,res)=> res.send(new Mensagem(200, 'OK', 'Api Rest com MongoDb feita para o projeto do módulo 5 - Resilia')))

app.get('/hamburguers', (req, res)=>{
   HamburguersController.listarHamburguers(req, res)
})
app.post('/hamburguers', (req, res)=> {
   HamburguersController.cadastrarHamburguers(req,res)
})
app.put('/hamburguer/:id', (req,res)=>{
   HamburguersController.atualizarHamburguerID(req,res)
})
app.delete('/hamburguer/:id', (req,res)=>{
   HamburguersController.excluirHamburguerID(req,res)
})
app.listen(port, ()=> console.log(`Servidor rodando na porta: ${port}`))

