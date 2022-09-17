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

function deleteBook(id){
    myLibrary.splice(id, id+1)
}

function displayBook(){
    let table = `<table class="books"><tr><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th></th></tr>`
    for(let book in myLibrary){
        const rowHtml = 
            `<tr>
                <td>${myLibrary[book].title}</td>
                <td>${myLibrary[book].author}</td>
                <td>${myLibrary[book].pages}</td>
                <td>${myLibrary[book].read ? "already read." : "not read yet."}</td>
                <td><button type="button" class="delete-book" id="${book}" onclick="removeBookFromTable(${book})")>Delete</button></td>
            </tr>`
        table += rowHtml
    }
    table += "</table>"
    return table
}

