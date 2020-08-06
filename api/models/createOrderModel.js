"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const orderSchema = new Schema({
    hotelId: {
        type: String,
        required: 'Kindly enter the Hotel ID'
    },
    hotelName: {
        type: String
    },
    checkIn: {
        type: Date,
        default: Date.now
    },
    checkOut: {
        type: Date
    },
    customerName: {
        type: String,
        required: `Kindly enter Customer's Name`
    },
    customerEmail: {
        type: String
    },
    customerContact: {
        type: String,
        required: `Kindly enter Customer's Name`
    },
    roomId: {
        type: String,
        required: 'Kindly enter the Room ID'
    },
    roomName: {
        type: String
    },
    numberOfGuests: {
        type: Number
    },
    totalAmount: {
        type: Number
    },
});
module.exports = mongoose_1.default.model('orders', orderSchema);
