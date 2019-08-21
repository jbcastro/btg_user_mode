const express = require("express");
const app = express();
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

app.get("/delete", (req, res, next) => {
  wineMethods
    .killOne(req.query.winenum)
    .then(items => {
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});

app.get("/get", (req, res, next) => {
  wineMethods
    .getOne(req.query.epnum)
    .then(items => {
      res.send({ express: items });
    })
    .catch(err => {
      return next(err);
    });
});
