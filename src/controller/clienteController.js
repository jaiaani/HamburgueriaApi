import clientes from "../model/Cliente.js";
import Response from "../utils/Response.js";

class clienteController{
    static cadastrarCliente(req, res){
        const cliente = new clientes(req.body)
        cliente.save((erro)=>{
            if(erro){
                res.status(400).send({Mensagem: Response[400], Erro: erro})
            } else {
                res.status(201).send({Mensagem: Response[201], Resultado: cliente.toJSON()})
            }
        })
    }
    static listarClientes(req, res){
        clientes.find((erro, clientes)=>{
            if(erro || clientes.length == 0){
                res.status(404).send({Mensagem: Response[404]})
            } else {
                res.status(200).send(clientes)
            }
        })
    }
    static listarClienteID(req, res){
        const id = req.params.id 
        clientes.findById(id, (erro, cliente)=> {
        if(erro){
            res.status(404).send({Mensagem: Response[404], Erro: erro.message})
        } else {
            res.status(200).send({Mensagem: Response[200], Resultado: cliente.toJSON()})
        }
    })
}
static listarClienteEmail(req,res){
    const email = req.params.email
    clientes.find({"email": `${email}`}, (erro, cliente)=>{
        if(erro){
            res.status(404).send({Mensagem: Response[404], Erro: erro.message})
        } else {
            res.status(200).send({Mensagem: Response[200], Resultado: cliente})
        }
    })
   }
    static atualizarClienteID(req, res){
        const id = req.params.id
        clientes.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (erro, cliente)=>{
            if(erro){
                res.status(500).send({Mensagem: Response[500], Erro: erro.message})
            } else {
                res.status(200).send({Mensagem: Response[200], Reusltado: cliente})
            }
        })
    }
    static atualizarClienteEmail(req, res){
        const email = req.params.email
        clientes.findOneAndUpdate({"email": `${email}`},{$set: req.body}, {new:true}, (erro, cliente)=>{
            if(erro){
                res.status(500).send({Mensagem: Response[500]})
            } else {
                res.status(200).send({Mensagem: Response[200], Resultado: cliente})
            }
        })
    }
    static excluirClienteID(req, res){
        const id = req.params.id
     clientes.findByIdAndDelete(id, (erro)=> {
         if(erro){
             res.status(500).send({Mensagem: Response[500], Erro: erro})
         } else {
             res.status(200).send({Mensagem: Response[200]})
         }
     })
    }
    static excluirClienteEmail(req,res){
        const email = req.params.email
        clientes.findOneAndDelete({"email": `${email}`}, (erro)=>{
         if(erro){
             res.status(500).send({Mensagem: Response[500], Erro: erro})
         } else {
             res.status(200).send({Mensagem: Response[200]})
         }
        })
    }
}

export default clienteController