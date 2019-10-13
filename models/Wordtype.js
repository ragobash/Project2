module.exports = function(sequelize, DataTypes) {
    var Wordtype = sequelize.define("Wordtype", {
      id: {
        type: DataTypes.INTEGER,
        auto_increment: true,
        primaryKey: true
      },
      type1: {
        type: DataTypes.STRING,
        allowNull: true},
      type2: {
        type: DataTypes.STRING,
        allowNull: true},
      type3: {
        type: DataTypes.STRING,
        allowNull: true},
      type4: {
        type: DataTypes.STRING,
        allowNull: true},
      type5: {
        type: DataTypes.STRING,
        allowNull: true},
      type6: {
        type: DataTypes.STRING,
        allowNull: true},
      type7: {
        type: DataTypes.STRING,
        allowNull: true},
      type8: {
        type: DataTypes.STRING,
        allowNull: true},
      type9: {
        type: DataTypes.STRING,
        allowNull: true},
      type10: {
        type: DataTypes.STRING,
        allowNull: true},
      type11: {
        type: DataTypes.STRING,
        allowNull: true},
      type12: {
        type: DataTypes.STRING,
        allowNull: true},
      type13: {
        type: DataTypes.STRING,
        allowNull: true},
      type14: {
        type: DataTypes.STRING,
        allowNull: true}
    });
    Wordtype.associate = function(models) {
      Wordtype.hasMany(models.Input);
    };
    Wordtype.sync({ force: true }).then(function() {
      // Table created
      return Wordtype.create({
        id: 1,
        type1: "Adjective",
        type2: "Noun",
        type3: "Noun",
        type4: "Noun",
        type5: "Plural Noun",
        type6: "Person",
        type7: "Place",
        type8: "Job",
        type9: "Adjective",
        type10: "Adjective",
        type11: "Famous Person",
        type12: "Noun",
        type13: "Noun",
        type14: ""
      });
    });
    Wordtype.sync({ force: true }).then(function() {
      // Table created
      return Wordtype.create({
        id: 2,
        type1: "Name of Person in Room",
        type2: "Made Up Disease",
        type3: "Symptom",
        type4: "Silly Noun",
        type5: "Plural Noun",
        type6: "Most annoying thing that you hate",
        type7: "A name that you hate being called",
        type8: "",
        type9: "",
        type10: "",
        type11: "",
        type12: "",
        type13: "",
        type14: ""
      });
    });
    Wordtype.sync({ force: true }).then(function() {
      // Table created
      return Wordtype.create({
        id: 3,
        type1: "Body part in plural form",
        type2: "Your favorite drink",
        type3: "An action you love to do in bathroom",
        type4: " Silly Noun",
        type5: "Verb",
        type6: "Adjective",
        type7: "Name of the fruit that you hate the most",
        type8: "something you take in order to keep focusing",
        type9: "An occupation",
        type10: "Noun",
        type11: "Body part",
        type12: "",
        type13: "",
        type14: ""
      });
    });
    return Wordtype;
  };
  