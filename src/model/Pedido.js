import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        id:{type: String},
        NomeCliente: {type: String, requires: true},
        Telefone: {type: Number, requires: true},
        Hamburguer: {type: mongoose.Schema.Types.ObjectId, ref: 'Hamburguers', requires: true},
        Endereco: {type: String, required: true}
    }
)

const pedidos = mongoose.model('Pedidos', pedidoSchema) 

export default pedidos