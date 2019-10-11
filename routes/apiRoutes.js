var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });


  //FOR LOGIN SYSTEM LATER DOWN THE ROAD MAP -------

  // app.post("/api/sign-up", function(req, res) {
  //   db.users.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // app.post("/api/login", function(req, res) {
  //   db.users.findAll({
  //     where: {
  //       username: req.body.username
  //     }
  //   }).then(function(dbData) {
  //     if(req.body.username === dbData[0].username && req.body.password === dbData[0].password) {
  //       console.log("Logging in!");
  //     } else {
  //         console.log("nope!")
  //     }
  //   });
  // });

  // app.get("/api/getUsers/:username", function(req, res) {
  //   db.users.findAll({
  //     where: {
  //       username: req.params.username
  //     }
  //   }).then(function(data) {
  //       res.json(data);
  //   })
  // });

  //FOR LOGIN SYSTEM LATER DOWN THE ROAD MAP -------

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
