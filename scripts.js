let myLibrary = [];

function Book(title, author, pages, read){
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

function displayBook(){
    let table = `<table class="books"><tr><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th></tr>`
    for(let book in myLibrary){
        const rowHtml = `<tr><td>${myLibrary[book].title}</td><td>${myLibrary[book].author}</td><td>${myLibrary[book].pages}</td><td>${myLibrary[book].read ? "already read." : "not read yet."}</td></tr>`
        table += rowHtml
    }
    table += "</table>"
    return table
}


addBookToLibrary(new Book("harry", "jk", 500, true))
console.log(displayBook())
const bookTable = document.querySelector(".book-table")
bookTable.innerHTML = displayBook();