// for simulating requests
import needle from "needle";

/* CREATE 5 DIFFERENT STUDENTS INCLUDING Mary Jane Watson */
// Student 1
needle.post(
  "http://localhost:3000/save-student",
  { stdnum: "53256453123", fname: "Mary Jane", lname: "Watson", age: 25 },
  (err, res) => {
    console.log(res.body);
  }
);
// Student 2
needle.post(
  "http://localhost:3000/save-student",
  { stdnum: "202005459", fname: "Blashnel", lname: "Revilla", age: 23 },
  (err, res) => {
    console.log(res.body);
  }
);
// Student 3
needle.post(
  "http://localhost:3000/save-student",
  { stdnum: "202002461", fname: "Adrian", lname: "Cueto", age: 21 },
  (err, res) => {
    console.log(res.body);
  }
);
// Student 4
needle.post(
  "http://localhost:3000/save-student",
  { stdnum: "12356352123", fname: "Peter", lname: "Parker", age: 19 },
  (err, res) => {
    console.log(res.body);
  }
);
// Student 5
needle.post(
  "http://localhost:3000/save-student",
  { stdnum: "8051495845", fname: "Juan", lname: "Dela Cruz", age: 18 },
  (err, res) => {
    console.log(res.body);
  }
);

/* UPDATE lname of 'Mary Jane Watson' to 'Parker' */
needle.post(
  "http://localhost:3000/update",
  { search_name: "Mary Jane", lname: "Parker" }, // search_name contains the fname to be searched, user can input any fields that are needed to be updated
  (err, res) => {
    console.log(res.body);
  }
);

// for checking the remove-user endpoint
needle.post(
  "http://localhost:3000/remove-user",
  { stdnum: "8051495845" },
  (err, res) => {
    console.log(res.body);
  }
);

// for checking the remove-all-user endpoint
needle.post("http://localhost:3000/remove-all-user", {}, (err, res) => {
  console.log(res.body);
});

// for checking the searching of a user using stdnum
needle.get("http://localhost:3000/user?stdnum=8051495845", (err, res) => {
  console.log(res.body);
});

// for viewing all data in the database
needle.get("http://localhost:3000/members", (err, res) => {
  console.log(res.body);
});
