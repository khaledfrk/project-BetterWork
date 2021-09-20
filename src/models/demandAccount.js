const {ObjectID} = require('mongodb')
const mongoose = require('mongoose')

const demandAccountSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const DemandAccount = mongoose.model('DemandAccount', demandAccountSchema)

module.exports = DemandAccount