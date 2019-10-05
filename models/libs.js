module.exports = function(sequelize, DataTypes) {
    var libs = sequelize.define("libs", {
      category_id: DataTypes.INTEGER,
      completeLib: {type: DataTypes.STRING, allowNull: false},
    });
    return libs;
  };