var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
      console.log(req);
  });

  // Load example page and pass in an example by id
  app.get("/play", function(req, res) {
    
      res.render("example");
  });

  app.get("/play/result", function(req, res) {
    res.render("result");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
