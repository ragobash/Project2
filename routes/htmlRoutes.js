var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("home");
  });
app.get("/quickplay", (req, res) => {
  db.Story.findAll({
    order: db.sequelize.random()
  }).then((data) => {
    var randId = data[0].dataValues.id 
    console.log(randId)
    res.redirect(`/story/${randId}`)
  })
})
app.get("/story/:storyId", function(req, res) {
  db.Wordtype.findOne({where: {id: req.params.storyId}}).then(wordType => {
    console.log(wordType.dataValues);
    var data = wordType.dataValues;

    res.render("quickPlay", {wordType: data});
  });
});

app.get("/result/:id", (req, res) => {
  db.Story.findOne({where: {id: req.params.id}}).then(story => {
    console.log(story.dataValues);
    db.Input.findAll({where: {WordtypeId: req.params.id}}).then(input => {
      console.log(input[input.length-1].dataValues);
      res.render("result", {
        story: story.dataValues,
        input: input[input.length-1].dataValues
      })
    });
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

  app.post("/story/:storyId", function(req, res) {
    var {input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14} = req.body;
    var id = req.params.storyId;
    db.Input.create({
      input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,input14,
      WordtypeId: req.params.storyId
    })
    .then(data => res.redirect(`/result/${id}`))
  });

 
};