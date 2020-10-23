const mongoosePaginate = require('mongoose-paginate-v2')
const { Decimal128 } = require('bson')
const { Schema, model } = require('mongoose')

const CoachSchema = new Schema ({
    name: {type: String , required: true},
    surname: {type: String , required: true},
    ign: {type: String , required: true},
    description: {type: String , required: true},
    game: {type: String , required: true},
    price: {type: Decimal128, required: true},
    img: {type: String, required: true},
    // imgType: {type: String, required:true},
    // imglogo: {type: Buffer, required: true},
    // imglogoType: {type: String, required: true}
}
)

CoachSchema.plugin(mongoosePaginate)

module.exports = model('Coach', CoachSchema)