const router = require('express').Router()
//const router = require('../models')
const db = require('../models')
// const res = require('express/lib/response')
// const places = require('../models/places.js')

// GET NEW places
router.get('/', (req, res) => {
  // res.render('places/index', {places})
  // res.send('GET /places stub')
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// POST NEW: places
router.post('/', (req, res) => {
  // //console.log(req.body)
  // if (!req.body.pic) {
  //   // Default image if one is not provided
  //   req.body.pic = 'http://placekitten.com/400/400'
  // }
  // if (!req.body.city) {
  //   req.body.city = 'Anytown'
  // }
  // if (!req.body.state) {
  //   req.body.state = 'USA'
  // }
  // places.push(req.body)
  // if (req.body.pic === '') {req.body.pic = undefined}
  // if (req.body.city === '') {req.body.city = undefined}
  // if (req.body.state === '') {req.body.state = undefined}
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places');
  })
  .catch(err => {
    if(err && err.name === 'ValidationError'){
      let message = 'Validation Error:'
      for(var field in err.errors){
        message+= `${field} was ${err.errors[field].value}.`
        message+= `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', {message})
    }
    else{
      res.render('error404');
    }
  })
})

//  GET NEW: places
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET SHOW: show places ID
router.get('/:id', (req,res) =>{
  // let id = Number(req.params.id);
  //    if(isNaN(id)){
  //    res.render('error404')
  //  }
  //  else if(!places[id]){
  //    res.render('error404')
  //  }
  //  else{
  //    res.render('places/show', {place: places[id], id})
  // res.send('GET /places/:id stub')
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch (err => {
    console.log('err', err)
    res.render('error404')
  }) 
})

// Get EDIT places  
router.get('/:id/edit', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // }
  // else if (!places[id]) {
  //     res.render('error404')
  // }
  // else {
  //   res.render('places/edit', { place: places[id] })
    // res.send('GET /:id/edit stub')
    db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', {place})
    })
    .catch(err => {
      res.render('error404')
    })
})

// PUT edit places
router.put('/:id', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //     res.render('error404')
  // }
  // else if (!places[id]) {
  //     res.render('error404')
  // }
  // else {
  //     // Dig into req.body and make sure data is valid
  //     if (!req.body.pic) {
  //         // Default image if one is not provided
  //         req.body.pic = 'http://placekitten.com/400/400'
  //     }
  //     if (!req.body.city) {
  //         req.body.city = 'Anytown'
  //     }
  //     if (!req.body.state) {
  //         req.body.state = 'USA'
  //     }

  //     // Save the new data into places[id]
  //     places[id] = req.body
  //     res.redirect(`/places/${id}`)
  //     res.send('PUT /:id stub')
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`);
  })
  .catch(err => {
    res.render('error404');
  })
})

// DELETE places
router.delete('/:id', (req, res) => {
  // let id = Number(req.params.id)
  // if (isNaN(id)) {
  //   res.render('error404')
  // }
  // else if (!places[id]) {
  //   res.render('error404')
  // }
  // else {
  //   places.splice(id, 1)
  //   res.redirect('/places')
  //    res.send('DELETE /places/:id stub')
  db.Place.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/places');
  })
  .catch(err => {
    res.render('error404');
  })
  })

// Comments
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

//delete comment from place
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
        .then(() => {
            console.log('Success')
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            res.render('error404')
        })
})


// router.post('/:id/rant', (req, res) => {
//   res.send('GET /places/:id/rant stub')
// })

// router.delete('/:id/rant/:rantId', (req, res) => {
//     res.send('GET /places/:id/rant/:rantId stub')
// })


module.exports = router

