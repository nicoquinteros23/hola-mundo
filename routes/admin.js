const express = require("express");
const routerAdmin = express.Router();

 routerAdmin.get("/", (req, res) => {
   res.send("peticion get de admin recibida");
 });
 
 routerAdmin.post("/", (req, res) => {
   res.send("peticion post de admin recibida");
 });
 
 routerAdmin.put("/editar", (req, res) => {
   res.send("peticion put de admin recibida");
 });
 
 routerAdmin.delete("/", (req, res) => {
   res.send("peticion delete de admin recibida");
 });

module.exports = routerAdmin;