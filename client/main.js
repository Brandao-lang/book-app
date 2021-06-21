// const { default: axios } = require("axios")

// const { createGenre } = require("../server/controller")

const genresContainer = document.querySelector('#genre-container')
// const form = document.querySelector('form')
const firstForm = document.getElementById('1')

const baseURL = `http://localhost:4005/api/genre`
let bookNum = 1


function bookForm(id) {
    
    const booksField = document.createElement('form')
    const bookInput = document.createElement('input')
    const bookSubmit = document.createElement('button')

    bookSubmit.innerHTML = 'add book'
    booksField.appendChild(bookInput)
    booksField.appendChild(bookSubmit)
    
    document.getElementById(id).appendChild(booksField)
    
}


function genreSubmitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#genreTitle')
    let bodyObj = {
        title: title.value,
    }

    axios.post(baseURL, bodyObj)
        .then((res) => {
            console.log(res)
            let genreCard = document.createElement('div')
            genreCard.setAttribute('id', res.data.title)
            genreCard.innerHTML = `<button onclick="bookForm('${res.data.title}')">Click Me</button> <span>${res.data.title}</span>`
            genresContainer.appendChild(genreCard)
            bookNum++
            }
                )
    title.value = ''
}


firstForm.addEventListener('submit', genreSubmitHandler)

