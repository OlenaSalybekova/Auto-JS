import Book from "./Book.js";
import EBook from "./EBook.js";
const book1 = new Book("Harry Potter", "Joanne Rowling", 1998);
const book2 = new Book("The Gemini Man", "Richard Steinberg", 2019);
const ebook1 = new EBook("The Gemini", "Richard Steinberg", 2015, "PDF");
const ebook2 = new EBook("Harry Potter2", "Joanne Rowling", 2001, "PDF");
const books = [book1, book2, ebook1, ebook2];
console.log(books);
const oldestBook = Book.findOldestBook(books);
console.log(
  `Oldest book: "${oldestBook.name}", "${oldestBook.author}", "${oldestBook.year}"`,
);
