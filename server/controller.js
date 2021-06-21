const books = require('./db.json')
const genres = require('./dbgenre.json')
let globalId = 1

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books)
    },

    createGenre: (req, res) => {
        const {title} = req.body
        const index = genres.findIndex((genre) => {genre.title === title})
        console.log(genres)

        if (index != -1) {
            res.status(400).send('genre section already exists')
        } else if (!title) {
            res.status(400).send('missing fields')
        } else {
            const newGenre = {
            id: globalId,
            title: title,
        }
            globalId++
            genres.push(newGenre)
            res.status(200).send(newGenre)
        }
    }
}