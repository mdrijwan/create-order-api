import express from "express"
import mongoose from "mongoose"

const app = express()
const port = process.env.PORT || 3000
const orders = require('./api/models/createOrderModel')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hoteldb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./api/routes/createOrderRoutes');
routes(app);

app.listen(port);

console.log('The CreateOrder-API server started on: ' + port);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
