// import na fs
const fs = require("fs");

// studenti handler funckija
const studenti = (req, res) => {
    fs.writeFileSync('studenti.txt', JSON.stringify(req.body));
    res.send('Data saved in studenti.txt');
};


module.exports = {
    studenti,
};