const router = require('express').Router()

// new places
router.get('/new', (req, res) => {
  res.render('places/new')
})

// post places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
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
