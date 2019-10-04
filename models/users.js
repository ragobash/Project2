module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define("users", {
      user_name: DataTypes.STRING,
      pw_hash: DataTypes.STRING,
    });
    return users;
  };