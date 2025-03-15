// Book Class: Represents a single book
class Book {
    constructor(title, author, pages, haveRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = haveRead;
    }

    toggleRead() {
        this.read = this.read === "yes" ? "no" : "yes";
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
    }
}

// Library Class: Handles book storage and modification
class Library {
    #books = [];

    get books() {
        return this.#books;
    }

    addBook(book) {
        this.#books.push(book);
    }

    deleteBook(index) {
        this.#books.splice(index, 1);
    }

    toggleBookRead(index) {
        this.#books[index].toggleRead();
    }
}

// UI Class: Handles rendering and event listeners
class UI {
    static displayBooks(library) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // Clear table before rendering

        library.books.forEach((book, index) => {
            const tableRow = document.createElement("tr");

            tableRow.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td class="spaceForButtons">
                    <button class="deleteBookButton" data-index="${index}">Delete</button>
                    <button class="changeReadButton" data-index="${index}">Toggle Read</button>
                </td>
            `;

            tbody.appendChild(tableRow);
        });

        // Attach event listeners after rendering
        document.querySelectorAll(".deleteBookButton").forEach(button =>
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                library.deleteBook(index);
                UI.displayBooks(library);
            })
        );

        document.querySelectorAll(".changeReadButton").forEach(button =>
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                library.toggleBookRead(index);
                UI.displayBooks(library);
            })
        );
    }
}

// Main Application Logic
const library = new Library();
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".closeButton");
const addBookDialog = document.querySelector(".addBookDialog");

function addBookFromForm(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const haveRead = document.querySelector('input[name="haveRead"]:checked').value;

    library.addBook(new Book(title, author, pages, haveRead));
    UI.displayBooks(library);

    dialog.close();
    form.reset();
}

// Add sample books
library.addBook(new Book("The Hobbit", "J.R.R Tolkien", 295, "yes"));
library.addBook(new Book("Harry Potter", "J.K Rowling", 301, "no"));

// Initial UI render
UI.displayBooks(library);

// Event Listeners
addBookButton.addEventListener("click", () => dialog.showModal());
closeButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});
addBookDialog.addEventListener("click", addBookFromForm);
