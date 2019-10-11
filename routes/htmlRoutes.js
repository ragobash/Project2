var db = require("../models");

module.exports = function(app) {
 // Load index page
 app.get("/", function(req, res) {
   res.render("home");
 });
 // Load result page here
   app.get("/output", function(req, res) {
     db.Input.findAll({}).then(output => {
       db.Story.findAll({where: {}}).then(storyOutput => {
           res.render("result", {
             firstPhrase: storyOutput[storyOutput.length-1].phrase1,
             secondPhrase: storyOutput[storyOutput.length-1].phrase2,
             thirdPhrase: storyOutput[storyOutput.length-1].phrase3,
             fourthPhrase: storyOutput[storyOutput.length-1].phrase4,
             fifthPhrase: storyOutput[storyOutput.length-1].phrase5,
             sixthPhrase: storyOutput[storyOutput.length-1].phrase6,
             seventhPhrase: storyOutput[storyOutput.length-1].phrase7,
             firstInput: output[output.length-1].input1,
             secondInput: output[output.length-1].input2,
             thirdInput: output[output.length-1].input3,
             fourthInput: output[output.length-1].input4,
             fifthInput: output[output.length-1].input5,
             sixthInput: output[output.length-1].input6,
             seventhInput: output[output.length-1].input7
         });
       });
     });
   });
 //display form with required type of word
 app.get('/quickplay', function(req, res) {
   db.Wordtype.findAll({}).then(wordType => {
     res.render("quickplay", {
       type1: wordType[wordType.length-1].type1,
       type2: wordType[wordType.length-1].type2,
       type3: wordType[wordType.length-1].type3,
       type4: wordType[wordType.length-1].type4,
       type5: wordType[wordType.length-1].type5,
       type6: wordType[wordType.length-1].type6,
       type7: wordType[wordType.length-1].type7
     })
 });
});
 // Input random words
 app.post('/quickplay', function(req, res) {
   var {input1, input2, input3, input4, input5, input6, input7} = req.body;
   //insert into table
   db.Input.create({
     input1,
     input2,
     input3,
     input4,
     input5,
     input6,
     input7
   })
   .then(input => res.redirect('/output'))
   .catch(err => console.log(err));
 });
 // Load example page and pass in an example by id
 app.get("/example/:id", function(req, res) {
   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
     res.render("example", {
       example: dbExample
     });
   });
 });

   //FOR LOGIN SYSTEM LATER DOWN THE ROAD MAP -------

//  app.get("/login", function(req, res) {
//   res.render("login");
//  });

  //FOR LOGIN SYSTEM LATER DOWN THE ROAD MAP -------

 
 // Render 404 page for any unmatched routes
 app.get("*", function(req, res) {
   res.render("404");
 });
};