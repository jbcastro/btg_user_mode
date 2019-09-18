var Wines = require("../models/wine.js");

exports.getAll = () => {
  return Wines.find({}, (err, result) => {
    if (err) {
      return err;
    }

    console.log(result);

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
  winenum1,
  name1,
  grape11,
  grape21,
  grape31,
  grapes1,
  year1,
  place1,
  area1,
  country1,
  appellation1,
  description11,
  description21,
  description31,
  description41,
  description51,
  description61,
  funfact1,
  timestamp1,
  price1,
  mise1
) => {
  return Wines.create(
    {
      winenum: winenum1,
      name: name1,
      grape1: grape11,
      grape2: grape21,
      grape3: grape31,
      grapes: grapes1,
      year: year1,
      place: place1,
      area: area1,
      country: country1,
      appellation: appellation1,
      description1: description11,
      description2: description21,
      description3: description31,
      description4: description41,
      description5: description51,
      description6: description61,
      funfact: funfact1,
      timestamp: timestamp1,
      price: price1,
      mise: mise1
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
