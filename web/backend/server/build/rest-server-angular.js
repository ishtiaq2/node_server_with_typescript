"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const handleReq = require("./router-module");
let handle_req = new handleReq.HandleReq();
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/api/products', (req, res) => {
    handle_req.getAllProducts(req, res);
});
app.get('/api/products/:id', (req, res) => {
    handle_req.getProductById(req, res);
});
const server = app.listen(8080, "192.168.0.5", () => {
    const { address, port } = server.address();
    console.log('Listening on %s %s', address, port);
});
