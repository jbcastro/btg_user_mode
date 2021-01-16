var Wines = require("../models/wine.js");

exports.getAll = () => {
  return Wines.find({}, (err, result) => {
    if (err) {
      return err;
    }

    // console.log(result);

    return result;
  });
};

exports.getOne = wine1 => {
  return Wines.findOne({ _id: wine1 }, (err, result) => {
    if (err) {
      return err;
    }
    console.log(result);
    return result;
  });
};

exports.addOne = (
  vinyard1,
  name1,
  grape1,

  grapes1,
  year1,
  place1,
  area1,
  country1,
  appellation1,
  description1,
  funfact1,
  timestamp1,
  price1,
  mise1,
  lastUpdated1,

  color1,
  status1,
  picture1,
  coravin1
) => {
  return Wines.create(
    {
      vinyard: vinyard1,
      name: name1,
      grape: grape1,
      grapes: grapes1,
      year: year1,
      place: place1,
      area: area1,
      country: country1,
      appellation: appellation1,
      description: description1,
      funfact: funfact1,
      timestamp: timestamp1,
      price: price1,
      mise: mise1,

      color: color1,
      status: status1,
      lastUpadted: lastUpdated1,
      picture: picture1,
      coravin: coravin1
    },
    (err, result) => {
      if (err) throw err;
      return result;
    }
  );
};

exports.killOne = wine1 => {
  return Wines.findOne({ _id: wine1 }, (err, result) => {
    if (err) throw err;

    result.remove(function(err) {
      if (err) throw err;
      //console.log(wine1);
    });
  });
};
