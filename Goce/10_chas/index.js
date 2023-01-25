// express

const express = require("express");

const app = express();

app.set("view engine", "ejs");

// GET / 
//
app.get("/", (req,res) => {
    res.render("index"); // views/index.ejs
});
//

// GET /podatoci/:ime
//
app.get("/podatoci/:ime", (req,res) => {
    let data = {
        ime: req.params.ime,
        studenti: [
            { first_name: "Goran", last_name: "Goranovski" },
            { first_name: "Janko", last_name: "Jankovski" },
            { first_name: "Stanko", last_name: "Stankovski" },
            { first_name: "Stanka", last_name: "Stankovska" },
            { first_name: "Janka", last_name: "Jankovska" },
            { first_name: "Trajko", last_name: "Trajkovski" },
            { first_name: "Petko", last_name: "Petkovski" }
        ]
    };
    res.render("podatoci", data);

});
//

// GET /formular
//
app.get("/formular", (req,res) => {
    res.render("formular"); // views/forumal.ejs
})
//

app.use(express.urlencoded({extended: true }));

// POST /formular-rezultat
//
app.post("/formular-rezultat", (req, res) => {
    let data = {
        ime: req.body.ime,
        prezime: req.body.prezime
    }
    res.render("formular-rezultat", data); // views/formular-rezultat.ejs
})
//

// inicijalizcija na serverot
app.listen(8080, err => {
    if(err) return console.log(err);
    console.log("Serverot slusha na porta 8080!")
});