const express = require("express");
const routes = express.Router();
const loginController = require("../controller/loginController");

//ABRE TELA LOGIN
routes.get("/", loginController.abrelogin);
//LOGAR
routes.post("/", loginController.logar);

module.exports = routes;
