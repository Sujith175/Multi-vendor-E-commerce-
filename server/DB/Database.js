const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose.connect(process.env.DB_URL, {}).then((data) => {
    console.log(`MongoDb connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatabse;
