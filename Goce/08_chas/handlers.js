const fs = require('fs');

const home = (req,res) => {
    res.send("Zdravo od Home!");
};

const calculator = (req, res) => {
    // console.log("Req operation: " + req.params.operation);
    // console.log("Req query: " + req.query);

    let result;
    switch(req.params.operation) {
        case "sobiranje":
            result = Number(req.query.a) + Number(req.query.b);
            break;
        case "odzemanje":
            result = Number(req.query.a) - Number(req.query.b);
            break;
        case "mnozenje":
            result = Number(req.query.a) * Number(req.query.b);
            break;
        case "delenje":
            result = Number(req.query.a) / Number(req.query.b);
            break;
        default:
            result = 0;
            break;
    }
    res.send(result.toString());
};

const studenti = (req, res) => {
    // console.log('Req: ', req, "Res: ", res);
    console.log("Res: ", req.body);

    fs.writeFile('./test.txt', JSON.stringify(req.body), err => {
        if(err) {
            console.log(err)
        }
        console.log('file written successfully')
    })

    res.send('success');
}

module.exports = {
    home,
    calculator,
    studenti
}