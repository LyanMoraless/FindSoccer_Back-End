const Modelo = require('../framework/Modelo')

class Local extends Modelo {
    static arquivo = 'local.json';

    nome = '';
    username = '';
    endereco = {
        rua: "",
        numero: "",
        quadra: "",
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        estado: "",
        cidade: ""
    };
    fone = '';
    horarios = [];
    descricao = '';
}

module.exports = Local;