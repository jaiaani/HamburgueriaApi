import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
    {
        id:{type: String},
        cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required: true},
        hamburguer: {type: mongoose.Schema.Types.ObjectId, ref: 'hamburguers', requires: true},
        horario: {type: Date, default: Date.now, required: true}
    }
)

const pedidos = mongoose.model('pedidos', pedidoSchema) 

export default pedidos

