const httpProxy = require("express-http-proxy");

const mid = require("../middlewares/proxy")();

const userServiceProxy = httpProxy("http://localhost:3001");
const productsServiceProxy = httpProxy("http://localhost:3002");

module.exports = app => {
  app.get("/users", (req, res, next) => {
    userServiceProxy(req, res, next);
  });

  // app.get("/products", mid.auth, mid.autenticacao, (req, res, next) => {
  //     productsServiceProxy(req, res, next);
  //     console.log('Produtos!');
  // });
};
