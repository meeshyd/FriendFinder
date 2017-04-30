// dependencies
var express = require("express");
var bodyParser = require("body-parser");
// Express config
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//server routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
