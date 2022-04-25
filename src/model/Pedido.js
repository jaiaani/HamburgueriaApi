import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        id:{type: String},
        nomeCliente: {type: String, requires: true},
        telefone: {type: Number, requires: true},
        hamburguer: {type: mongoose.Schema.Types.ObjectId, ref: 'hamburguers', requires: true},
        endereco: {type: String, required: true}
    }
)

const pedidos = mongoose.model('Pedidos', pedidoSchema) 

export default pedidos