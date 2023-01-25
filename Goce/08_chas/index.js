const express = require("express");

const {home} = require("./handlers");

const app = express();

app.get("/", (req, res) => {
    res.send("Zdravo od get pochetna!");
});

app.post("/", (req, res) => {
    res.send("Zdravo od post pochetna!");
});

app.get("/home", home);

app.get("/calc/:operation");


app.use("/mid", (req,res,next) => {
    console.log("before mid");
    next();
});

app.all("/mid", (req,res, next) => {
    res.send("/mid called");
    next();
});
app.use("/mid", (req,res, next) => {
    console.log("/mid after");
    next();
});

app.use(express.json());

app.listen(8080, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Serverot e uspeshno startuvan!");
});