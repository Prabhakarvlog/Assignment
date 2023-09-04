const mongoose = require("mongoose");

const connectionString = "mongodb://0.0.0.0:27017/PlotLine";

mongoose
  .connect(connectionString, {
    useNewUrlParser:true, useUnifiedTopology:true
  }).then(() => { console.log("connected to database" )  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
