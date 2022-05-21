const router = require('express').Router()
const places = require('../models/places.js')

// get places
router.get('/', (req, res) => {
  res.render('places/index', {places})
})

// post new places
router.post('/', (req, res) => {
  //console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
// new places
router.get('/new', (req, res) => {
  res.render('places/new')
})

// get places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-food.jpg'
       // pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic:'/images/coffee-bakery.jpg'
       // pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})


module.exports = router
