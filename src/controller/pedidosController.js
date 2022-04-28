import pedidos from '../model/Pedido.js'

class PedidosController {
    static listarPedidos(req, res) {
        pedidos.find()
            .populate('cliente')
            .populate('hamburguer')
            .exec((erro, pedidos) => {
                if(erro){
                res.status(200).json(erro)
                }
                res.status(200).json(pedidos)
            })
    }

    static criarPedido(req, res) {
        const pedido = new pedidos(req.body)
        pedido.save((erro) => {
            if (erro) {
                res.send({Erro: erro.message})
            } else {
                res.send(pedido.toJSON())
            }
        })
    }
    static excluirPedido(req, res) {
        const idCliente = req.params.id
        pedidos.findOneAndDelete({"cliente": `${idCliente}`}, (erro) => {
            if (erro) {
                res.status(500).send({Mensagem: Response[500], Erro: erro})
            } else{
                res.status(200).send({Mensagem: Response[200]})
            }
        })
    }

}

export default PedidosController

