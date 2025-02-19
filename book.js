const myLibrary = [];

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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
console.log(theHobbit.info());
console.log(Book.prototype);