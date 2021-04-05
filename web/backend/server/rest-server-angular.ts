import * as express from "express";
import * as path from "path";
import { AddressInfo } from "net";
import * as handleReq from "./router-module";
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
    const {address, port} = server.address() as AddressInfo;
    console.log('Listening on %s %s', address, port);
});


   
