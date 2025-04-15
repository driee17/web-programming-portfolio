// import and use express as server
import express from 'express';
const app = express();

// host files inside 'static_files' folder
app.use(express.static('static_files'));

app.listen(3000);
console.log('Server started at 3000');