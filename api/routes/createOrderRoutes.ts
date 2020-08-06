module.exports = function(orderApp) {
  const order = require('../controllers/createOrderController')

  orderApp.get('/', (req, res) =>{
    res.send("welcome to the Order App")
  })

  orderApp.route('/order')
    .get(order.showOrders)
    .post(order.createOrder)
    .delete(order.deleteOrders)

    orderApp.route('/order/:orderId')
    .get(order.getOrder)
    .put(order.updateOrder)
    .delete(order.deleteOrder)
};