module.exports = function(sequelize, DataTypes) {
    var orders = sequelize.define("orders", {
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      order: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    return orders;
  };