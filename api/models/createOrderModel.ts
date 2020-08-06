import mongoose, { Schema} from "mongoose"

const Schema = mongoose.Schema;


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

module.exports = mongoose.model('orders', orderSchema);
