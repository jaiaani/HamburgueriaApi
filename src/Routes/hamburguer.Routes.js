import HamburguersController from "../controller/hamburguersController.js"
import PedidosController from '../controller/pedidosController.js'
class RotasHambuguer {
    static rotas(app) {
        app.get('/hamburguer', (req, res) => {
            HamburguersController.listarHamburguers(req, res)
        })
        app.get('/hamburguer/id/:id', (req, res)=>{
            HamburguersController.listarHamburguerID(req,res)
        })
        app.get('/hamburguer/:nome', (req,res)=>{
            HamburguersController.listarHamburguerNome(req,res)
        })
        app.post('/hamburguer', (req, res) => {
            HamburguersController.cadastrarHamburguers(req, res)
        })
        
        app.put('/hamburguer/id/:id', (req, res) => {
            HamburguersController.atualizarHamburguerID(req, res)
        })
        app.put('/hamburguer/:nome', (req, res)=>{
            HamburguersController.atualizarHamburguerNome(req, res)
        })
        app.delete('/hamburguer/id/:id', (req, res) => {
            HamburguersController.excluirHamburguerID(req, res)
        })
        app.delete('/hamburguer/:nome', (req,res)=>{
            HamburguersController.excluirHamburguerNome(req, res)
        })
        app.post('/pedido', (req,res)=>{
            PedidosController.criarPedido(req,res)
        })
        app.get('/pedido', (req, res)=>{
            PedidosController.listarPedidos(req,res)
        })
    }
}

export default RotasHambuguer