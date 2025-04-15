import {
  homepage,
  getStudent,
  getAllStudents,
  saveStudent,
  updateStudent,
  removeStudent,
  removeAllStudent,
} from "./controller.js"; // import all functionalities

const router = (app) => {
  // router for all endpoints
  app.get("/", homepage);
  app.post("/save-student", saveStudent);
  app.post("/update", updateStudent);
  app.post("/remove-user", removeStudent);
  app.post("/remove-all-user", removeAllStudent);
  app.get("/user", getStudent);
  app.get("/members", getAllStudents);
};

export default router; // exports router to be used in index.js
