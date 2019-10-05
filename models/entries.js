module.exports = function (sequelize, DataTypes) {
  var entries = sequelize.define("entries", {
    author_id: DataTypes.INTEGER,
    lib_id: DataTypes.INTEGER,
    phrase_1: { type: DataTypes.STRING, allowNull: true },
    phrase_2: { type: DataTypes.STRING, allowNull: true },
    phrase_3: { type: DataTypes.STRING, allowNull: true },
    phrase_4: { type: DataTypes.STRING, allowNull: true },
    phrase_5: { type: DataTypes.STRING, allowNull: true },
    phrase_6: { type: DataTypes.STRING, allowNull: true },
    phrase_7: { type: DataTypes.STRING, allowNull: true },
    phrase_8: { type: DataTypes.STRING, allowNull: true },
    phrase_9: { type: DataTypes.STRING, allowNull: true },
    phrase_10: { type: DataTypes.STRING, allowNull: true },
    phrase_11: { type: DataTypes.STRING, allowNull: true },
    phrase_12: { type: DataTypes.STRING, allowNull: true },
    phrase_13: { type: DataTypes.STRING, allowNull: true },
    phrase_14: { type: DataTypes.STRING, allowNull: true },
    phrase_15: { type: DataTypes.STRING, allowNull: true },
  });
  return entries;
};