const {ObjectID} = require('mongodb')
const mongoose = require('mongoose')

const debtorSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Employee'  
    },
    amount: {
        type: Number,
        required: true
    },
    remain: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

const Debtor = mongoose.model('Debtor', debtorSchema)
module.exports = Debtor