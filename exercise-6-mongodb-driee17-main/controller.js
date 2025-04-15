import mongoose from "mongoose"; // imports MongoDB functionalities

// for connecting and accessing database
await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// model for every data in database
const Student = mongoose.model(
  "Student",
  {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number,
  },
  "studentData"
);

// contains the Homepage
const homepage = (req, res) => {
  res.send("Exercise # 6: MongoDB");
};

// POST: save a new student in database
const saveStudent = async (req, res) => {
  // checks if there is a missing field
  if (
    req.body.stdnum === undefined ||
    req.body.fname === undefined ||
    req.body.lname === undefined ||
    req.body.age === undefined ||
    req.body.stdnum == "" ||
    req.body.fname == "" ||
    req.body.lname == "" ||
    req.body.age == ""
  ) {
    res.send({ inserted: false });
    return;
  }

  // creates a new Student object from the contents of request body
  const newStudent = new Student({
    stdnum: req.body.stdnum,
    fname: req.body.fname,
    lname: req.body.lname,
    age: req.body.age,
  });

  // saves the new entry
  try {
    await newStudent.save();
    res.send({ inserted: true });
  } catch (e) {
    res.send({ inserted: false });
  }
};

// POST: update a student's info by searching using fname
const updateStudent = async (req, res) => {
  let updateInfo = req.body; // stores the updated info
  let searchFname = req.body.search_name; // stores the fname to be searched
  if ((await Student.findOne({ fname: searchFname })) === null) {
    // checks if the student exists
    res.send("Student not found!");
  } else {
    // check if there is stdnum in body
    if (updateInfo.stdnum !== undefined) {
      await Student.updateOne(
        { fname: searchFname },
        { $set: { stdnum: updateInfo.stdnum } }
      );
    }
    // check if there is lname in body
    if (updateInfo.lname !== undefined) {
      await Student.updateOne(
        { fname: searchFname },
        { $set: { lname: updateInfo.lname } }
      );
    }
    // check if there is age in body
    if (updateInfo.age !== undefined) {
      await Student.updateOne(
        { fname: searchFname },
        { $set: { age: updateInfo.age } }
      );
    }
    // check if there is fname in body
    if (updateInfo.fname !== undefined) {
      await Student.updateOne(
        { fname: searchFname },
        { $set: { fname: updateInfo.fname } }
      );
    }
    res.send("Updated info succesfully!");
  }
};

// POST: remove a specific student based on stdnum
const removeStudent = async (req, res) => {
  // check if the student does not exist
  if ((await Student.findOne({ stdnum: req.body.stdnum })) === null) {
    res.send({ deleted: false });
    return;
  }
  try {
    await Student.deleteOne({ stdnum: req.body.stdnum });
    res.send({ deleted: true });
  } catch (e) {
    res.send({ deleted: false });
  }
};

// POST: removes all students in the database
const removeAllStudent = async (req, res) => {
  // check if there no data
  if ((await Student.find()).length == 0) {
    res.send({ deleted: false });
    return;
  }
  try {
    await Student.deleteMany({});
    res.send({ deleted: true });
  } catch (e) {
    res.send({ deleted: false });
  }
};

// GET: student's info using the student number/username
const getStudent = async (req, res) => {
  res.send(await Student.find({ stdnum: req.query.stdnum }));
};

// GET: all students' info
const getAllStudents = async (req, res) => {
  res.send(await Student.find({}));
};

// exports all functions for router.js
export {
  homepage,
  getStudent,
  getAllStudents,
  saveStudent,
  updateStudent,
  removeStudent,
  removeAllStudent,
};
