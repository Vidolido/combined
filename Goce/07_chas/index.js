const http = require("http");
const fs = require("fs");
const url = require("url");

const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data)
        });
    });
};

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace("{{res}}", data);
};

const pages = {
    "/": async (req, res) => {
        let content = await fileRead("./index.html");
        // content.replace("{{res}}", "test data");
        res.end(content);
    },
    "/sobiranje": async (req,res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`;
        // res.end(result);
        res.end(await render("index", result));
    },
    "/odzemanje": async (req,res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`;
        // res.end(result);
        res.end(await render("index", result));
    },
    "/mnozenje": async (req,res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`;
        // res.end(result);
        res.end(await render("index", result));
    },
    "/delenje": async (req,res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`;
        // res.end(result);
        res.end(await render("index", result));
    },
}

const server = http.createServer((req,res) => {
    let [path, other] = req.url.split("?");
    // console.log("URL: " + req.url);
    // console.log("Path: " + path);

    if(pages[path]) {

        const qs = url.parse(req.url, true).query;
        // console.log(qs);
        req.query = qs;
        pages[path](req,res);

    } else {
        console.log('err');
        res.end("NEVALIDNA OPERACIJA");
    }
});

server.listen(8080);