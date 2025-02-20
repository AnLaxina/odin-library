const myLibrary = [];

const main = document.querySelector("main");
const addBookButton = document.querySelector(".addBook");
const dialog = document.querySelector("dialog");

// Cool object constructor for book
// But why do we use the function keyword man...
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = haveRead;
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook);
}

function displayBooksToPage(booksList) {
    const tbody = document.querySelector("tbody");
    for (let i = 0; i < booksList.length; i++) {
        const tableRow = document.createElement("tr");

        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const haveRead = document.createElement("td");

        title.textContent = booksList[i].title;
        author.textContent = booksList[i].author;
        pages.textContent = booksList[i].pages;
        haveRead.textContent = booksList[i].read;

        tbody.appendChild(tableRow);
        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(haveRead);

    }
}

function createDialogBox() {
    dialog.showModal();

}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, true);
addBookToLibrary("Harry Potter", "J.K Rowling", 301, true);
displayBooksToPage(myLibrary);

addBookButton.addEventListener("click", createDialogBox);