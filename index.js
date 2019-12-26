var http = require("http");
const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const helmet = require("helmet");

const proxyController = require('./controllers/proxy');

// Proxy request
proxyController(app);

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

var server = http.createServer(app);
console.log("API Gateway ouvindo na porta 3000!");
server.listen(3000);