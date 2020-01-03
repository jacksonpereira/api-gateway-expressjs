const listPerm = require('../config/listaAutho')();

module.exports = () => {

    return {
        autenticacao: function (req, res, next) {
            console.log('Autenticado!');
            next();
        },

        authoUsers: function (req, res, next) {
            if (listPerm.usuarios.indexOf(req.hostname) >= 0) {
                console.log('Autorizado a se comunicar com o serviço!');
                next();
            } else {
                return res.status(401).json({
                    message: "Requisição não autorizada para o serviço de Usuários"
                });
            }
        },

    };
}