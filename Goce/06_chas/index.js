const http = require("http");

const server = http.createServer((req, res) => {
    // log vo konzola pri sekoj request
    console.log("************REQUEST************");
    console.log("URL: " + req.url);
    res.write("Zdravo od serverot!");
    console.log("************************");
    res.end();
});

server.listen(8080);