import HamburguersController from "../src/controller/hamburguersController.js"

class RotasHambuguer{
    static rotas(app){
        app.get('/hamburguer', (req, res)=>{
            HamburguersController.listarHamburguers(req, res)
         })
         app.post('/hamburguer', (req, res)=> {
            HamburguersController.cadastrarHamburguers(req,res)
         })
         app.put('/hamburguer/:id', (req,res)=>{
            HamburguersController.atualizarHamburguerID(req,res)
         })
         app.delete('/hamburguer/:id', (req,res)=>{
            HamburguersController.excluirHamburguerID(req,res)
         })
    }
}

export default RotasHambuguer