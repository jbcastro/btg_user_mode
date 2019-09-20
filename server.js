const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
var wineMethods = require("./models/wineMethods");
var Wines = require("./models/wine");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.get("/express_backend", (req, res, next) => {
  wineMethods
    .getAll()
    .then(items => {
      // res.sendFile("home", { wines: JSON.stringify(items) });
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});

app.get("/express_backend/get/", (req, res, next) => {
  wineMethods
    .getOne(req.query._id)
    .then(items => {
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});

app.get("/express_backend/delete", (req, res, next) => {
  wineMethods
    .killOne(req.query._id)
    .then(items => {
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});

app.post("/express_backend/add", (req, res) => {
  // const
  if (!req.body._id) {
    let small = new Wines({
      _id: req.body._id,
      // winenum: req.body.winenum,
      name: req.body.name,
      grape1: req.body.grape1,
      grape2: req.body.grape2,
      grape3: req.body.grape3,
      grapes: req.body.grapes,
      year: req.body.year,
      place: req.body.place,
      area: req.body.area,
      country: req.body.country,
      appellation: req.body.appellation,
      description1: req.body.description1,
      description2: req.body.description2,
      description3: req.body.description3,
      description4: req.body.description4,
      description5: req.body.description5,
      description6: req.body.description6,
      funfact: req.body.funfact,
      timestamp: Date.now(),
      price: req.body.price,
      mise: req.body.mise,
      added: req.body.added,
      removed: req.body.removed
    });
    small.save((err, newWine) => {
      if (err) return handleError(err);
      res.json({ updated: 0, _id: newWine._id });
    });
  } else {
    Wines.updateOne(
      {
        _id: req.body._id
      },
      {
        // winenum: req.body.winenum,
        name: req.body.name,
        grape1: req.body.grape1,
        grape2: req.body.grape2,
        grape3: req.body.grape3,
        grapes: req.body.grapes,
        year: req.body.year,
        place: req.body.place,
        area: req.body.area,
        country: req.body.country,
        appellation: req.body.appellation,
        description1: req.body.description1,
        description2: req.body.description2,
        description3: req.body.description3,
        description4: req.body.description4,
        description5: req.body.description5,
        description6: req.body.description6,
        funfact: req.body.funfact,
        price: req.body.price,
        timestamp: Date.now(),
        mise: req.body.mise,
        added: req.body.added,
        removed: req.body.removed
      },
      (err, result) => {
        if (err) return next(err);
        res.json({ updated: result.nModified, _id: req.body._id });
      }
    );
  }
});
