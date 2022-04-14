import hamburguers from '../model/Hamburguer.js'
import Response from '../utils/Response.js'

class HamburguersController{
   static listarHamburguers(req, res){
    hamburguers.find((erro, hamburguers)=>{
        if(erro || hamburguers.length == 0){
            res.status(404).send({Mensagem: Response[404]})
        } else {
            res.status(200).json({Mensagem: Response[200], Resultado: hamburguers})
        }
    })
   }
   static cadastrarHamburguers(req,res){
    const burguer = new hamburguers(req.body)
    burguer.save((erro)=>{
        if(erro){
        res.status(500).send({Mensagem: Response[500], Erro: erro.message})  
        } else {
            res.status(201).send({Mensagem: Response[201], Resultado: burguer.toJSON()})
        }
        
    })
   }
   static atualizarHamburguerID(req, res){
       const id = req.params.id
       hamburguers.findByIdAndUpdate(id, {$set: req.body}, (erro)=> {
           if(erro){
               res.status(500).send({Mensagem: Response[500], Erro: erro.message})
           } else {
               hamburguers.find({"nome": `${req.body.nome}`},(erro, burguer)=> {
                   if(erro){
                       res.status(500).send({Mensagem: Response[500], Erro: erro.message})
                   } else {
                      res.status(200).send(burguer) 
                   }
              })
               
           }
       })
   }
   static excluirHamburguerID(req, res){
       const id = req.params.id
    hamburguers.findByIdAndDelete(id, (erro)=> {
        if(erro){
            res.status(500).send({Mensagem: Response[500], Erro: erro})
        } else {
            res.status(200).send({Mensagem: Response[200]})
        }
    })
   }
}

export default HamburguersController