const mongoose = require('mongoose')

const {MONGODB_HOST, MONGODB_DATABASE} = process.env
MONGODB_URL = `mongodb://localhost:27017/atypicaldb`

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));

  module.exports = MONGODB_URL