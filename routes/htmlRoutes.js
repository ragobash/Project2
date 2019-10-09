var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
      console.log(req);
  });

  //This route is served when the user clicks the "Quick Play" button and is sent to the form.
  app.get("/play", function(req, res) {
      res.render("quickPlay");
  });


  app.get("/play/result", function(req, res) {
      res.render("result");
  });

  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
