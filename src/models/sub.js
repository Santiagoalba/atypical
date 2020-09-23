const { Schema, model} = require('mongoose')

const SubSchema = new Schema ({
    email: {
        type: String, 
        required:true
    }
})

module.exports = model('Sub', SubSchema)