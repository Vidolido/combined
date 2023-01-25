const express = require("express");
const {studenti} = require("./handlers");

const app = express();

app.use(express.json());

app.post("/studenti", studenti);

app.listen(8080, (err) => {
    if(err) {
        return console.log(err, 'EROROT');
    }
    console.log("Serverot e uspeshno startuvan!");
});