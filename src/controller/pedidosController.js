import pedidos from '../model/Pedido.js'

class PedidosController{
    static criarPedido(req, res){
        const pedido = new pedidos(req.body)
        pedido.save((erro)=>{
            if(erro){
                res.send({Erro: erro.message})
            } else [
                res.send(pedido.toJSON())
            ]
        })

    }
    static listarPedidos(req, res){
        pedidos.find().populate('hamburguer').exec((erro, pedidos)=>{
            res.send(pedidos)
        })
    }
}
export default PedidosController