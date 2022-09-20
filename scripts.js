let myLibrary = [];
let myBookClasLibrary = []

function functionBook(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read ? "already read." : "not read yet."}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function deleteBook(id){
    myLibrary.splice(id, id+1)
}

class Book{
    #title
    #author
    #pages
    #read

    constructor(title, author, pages, read){
        this.#title = title
        this.#author = author
        this.#pages = pages
        this.#read = read 
    }

    get title() {
        return this.#title
    }

    get author() {
        return this.#author
    }

    get pages() {
        return this.#pages
    }

    get read() {
        return this.#read
    }

    set read(value) {
        // if (typeof(value) == "boolean"){
        //     this.#read = value
        //     return true
        // }
        // return false
        this.#read = value
    }

    readText(){
        return this.#read  ? "already read" : "not read yet"
    }
}

function displayBook() {
    let table = `<table class="books"><tr><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th></th></tr>`
    for(let book in myLibrary){
        const rowHtml = 
            `<tr>
                <td>${myLibrary[book].title}</td>
                <td>${myLibrary[book].author}</td>
                <td>${myLibrary[book].pages}</td>
                <td><button type="button" class="toggle-read" id="${book}" onclick="toggleRead(${book})">${myLibrary[book].readText()}</button></td>
                <td><button type="button" class="delete-book" id="${book}" onclick="removeBookFromTable(${book})")>Delete</button></td>
            </tr>`
        table += rowHtml
    }
    table += "</table>"
    return table 
}


function displayFunctionBook(){
    let table = `<table class="books"><tr><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th></th></tr>`
    for(let book in myLibrary){
        const rowHtml = 
            `<tr>
                <td>${myLibrary[book].title}</td>
                <td>${myLibrary[book].author}</td>
                <td>${myLibrary[book].pages}</td>
                <td><button type="button" class="toggle-read" id="${book}" onclick="toggleRead(${book})">${myLibrary[book].read ? "already read." : "not read yet."}</button></td>
                <td><button type="button" class="delete-book" id="${book}" onclick="removeBookFromTable(${book})")>Delete</button></td>
            </tr>`
        table += rowHtml
    }
    table += "</table>"
    return table
}

