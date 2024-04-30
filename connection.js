const mongoose = require("mongoose");

async function connectToMonogoDB() {
  const mongourl = 
  mongoose
    .connect(mongourl)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("failed");
    });
}

module.exports = connectToMonogoDB;
