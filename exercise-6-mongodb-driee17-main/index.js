/* Adrian B. Cueto  
2020-02461
CMSC 100 Exer 6: MongoDB
*/

import express from "express"; // for using express.js
const app = express();

// for post function
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import router from "./router.js"; // import the router function
router(app);

// initiate server
app.listen(3000);
console.log("Server started at port 3000.");
