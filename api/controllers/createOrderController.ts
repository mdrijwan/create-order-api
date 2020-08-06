import * as mongoose from "mongoose";

const order = mongoose.model('orders');

exports.showOrders = (req, res) => {
    order.find({}, function(err, orders) {
        if (err)
        res.send(err);
        res.json(orders)
    })
};

exports.createOrder = function(req, res) {
    const newOrder = new order(req.body);
    newOrder.save(function(err, orders) {
        if (err)
        res.send(err);
        res.json(orders)
    })
};

exports.getOrder = function(req, res) {
    order.findById(req.params.orderId, function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };

  exports.updateOrder = function(req, res) {
    order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function(err, orders) {
      if (err)
        res.send(err);
      res.json(orders);
    });
  };

  exports.deleteOrder = function(req, res) {
    order.remove({
      _id: req.params.orderId
    }, function(err, orders) {
      if (err)
        res.send(err);
      res.json({ message: 'Order successfully deleted' });
    });
  };

  exports.deleteOrders = function(req, res) {
    order.remove(function(err, orders) {
      if (err)
        res.send(err);
      res.json({ message: 'All orders have been been successfully deleted' });
    });
  };