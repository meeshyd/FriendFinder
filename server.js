// dependencies
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path")

// Express config
const app = express();
let PORT = process.env.PORT || 8080;

// BodyParser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('app/public/'));

//server routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
