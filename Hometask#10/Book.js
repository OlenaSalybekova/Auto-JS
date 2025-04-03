class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
  printInfo() {
    console.log(
      `Book: "${this.name}", Author: "${this.author}", Year: "${this.year}"`,
    );
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Empty field!");
    }
    this._name = value;
  }
  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error(" Author field is empty!");
    }
    this._author = value;
  }
  get year() {
    return this._year;
  }
  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Year should be positive!");
    }
    this._year = value;
  }
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Empty.");
    }
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest,
    );
  }
}
const book1 = new Book("Harry Potter", "Joanne Rowling", 1998);
const book2 = new Book("The Gemini Man", "Richard Steinberg", 2019);
book1.printInfo();
book2.printInfo();

export default Book;
