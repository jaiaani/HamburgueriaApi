import Mensagem from './src/utils/Mensagens.js'
import express from 'express';
import db from './src/config/dbConexao.js'
import RotasHambuguer from './src/Routes/hamburguer.Routes.js'
import RotasPedidos from './src/Routes/pedidos.Routes.js';
import RotasCliente from './src/Routes/clientes.Routes.js';
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

db.on("error", console.log.bind(console, "Houve um erro ao se conectar com o banco de dados"))
db.once("open", ()=> {
   console.log("Banco de dados conectado com sucesso")
})

app.get('/', (req,res)=> res.send(new Mensagem(200, 'OK', 'Api Rest com MongoDb feita para o projeto do módulo 5 - Resilia')))
app.listen(port, ()=> console.log(`Servidor rodando na porta: ${port}`))

RotasHambuguer.rotas(app)
RotasPedidos.rotas(app)
RotasCliente.rotas(app)