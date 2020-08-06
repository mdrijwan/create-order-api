"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const orders = require('./api/models/createOrderModel');
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost/hoteldb');
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const routes = require('./api/routes/createOrderRoutes');
routes(app);
app.listen(port);
console.log('The CreateOrder-API server started on: ' + port);
app.use((req, res) => {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});
