import clienteController from "../controller/clienteController.js"

class RotasCliente{
    static rotas(app){  
        app.get('/cliente', (req,res)=>{
            clienteController.listarClientes(req,res)
        })
        app.get('/cliente/:email', (req, res)=>{
            clienteController.listarClienteEmail(req,res)
        })
        app.get('/cliente/id/:id', (req, res)=>{
            clienteController.listarClienteID(req, res)
        })
        app.post('/cliente', (req,res)=>{
            clienteController.cadastrarCliente(req,res)
        })
        app.put('/cliente/:email', (req, res)=>{
            clienteController.atualizarClienteEmail(req, res)
        })
        app.put('/cliente/id/:id', (req,res)=>{
            clienteController.atualizarClienteID(req, res)
        })
        app.delete('/cliente/:email', (req, res)=>{
            clienteController.excluirClienteEmail(req, res)
        })
        app.delete('/cliente/id/:id', (req, res)=>{
            clienteController.excluirClienteID(req, res)
        })
    }
}

export default RotasCliente