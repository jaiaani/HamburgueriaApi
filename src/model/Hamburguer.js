import mongoose from "mongoose";

const hamburguerSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome: {type: String, required: true},
        preco: {type: Number, required: true},
        descricao: {type: String, required: true},
    },
    {
        versionKey: false
      }
)

const hamburguers = mongoose.model('hamburguers', hamburguerSchema) 

export default hamburguers