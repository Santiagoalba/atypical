
var faker = require('faker')
var Coach = require('../models/coach')
const mongoose = require("mongoose");
const MONGODB_URL = require("../database"); //get your mongoose string
//create your array. i inserted only 1 object here
const seedNumber = 20
const coachs = []
const games = [ "valorant", "rocket league", "league", "starcraft", "dota 2", "ssb", "overwatch", "pubg"]


function seed (gameName) {
    for (let i = 0; i < seedNumber; i++) {
        coachs.push(
            new Coach({
                name: faker.name.findName(),
                surname: faker.name.lastName(),
                ign: faker.lorem.word(),
                description: faker.lorem.words(12),
                game: gameName,
                price: faker.random.number({min:10, max:100}),
                img: 'profile.jpg'
            })
        )
    }
}
games.forEach(game => {
    seed(game)
});


//connect mongoose
mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to " + `${MONGODB_URL}` + " in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
coachs.map(async (coach, index) => {
  await coach.save((err, result) => {
    if (index === coachs.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});










      
    


