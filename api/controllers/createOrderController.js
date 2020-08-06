"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const order = mongoose.model('orders');
exports.showOrders = (req, res) => {
    order.find({}, function (err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    });
};
exports.createOrder = function (req, res) {
    const newOrder = new order(req.body);
    newOrder.save(function (err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    });
};
exports.getOrder = function (req, res) {
    order.findById(req.params.orderId, function (err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    });
};
exports.updateOrder = function (req, res) {
    order.findOneAndUpdate({ _id: req.params.orderId }, req.body, { new: true }, function (err, orders) {
        if (err)
            res.send(err);
        res.json(orders);
    });
};
exports.deleteOrder = function (req, res) {
    order.remove({
        _id: req.params.orderId
    }, function (err, orders) {
        if (err)
            res.send(err);
        res.json({ message: 'Order successfully deleted' });
    });
};
exports.deleteOrders = function (req, res) {
    order.remove(function (err, orders) {
        if (err)
            res.send(err);
        res.json({ message: 'All orders have been been successfully deleted' });
    });
};
