const sqlite = require("sqlite"),
  Sequelize = require("sequelize"),
  request = require("request"),
  express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const {
  PORT = 3000,
  NODE_ENV = "development",
  DB_PATH = "./db/database.db"
} = process.env;

// ROUTES
const router = express.Router();

router.use(function(req, res, next) {
  console.log("Something is happening.");
  next();
});

router.get("/", function(req, res) {
  res.json({ message: "root response yay!" });
});

router.get("/films/:id/recommendations", function(req, res) {
  res.json({ recommendations: "recommendations go here" });
});

// app.get("/films/:id/recommendations", getFilmRecommendations);

//Register Routes
app.use("/films", router);
app.use("/films/:id/recommendations", router);

// ROUTE HANDLER
function getFilmRecommendations(req, res) {}

// START SERVER
Promise.resolve()
  .then(() =>
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
  )
  .catch(err => {
    if (NODE_ENV === "development") console.error(err.stack);
  });

module.exports = app;
