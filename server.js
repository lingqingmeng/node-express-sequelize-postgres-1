const express = require("express");
const bodyParser = require("body-parser"); 
const OAuth2Server = require('oauth2-server');
const Request = OAuth2Server.Request,
const Response = OAuth2Server.Response;
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// >>>>>>>>>>>>>>>>>>>>
// parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());  /* bodyParser.json() is deprecated */
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
// ====================
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// <<<<<<<<<<<<<<<<<<<<
app.oauth = new OAuth2Server({
  model: require('./model.js'),
  accessTokenLifetime: 60 * 60,
  allowBearerTokensInQueryString: true
}); // this may need bodyParser
const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Decentral tutorial application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function obtainToken(req, res) {
  var request = new Request(req);
  var response = new Response(res);
  return app.oauth.token(request, response)
    .then(function(token) {
      res.json(token);
    }).catch(function(err) {
      res.status(err.code || 500).json(err);
    });
}

function authenticateRequest(req, res, next) {
  var request = new Request(req);
  var response = new Response(res);
  return app.oauth.authenticate(request, response)
    .then(function(token) {
      next();
    }).catch(function(err) {
      res.status(err.code || 500).json(err);
    });
}
