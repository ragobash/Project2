module.exports = function(sequelize, DataTypes) {
    var Wordtype = sequelize.define("Wordtype", {
      type1: DataTypes.STRING,
      type2: DataTypes.STRING,
      type3: DataTypes.STRING,
      type4: DataTypes.STRING,
      type5: DataTypes.STRING,
      type6: DataTypes.STRING,
      type7: DataTypes.STRING
    });
    Wordtype.sync({ force: true }).then(function() {
      // Table created
      return Wordtype.create({
        type1: "Name",
        type2: "Number",
        type3: "Verb ending with -ing",
        type4: "Verb ending with -ing",
        type5: "Silly noun",
        type6: "and action that you really hate doing",
        type7: "cat name"
      });
    });
    return Wordtype;
  };
  