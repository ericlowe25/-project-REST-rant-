const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({name: 'Coding Cat Cafe'})

    // Create fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing!'
    })

    // Add comment to place's comment array
    place.comments.push(comment.id)

    // Save place now that it has comment
    await place.save()

    // Exit the program
    process.exit()
}

seed()