"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => res.send('Hello from Express'));
app.get('/products', (req, res) => res.send('Got a request for products'));
app.get('/reviews', (req, res) => res.send('Got a request for reviews'));
const server = app.listen(8080, "192.168.0.5", () => {
    const { address, port } = server.address();
    console.log(`Listening on ${address}:${port}`);
});
