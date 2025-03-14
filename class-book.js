class Book {
    constructor(title, author, pages, haveRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.haveRead}`;
    }
}

class Library {
    #currentLibrary;

    constructor() {
        this.#currentLibrary = currentLibrary;
    }

    get currentLibrary() {
        return this.#currentLibrary;
    };

    addBookToLibrary(bookObject) {
        this.#currentLibrary.push(bookObject);
    }

    printCurrentBooks() {
        for (const book of this.#currentLibrary) {
            console.log(book.info());
        }
    }

    deleteBook(indexOfBook) {
        this.#currentLibrary.splice(indexOfBook, 1);
    }
}

class DOMManager {
    constructor() {
        console.log("DOM Manager created!");
        this.form = document.querySelector("form");
        this.main = document.querySelector("main");
        this.addBookButton = document.querySelector(".addBook");
        this.closeButton = document.querySelector(".closeButton");
        this.dialog = document.querySelector("dialog");
        this.addBookDialog = document.querySelector(".addBookDialog");

        this.library = new Library();
    }

    displayBooksToPage(booksList) {
        const tbody = document.querySelector("tbody");
        tbody.textContent = "";
        for (let i = 0; i < booksList.length; i++) {
            const tableRow = document.createElement("tr");

            const title = document.createElement("td");
            const author = document.createElement("td");
            const pages = document.createElement("td");
            const haveRead = document.createElement("td");
            const deleteButtonSpace = document.createElement("td");
            deleteButtonSpace.classList.add("spaceForButtons");


            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            deleteButton.classList.add("deleteBookButton");
            deleteButton.textContent = "Delete Book";
            deleteButton.addEventListener("click", function () {
                deleteBook(i);
            });

            const changeReadButton = document.createElement("button");
            changeReadButton.setAttribute("type", "button");
            changeReadButton.classList.add("changeReadButton");
            changeReadButton.textContent = "Change read status";
            changeReadButton.addEventListener("click", () => changeRead(i));

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
            deleteButtonSpace.appendChild(changeReadButton);
            tableRow.appendChild(deleteButtonSpace);
        }
    }

    addBookToTable(event) {
        // In order to check if the user checked every input 
        // we first get the form itself and check if it's filled
        if (!this.form.checkValidity()) {
            // Shows the required form messages
            this.form.reportValidity();
            // exit the function since the forms are not filled
            return;
        }
        // Retrieve the form's fields
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const pages = document.getElementById("pages");
        const haveRead = document.querySelector('input[name="haveRead"]:checked');

        bookToAdd = new Book(title.value, author.value, pages.value, haveRead.value);
        this.library.addBookToLibrary(bookToAdd);

        event.preventDefault();
        dialog.close();
        displayBooksToPage(this.library.currentLibrary());
    }
}

newBook = new Book("Chicken", "Doggy", 100, true);
newBook1 = new Book("Man", "Doggy", 100, true);
newBook2 = new Book("Hot", "Doggy", 100, true);

const currentLibrary = []
newLibrary = new Library();
newLibrary.addBookToLibrary(newBook);
newLibrary.addBookToLibrary(newBook1);
newLibrary.addBookToLibrary(newBook2);
newLibrary.printCurrentBooks();
