// module.exports=[{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/Thai-food.jpg'
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic:'/images/coffee-bakery.jpg'
// }]

const mongoose = require('mongoose')
//const db = require('../models')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: '/images/chia-fruit-drink.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Raleigh' },
  state: { type: String, default: 'NC' },
  founded: Number,
})
// plsceSchema.methods.showEstablished = function() {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
// }

module.exports = mongoose.model('Place', placeSchema)
