app.post("/express_backend/add", (req, res) => {
  var small = new Wines({
    winenum: req.body.winenum,
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
    funfact: req.body.funfact
  });
  small.save(err => {
    if (err) return handleError(err);
  });
  if (!req.body._id) {
    Wines.create(
      {
        winenum: req.body.winenum,
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
        funfact: req.body.funfact
      },
      err => {
        if (err) return handleError(err);
      }
    );
  }
});

app.post("/express_backend/add/", (req, res, next) => {
  // find & update existing item, or add new
  if (!req.body._id) {
    // insert new document
    let wine = new Wine({
      winenum: req.body.winenum,
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
      funfact: req.body.funfact
    });
    wine.save((err, newWine) => {
      if (err) return next(err);
      console.log(newWine);
      res.json({ updated: 0, _id: newWine._id });
    });
  } else {
    // update existing document
    Wine.updateOne(
      { _id: req.body._id },
      {
        winenum: req.body.winenum,
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
        funfact: req.body.funfact
      },
      (err, result) => {
        if (err) return next(err);
        res.json({ updated: result.nModified, _id: req.body._id });
      }
    );
  }
});

app.post("/express_backend/add", (req, res) => {
  if (!req.body._id) {
    Wines.updateOne(
      {
        winenum: req.body.winenum,
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
        funfact: req.body.funfact
      },
      req.body,
      { upsert: true },
      (err, result) => {
        console.log(result);
        // res.json({ update: 0, _id: newWine._id });
        // res.render('added', {result: req.body});
      }
    );
  } else {
    Wines.updateOne(
      {
        winenum: req.body.winenum,
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
        funfact: req.body.funfact
      },
      req.body,
      { upsert: true },
      (err, result) => {
        console.log(result);
        // res.json({ update: 0, _id: newWine._id });
        // res.render('added', {result: req.body});
        res.json({ updated: result.nModified, _id: req.body._id });
      }
    );
  }
});
