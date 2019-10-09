module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      phrase1: DataTypes.STRING,
      phrase2: DataTypes.STRING,
      phrase3: DataTypes.STRING,
      phrase4: DataTypes.STRING,
      phrase5: DataTypes.STRING,
      phrase6: DataTypes.STRING,
      phrase7: DataTypes.STRING
    });
    Story.sync({ force: true }).then(function() {
      // Table created
      return Story.create({
        phrase1: "My name is ",
        phrase2: ". I'm ",
        phrase3: " years old. I like ",
        phrase4: " and ",
        phrase5: " in my freetime. I'm attending ",
        phrase6: " bootcamp. If you like what I'm doing, ",
        phrase7: " me on Instagram @"
      });
    });
    return Story;
  };
  