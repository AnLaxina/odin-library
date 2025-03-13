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
    constructor(currentLibrary) {
        this.currentLibrary = currentLibrary;
    }

    addBookToLibrary(bookObject) {
        this.currentLibrary.push(bookObject);
    }

    printCurrentBooks() {
        for (const book of this.currentLibrary) {
            console.log(book.info());
        }
    }
}

newBook = new Book("Chicken", "Doggy", 100, true);
newBook1 = new Book("Man", "Doggy", 100, true);
newBook2 = new Book("Hot", "Doggy", 100, true);

const currentLibrary = []
newLibrary = new Library(currentLibrary);
newLibrary.addBookToLibrary(newBook);
newLibrary.addBookToLibrary(newBook1);
newLibrary.addBookToLibrary(newBook2);
newLibrary.printCurrentBooks();
