"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleReq = void 0;
const express = require("express");
let router = express.Router();
const products = [
    { id: 0, title: "First Product2", price: 24.99 },
    { id: 1, title: "Second Product3", price: 64.99 },
    { id: 2, title: "Third Product4", price: 74.99 }
];
class HandleReq {
    getAllProducts(req, res) {
        res.json(this.getProducts());
    }
    getProductById(req, res) {
        res.json(products.find(prod => prod.id == parseInt(req.params.id)));
    }
    getProducts() {
        return products;
    }
}
exports.HandleReq = HandleReq;
