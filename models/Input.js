module.exports = function(sequelize, DataTypes) {
  var Input = sequelize.define("Input", {
    input1: {
      type: DataTypes.STRING
    },
    input2: {
      type: DataTypes.STRING
    },
    input3: {
      type: DataTypes.STRING
    },
    input4: {
      type: DataTypes.STRING
    },
    input5: {
      type: DataTypes.STRING
    },
    input6: {
      type: DataTypes.STRING
    },
    input7: {
      type: DataTypes.STRING
    },
    input8: {
      type: DataTypes.STRING
    },
    input9: {
      type: DataTypes.STRING
    },
    input10: {
      type: DataTypes.STRING
    },
    input11: {
      type: DataTypes.STRING
    },
    input12: {
      type: DataTypes.STRING
    },
    input13: {
      type: DataTypes.STRING
    },
    input14: {
      type: DataTypes.STRING
    }
  });
  Input.associate = function(models) {
    Input.belongsTo(models.Wordtype);
  }
  return Input;
};
