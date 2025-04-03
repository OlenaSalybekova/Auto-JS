import Book from "./Book.js";
class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this.fileFormat = fileFormat;
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Format is empty.");
    }
    this._fileFormat = value;
  }
  printInfo() {
    console.log(
      `Book: "${this.name}", Author: "${this.author}", Year: "${this.year}"`,
    );
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error("Object should be part of Book");
    }
    return new EBook(book.name, book.author, book.year, fileFormat);
  }
}

const ebook1 = new EBook("The Gemini", "Richard Steinberg", 2016, "PDF");
ebook1.printInfo();
const ebook2 = EBook.fromBook(ebook1, "PDF");
ebook2.printInfo();
export default Book;
