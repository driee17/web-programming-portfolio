import { appendFileSync, readFileSync } from "node:fs"; // appends information to a file
import express from "express";

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const book_array = load_books(); // stores the current list of books

function load_books() {
  // load contents of books.txt to the list of books
  const books = [];
  var data = readFileSync("books.txt", { encoding: "utf8", flag: "r" });
  var book_list = data.split("\n"); // splits the file per line

  for (let i = 0; i < book_list.length - 1; i++) {
    // array for creating a new object per book
    var new_book = {};
    var book_info = book_list[i].split(",");
    new_book.name = book_info[0];
    new_book.isbn = book_info[1];
    new_book.author = book_info[2];
    new_book.year = book_info[3];
    books.push(new_book); // add new book to array
  }
  return books; // return list of books
}

function save_book(book_array, book) {
  // for adding books to file
  for (let i = 0; i < book_array.length; i++) {
    // checks if the book has no conflicting isbn with the other books
    if (book_array[i].isbn == book.isbn) {
      return { success: false };
    }
  }

  if (
    // checks if book contents is empty
    book.name == "" ||
    book.isbn == "" ||
    book.author == "" ||
    book.year == ""
  ) {
    return { success: false };
  }

  // adds book to the file
  try {
    appendFileSync(
      "books.txt",
      `${book.name},${book.isbn},${book.author},${book.year}\n`
    );
    book_array.push(book); // adds book to the current book list
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

function findBook_isbn_author(book_array, author, isbn) {
  // for finding books using isbn and author
  for (let i = 0; i < book_array.length; i++) {
    if (book_array[i].isbn == isbn && book_array[i].author == author) {
      return book_array[i];
    }
  }
  return "Book not found.";
}

function findBook_author(book_array, author) {
  // for finding books using author only
  for (let i = 0; i < book_array.length; i++) {
    if (book_array[i].author == author) {
      return book_array[i];
    }
  }
  return "Book not found.";
}

// GET: find book using isbn and author
app.get("/find-by-isbn-author", (req, res) => {
  const book = findBook_isbn_author(
    book_array,
    req.query.author,
    req.query.isbn
  );
  res.send(book);
});

// GET: find book using author
app.get("/find-by-author", (req, res) => {
  const book = findBook_author(book_array, req.query.author);
  res.send(book);
});

// POST: add new book
app.post("/add-book", (req, res) => {
  const add_status = save_book(book_array, req.body);
  res.send(add_status);
});

// starts the server
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
