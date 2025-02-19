// Cool object constructor for book
// But why do we use the function keyword man...
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = haveRead;

    this.info = () => `${title} by ${author}, ${pages} pages, read: ${haveRead}`;
}

Book.prototype.info = () => "You choose, Spider-Man!";

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
console.log(theHobbit.info());
console.log(Book.prototype);