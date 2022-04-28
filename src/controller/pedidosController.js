import pedidos from '../model/Pedido.js'
import Response from '../utils/Response.js'
class PedidosController {
    static listarPedidos(req, res) {
        pedidos.find()
            .populate('cliente')
            .populate('hamburguer')
            .exec((erro, pedidos) => {
                if(erro){
                res.status(404).json({Mensagem: Response[404], Erro: erro})
                }
                res.status(200).json(pedidos)
            })
    }

    static criarPedido(req, res) {
        const pedido = new pedidos(req.body)
        pedido.save((erro) => {
            if (erro) {
                res.status(400).send({Mensagem: Response[400], Erro: erro})
            } else {
                res.status(201).send({Mensagem: Response[201], pedido})
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

