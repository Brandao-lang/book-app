const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

// app.get('/api/books', ctrl.getBooks)
// app.delete('api/books/:id', ctrl.deleteBook)
app.post('/api/genre', ctrl.createGenre)
app.post('/api/books', ctrl.createBook)
// app.put('/api/books/:id', ctrl.updateBook)

app.listen(4005, () => {
    console.log('We are live on port 4005')
})