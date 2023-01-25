// ??

let a = false;
let b = true;
console.log(a ?? b);

let aa;
let bb;

let res = (aa !== null & aa !== undefined) ? aa : bb;

// core moduli
// http, assert, fs, path, process, os, querystring, url...


// local moduli

// third-party moduli
// mongoose, express, angular, react...

const calculator = require("./calculator.js");

const { mnozenje, delenje } = require("./calculator.js");

console.log(calculator.sobiranje(3,4))
console.log(calculator.ostatok(3,4))
console.log(mnozenje(3,4))
console.log(delenje(10,5))

// promena na .js vo .mjs
// export function add(a,b) {return a+b}
// import { add } from "./calculator.js";

const { textConverter, textStats } = require("./konverter.js");

let orig = 'rezultatot od ovoj text kje bide kirilichen text';

let conv = textConverter("lat2cyr", orig);

console.log(orig);
console.log(conv);

let textualnos = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, dolorem?"

let stats = textStats(textualnos)

console.log(stats)