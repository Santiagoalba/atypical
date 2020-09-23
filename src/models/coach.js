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

// CoachSchema.virtual('imgPath').get(function() {
//     if (this.img != null && this.imgType != null) {
//       return console.log(`data:${this.imgType};charset=utf-8;base64,${this.img.toString('base64')}`)
//     }
//   })

// CoachSchema.virtual('imglogoPath').get(function() {
//     if (this.imglogo != null && this.imglogoType != null) {
//       return `data:${this.imglogoType};charset=utf-8;base64,${this.imglogo.toString('base64')}`
//     }
//   })

module.exports = model('Coach', CoachSchema)