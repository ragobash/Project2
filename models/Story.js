module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    id: {
      type: DataTypes.INTEGER,
      auto_increment: true,
      primaryKey: true
    },
    phrase1: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase2: {
        type: DataTypes.STRING,
        allowNull: true},
    phrase3: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase4: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase5: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase6: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase7: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase8: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase9: {
        type: DataTypes.STRING,
        allowNull: true},
    phrase10: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase11: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase12: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase13: {
      type: DataTypes.STRING,
      allowNull: true},
    phrase14: {
      type: DataTypes.STRING,
      allowNull: true}
  });

  
  Story.sync({ force: true }).then(function() {
    // Table created
    return Story.create({
      id: 1,
      phrase1: "I enjoy long ",
      phrase2: " walks on the beach, getting ",
      phrase3: " in the rain and serendipitous encounters with ",
      phrase4: ". I really like piña coladas mixed with ",
      phrase5: " and romantic, candle-lit ",
      phrase6: ". I am well-read from Dr. Seuss to ",
      phrase7: ". I travel frequently, especially to ",
      phrase8: " when I am not busy with work. (I am a ",
      phrase9: "). I am looking for ",
      phrase10: " and beauty in the form of a ",
      phrase11: " goddess. She should have the physique of ",
      phrase12: " and the ",
      phrase13: " of ",
      phrase14: "."
    });
  });
  Story.sync({ force: true }).then(function() {
    // Table created
    return Story.create({
      id: 2,
      phrase1: "Dear School Nurse: \n",
      phrase2: " will not be attending school today. He/she has come down with a case of ",
      phrase3: " and has horrible ",
      phrase4: " and a fever. We have made an appointment with the ",
      phrase5: " doctor, who studied for many years in ",
      phrase6: " and has a degree in ",
      phrase7: ". He will send you all the information you need. Thank you! Sincerely Mrs. ",
      phrase8: "."
    });
  });
  Story.sync({ force: true }).then(function() {
    // Table created
    return Story.create({
      id: 3,
      phrase1: "In order to wash your face, you must wet your ",
      phrase2: " in warm ",
      phrase3: ". Then, ",
      phrase4: " it across your face 2 times. This will wash off any remaining ",
      phrase5: ". When you are done you should ",
      phrase6: " the cloth in ",
      phrase7: " water to clean it. You should also wash your face with a ",
      phrase8: " to keep it smooth and shiny. Don`t worry. It is normal to experience ",
      phrase9: " the first time you try this. Consult your ",
      phrase10: " if you break out in ",
      phrase11: ". This works well on your ",
      phrase12: " too!"
    });
  });

  return Story;
};
