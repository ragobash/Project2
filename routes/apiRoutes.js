var db = require("../models");

module.exports = function (app) {
  //Using this to test DB responses.
  app.get("/api/all", function (req, res) {
    db.libs.findAll({}).then(function (DBAllLibs) {
      res.json(DBAllLibs);
    });
  });

  //This route is served when the user clicks the submit button in the form.
  app.post("/play/submit", function (req, res) {
    console.log(res.body);
    db.libs.create(req.body).then(function (DBCreateLib) {

    });
  });
};