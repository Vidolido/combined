// za doma
// 1. da se kreira ruta POST /studenti:
// * da mozhe do nea da se isprati JSON
// {
//     "ime": "trajko",
//     "prezime": "trajkoski",
//     "prosek": 7.7
// }
// * otkako handler-ot (handler funkcijata) kje gi primi podatocite, da gi zapishje vo .txt file

// import na express
const express = require("express");

// import na handlers
const handlers = require("./handlers");

// kreiranje na express app
const app = express();

// activate the JSON (req.body) middleware/plugin
// za site ruti, ne specificirame konkretna
app.use(express.json());


// dodavanje nova POST /studenti:
app.post("/studenti", handlers.studenti); // studenti handler funkcijata e definirana vo ./handlers.js

// startuvanje na serverot
app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Serverot e uspeshno startuvan!");
});

