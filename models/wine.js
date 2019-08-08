var mongoose = require("mongoose");

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var mySchema = mongoose.Schema(
  {
    glass: {
      winenum: { type: String, required: true },
      name: String,
      grape1: String,
      grape2: String,
      grape3: String,
      grapes: String,
      year: String,
      place: String,
      area: String,
      country: String,
      appellation: String,
      description1: String,
      description2: String,
      description3: String,
      description4: String,
      description5: String,
      description6: String,
      funfact: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Wine", mySchema);

// var Wines = mongoose.model('Wine', mySchema);

// Wines.find({}, function (err, winenum){
//   if (err) throw err;
//  console.log(winenum);
// })

// Wines.findOne({year: 'nv'}, (err,wines)=> {
//   if (err) throw err;
// console.log(wines);
// });
