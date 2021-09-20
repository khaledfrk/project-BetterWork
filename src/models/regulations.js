const mongoose = require('mongoose')

const regDocumentSchema = new mongoose.Schema({                                                                                                                                                                                                                                                   
    link: {
        type: String,
        required: true
    },
})

const RegDocument = mongoose.model('RegDocument', regDocumentSchema)

module.exports = RegDocument