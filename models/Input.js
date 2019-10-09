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
  });
  return Input;
};
