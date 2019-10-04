module.exports = function(sequelize, DataTypes) {
  var category = sequelize.define("category", {
    category: DataTypes.STRING,
  });
  return category;
};