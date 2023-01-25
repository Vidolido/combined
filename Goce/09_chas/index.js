const express = require("express");

//handlers
const handlers = require("./handlers");

const app = express();


// middlewere
app.use(express.json());

// routes/endpoints
// post /studenti -> dodava 
app.post("/studenti", handlers.addStudent);

// get /studenti -> gi vrakja site studenti
app.get("/studenti", handlers.getAllStudents);

// get /studenti/:id -> vrakja eden student
app.get("/studenti/:id", handlers.getStudentById);
// put /studenti/:id -> azurira student so id

// delete /studenti/:id -> brishenje na student so id



app.listen(8080, err => {
    if(err) return console.log(err);
    console.log("Server started on port 8080");
});