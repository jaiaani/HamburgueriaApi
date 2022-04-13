import mongoose from "mongoose";

const hamburguerSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome: {type: String, requires: true},
        preco: {type: Number, requires: true},
        descricao: {type: String, required: true}
    }
)

const hamburguers = mongoose.model('Hamburguers', hamburguerSchema) 

export default hamburguers