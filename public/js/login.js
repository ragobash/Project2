// $(document).ready(function () {

//   var inputType;

//   // FUNCTIONS ------------------------------------------------
//   function checkInputsFields(inputType) {
//     var username = $("#userName").val().trim();
//     var password = $("#Password").val().trim();

//     if ((username.length == 0 || username.length > 30) || (password.length == 0 || password.length > 30)) {
//       $(".myPasswordField").css("background-color", "rgb(249, 61, 92)");
//       $(".myUsernameField").css("background-color", "rgb(249, 61, 92)");
//     } else {
//       $(".myPasswordField").css("background-color", "");
//       $(".myUsernameField").css("background-color", "");
//       checkDatabaseForUser(username, password, inputType);
//     }
//   }
//   function checkDatabaseForUser(username, password, inputType) {

//     var loginInfo = {
//       username: username,
//       password: password
//     }
//     if (inputType === "signup") {
//     $.get("/api/getUsers/" + username, function (data) {
//         if (data.length < 1) {
//           console.log("inserting to database");
//           insertUser({
//             username: username,
//             password: password
//           });
//         } else {
//           $(".myUsernameField").css("background-color", "rgb(249, 61, 92)");
//         }
//     });

//   } else {
//     console.log("login");
//     console.log(loginInfo);
//     $.post("/api/login", loginInfo).then(function(res) {
//     }); 
//   }
//   }

//   function insertUser(userData) {
//     $.post("/api/sign-up", userData).then();
//   }

//   // END OF FUNCTIONS ------------------------------------------------




//   // ON CLICK EVENTS ------------------------------------------------

//   $("#login").on("click", function () {
//     inputType = "login";
//     checkInputsFields(inputType);
//   });

//   $("#signup").on("click", function () {
//     event.preventDefault();
//     inputType = "signup";
//     checkInputsFields(inputType);
//   });
//   // END OF  ON CLICK EVENTS ---------------------------------------


// });