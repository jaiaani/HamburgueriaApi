import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        id: {type: String},
        nomeSobrenome: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        telefone: {type: Number, required: true},
        rua: {type: String, required: true},
        numero: {type: Number, required: true},
        complemento: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const clientes = mongoose.model('clientes', clienteSchema)

export default clientes