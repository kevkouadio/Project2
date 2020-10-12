
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// POST route for saving a new order
app.post("/api/orders", function(req, res) {
    db.orders.create(req.body).then(function(dborder) {
      res.json(dborder);
    });
  });
//Get all orders
app.get("/api/orders", function(req, res) {
    db.orders.findAll({
    }).then(function(dborder) {
      res.json(dborder);
    });
  });
//delete an order
app.delete("/api/orders/:id", function(req, res) {
    db.orders.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dborder) {
      res.json(dborder);
    });
  });
}

