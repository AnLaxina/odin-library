const myLibrary = [];
const form = document.querySelector("form");


const main = document.querySelector("main");
const addBookButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".closeButton");
const dialog = document.querySelector("dialog");
const addBookDialog = document.querySelector(".addBookDialog");

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
    tbody.textContent = "";
    for (let i = 0; i < booksList.length; i++) {
        const tableRow = document.createElement("tr");

        const title = document.createElement("td");
        const author = document.createElement("td");
        const pages = document.createElement("td");
        const haveRead = document.createElement("td");
        const deleteButtonSpace = document.createElement("td");


        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.classList.add("deleteBookButton");
        deleteButton.textContent = "Delete Book";
        deleteButton.addEventListener("click", function () {
            deleteBook(i);
        });

        title.textContent = booksList[i].title;
        author.textContent = booksList[i].author;
        pages.textContent = booksList[i].pages;
        haveRead.textContent = booksList[i].read;

        tbody.appendChild(tableRow);
        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(haveRead);
        deleteButtonSpace.appendChild(deleteButton);
        tableRow.appendChild(deleteButtonSpace);

    }
}

function addBookToTable(event) {
    // In order to check if the user checked every input 
    // we first get the form itself and check if it's filled
    if (!form.checkValidity()) {
        // Shows the required form messages
        form.reportValidity();
        // exit the function since the forms are not filled
        return;
    }
    // Retrieve the form's fields
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const haveRead = document.querySelector('input[name="haveRead"]:checked');

    addBookToLibrary(title.value, author.value, pages.value, haveRead.value);

    event.preventDefault();
    dialog.close();
    displayBooksToPage(myLibrary)
}

function deleteBook(indexOfBook) {
    myLibrary.splice(indexOfBook, 1);
    displayBooksToPage(myLibrary);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "yes");
addBookToLibrary("Harry Potter", "J.K Rowling", 301, "no");
displayBooksToPage(myLibrary);

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

addBookDialog.addEventListener("click", addBookToTable);
addBookDialog.addEventListener("click", () => {
    form.reset();
});