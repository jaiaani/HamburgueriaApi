class Mensagem {
    constructor(httpCode, httpStatus, mensagem, dados){
        this.httpCode = httpCode,
        this.httpStatus = httpStatus,
        this.mensagem = mensagem,
        this.dados = dados,
        this.time = new Date().toLocaleDateString()
    }
}
export default Mensagem