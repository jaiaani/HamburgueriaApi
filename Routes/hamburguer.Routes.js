import HamburguersController from "../src/controller/hamburguersController.js"

class RotasHambuguer {
    static rotas(app) {
        app.get('/hamburguer', (req, res) => {
            HamburguersController.listarHamburguers(req, res)
        })
        app.get('/hamburguer/id/:id', (req, res)=>{
            HamburguersController.listarHamburguerID(req,res)
        })
        app.get('/hamburguer/:nome', (req,res)=>{
            HamburguersController.listarHamburguerNome(req,res)
        })
        app.post('/hamburguer', (req, res) => {
            HamburguersController.cadastrarHamburguers(req, res)
        })
        
        app.put('/hamburguer/id/:id', (req, res) => {
            HamburguersController.atualizarHamburguerID(req, res)
        })
        app.put('/hamburguer/:nome', (req, res)=>{
            HamburguersController.atualizarHamburguerNome(req, res)
        })
        app.delete('/hamburguer/id/:id', (req, res) => {
            HamburguersController.excluirHamburguerID(req, res)
        })
        app.delete('/hamburguer/:nome', (req,res)=>{
            HamburguersController.excluirHamburguerNome(req, res)
        })
        
    }
}

export default RotasHambuguer