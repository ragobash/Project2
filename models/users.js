module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      username: DataTypes.STRING(30),
      password: DataTypes.STRING(30),
    });
    return users;
  };
  