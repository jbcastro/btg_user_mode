const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
var wineMethods = require("./models/wineMethods");

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
const namezer = "matt";

app.post("/express_backend/add", (req, res, next) => {
  //not working at the moment
  wineMethods
    .addOne({
      winenum: "req.query.winenum",
      name: namezer,
      grape1: "grape1",
      grape2: "grape2",
      grape3: "grape3",
      grapes: "grapes",
      year: "year",
      place: "place",
      area: "area",
      country: "country",
      appellation: "appellation",
      description1: "description1",
      description2: "description2",
      description3: "description3",
      description4: "description4",
      description5: "description5",
      description6: "description6",
      funfact: "funfact"
    })
    .then(items => {
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});

// app.post("/express_backend/add", (req, res, next) => {
//   if (!req.body_id) {
//     let wine = new Wine({
//       winenum: req.body.winenum,
//       name: req.body.name,
//       grape1: req.body.grape1,
//       grape2: req.body.grape2,
//       grape3: req.body.grape3,
//       grapes: req.body.grapes,
//       year: req.body.year,
//       place: req.body.place,
//       area: req.body.area,
//       country: req.body.country,
//       appellation: req.body.appellation,
//       description1: req.body.description1,
//       description2: req.body.description2,
//       description3: req.body.description3,
//       description4: req.body.description4,
//       description5: req.body.description5,
//       description6: req.body.description6,
//       funfact: req.body.funfact
//     });
//     wine.save((err, newWine) => {
//       if (err) return next(err);
//       console.log(newWine);
//     });
//   } else {
//     console.log(party);
//   }
// });
