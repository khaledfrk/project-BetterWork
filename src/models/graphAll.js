const mongoose = require('mongoose')
const {ObjectID} = require('mongodb')

const graphAllSchema = new mongoose.Schema({
  spendings: {
    type: Number,
    required: true,
    default: 0
  },  
  budgetValues: [{
        type: Object,
        properties: {
          value: { type: Number },
          date: { type: Date },
        },
        required: ["value", "date"]
    }]
})

const GraphAll = mongoose.model('GraphAll', graphAllSchema)

module.exports = GraphAll