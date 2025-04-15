import needle from "needle";

needle.get(
  // GET book using isbn and author
  "http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling",
  (err, res) => {
    console.log(res.body); // prints the object if found
  }
);

needle.get(
  // GET book using author
  "http://localhost:3000/find-by-author?author=James+Clear",
  (err, res) => {
    console.log(res.body); // prints the object if found
  }
);

needle.post(
  // POST new book
  "http://localhost:3000/add-book",
  {
    // book to be added
    name: "Atomic Habits",
    isbn: "978-0735211292",
    author: "James Clear",
    year: "2018",
  },
  (err, res) => {
    console.log(res.body); // prints the server’s response if the book is successfully added or not
  }
);
