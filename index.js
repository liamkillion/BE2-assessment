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

// START SERVER
Promise.resolve()
  .then(() =>
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
  )
  .catch(err => {
    if (NODE_ENV === "development") console.error(err.stack);
  });

// ROUTES
const router = express.Router();

router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});
app.use("/films", router);
app.get("/films/:id/recommendations", getFilmRecommendations);
app.post("/films", testResponse);

// ROUTE HANDLER
function getFilmRecommendations(req, res) {
  res.status(500).send("Not Implemented");
  // res.status(200).send("All Good");
  // const id = req.params.id;
  // const details = { _id: new ObjectID(id) };
  // db.collection("films").findOne(details, (err, item) => {
  //   if (err) {
  //     res.send({ error: "An error has occurred" });
  //   } else {
  //     res.send(item);
  //   }
  // });
}

function testResponse(req, res) {
  res.send("Hello");
}

module.exports = app;
