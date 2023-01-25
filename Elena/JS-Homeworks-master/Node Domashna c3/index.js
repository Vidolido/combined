const { textConverter, textStats } = require("./konverter.js");

// let orig = "rezultatot od ovoj tekst kje bide kirilichen tekst";
// let conv = textConverter("lat2cyr", orig);
// console.log(orig);
// console.log(conv);

let orig = "Тест ш ќ ж ч њ љ ѕ  ";
let conv = textConverter("cyr2lat", orig);
console.log(orig);
console.log(conv);

const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit? Phasellus a lectus at sapien fringilla interdum sed id lorem! In nec interdum leo, non imperdiet nulla. In nec interdum leo, non imperdiet nulla. In nec interdum leo, non imperdiet nulla?";

let stats = textStats(randomText);
console.log(stats);

// za doma
// 1. Da se proshiri funckionalnosta na funkcijata textConverter,
// so toa shto koga konvertirame od latinica vo kirilica,
// da se zemat vo predvid bukvite "ch", "kj", "dz" i sl.
// 2. Da se proshiri funckionalnosta na textStats,
// so toa shto kje se presmeta brojot na rechenici vo
// daden tekst (ne samo onie koi zavrshuvaat so .)