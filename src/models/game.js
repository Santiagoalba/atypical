const { Schema, model} = require('mongoose')

const GameSchema = new Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
})

module.exports = model('Game', GameSchema)