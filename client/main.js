// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

// const { createGenre } = require("../server/controller")

// const form = document.querySelector('form')

const genresContainer = document.querySelector('#genre-container')

const firstForm = document.getElementById('1')

const baseURL = `http://localhost:4005/api/genre`
const baseURLTWO = `http://localhost:4005/api/books`
let bookNum = 1


function bookForm(id) {

    const booksField = document.createElement('form')
    const bookInput = document.createElement('input')
    bookInput.setAttribute('id', 'bookName')
    const bookSubmit = document.createElement('button')
    // bookSubmit.setAttribute('class', id)
    bookSubmit.innerHTML = 'add book'
    booksField.appendChild(bookInput)
    booksField.appendChild(bookSubmit)

    document.getElementById(id).appendChild(booksField)
    booksField.addEventListener('submit', bookAdder)
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
            // genreCard.innerHTML = `<button onclick="bookForm('${res.data.title}')">Click Me</button> <span>${res.data.title}</span>`
            genreCard.innerHTML = `<span>${res.data.title}</span> <button onclick="bookForm('${res.data.title}')">Open</button>`
            genresContainer.appendChild(genreCard)
            bookNum++
        }
        )
    title.value = ''
}


function bookAdder(e) {
    e.preventDefault()
    console.log(e.target)
    console.log('hello!!!')

    let bookName = document.querySelector('#bookName')
    let bookObj = {
        bookName: bookName.value
    }

    axios.post(baseURLTWO, bookObj)
        .then((res) => {
            console.log(res)
            console.log(res.data.title)
            console.log('testest')
            let name = document.createElement('p')
            name.textContent = bookName.value
            genresContainer.appendChild(name)

        })
}




firstForm.addEventListener('submit', genreSubmitHandler)



