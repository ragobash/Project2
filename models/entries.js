module.exports = function(sequelize, DataTypes) {
    var entries = sequelize.define("entries", {
      author_id: DataTypes.INTEGER,
      lib_id: DataTypes.INTEGER,
      phrase_1: DataTypes.STRING,
      phrase_2: DataTypes.STRING,
      phrase_3: DataTypes.STRING,
      phrase_4: DataTypes.STRING,
      phrase_5: DataTypes.STRING,
      phrase_6: DataTypes.STRING,
      phrase_7: DataTypes.STRING,
      phrase_8: DataTypes.STRING,
      phrase_9: DataTypes.STRING,
      phrase_10: DataTypes.STRING,
      phrase_11: DataTypes.STRING,
      phrase_12: DataTypes.STRING,
      phrase_13: DataTypes.STRING,
      phrase_14: DataTypes.STRING,
      phrase_15: DataTypes.STRING,
    });
    return entries;
  };