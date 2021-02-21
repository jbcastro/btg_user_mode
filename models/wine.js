var mongoose = require("mongoose");
var connec = require("./connection");

var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));

var connectionString = connec.connectionString2;
mongoose.connect(connectionString, { useNewUrlParser: true });

var mySchema = mongoose.Schema(
  {
    // winenum: { type: String },
    // _id: { type: Number },
    name: { type: String, require: true },
    vinyard: { type: String },
    grape: [String],
    grapes: { type: String },
    year: { type: String },
    place: { type: String },
    area: { type: String },
    country: { type: String },

    appellation: { type: String },
    description: [String],

    funfact: { type: String },
    timestamp: { type: Date },
    price: { type: Number },
    mise: { type: String },
    lastUpdated: { type: Date },

    color: { type: String },
    status: { type: String },
    picture: { type: String },
    coravin: { type: Boolean }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("wines", mySchema);
