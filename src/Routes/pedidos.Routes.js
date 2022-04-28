import PedidosController from "../controller/pedidosController.js"
class RotasPedidos{
    static rotas(app){
        app.post('/pedido', (req,res)=>{
            PedidosController.criarPedido(req,res)
        })
        app.get('/pedido', (req, res)=>{
            PedidosController.listarPedidos(req,res)
        })
        app.delete('/pedido/:id', (req,res)=>{
            PedidosController.excluirPedido(req, res)
        })
    }
}

export default RotasPedidos