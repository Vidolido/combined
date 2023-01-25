// textConverter
const textConverter = (type, text) => {
    const conversionMap = {
        џ: "dzh",
        ѓ: "gj",
        ж: "zh",
        ѕ: "dz",
        љ: "lj",
        њ: "nj",
        ќ: "kj",
        ч: "ch",
        ш: "sh",
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        з: "z",
        и: "i",
        ј: "j",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "h",
        ц: "c",
    };

    for (let c in conversionMap)
    {
        let regex;
         switch (type) {
            case 'lat2cyr':
                regex = new RegExp(`${conversionMap[c]}`, 'g');
                text = text.replace(regex, c);
                break;
            case 'cyr2lat':
                regex = new RegExp(`${c}`, 'g');
                text = text.replace(regex, conversionMap[c]);
                break;
         }
    }

    return text;
};

// textStats
const textStats = (text) => {
    if(typeof text !== "string") return;

    let rezObj = {
        bukvi: 0,
        zborovi: 0,
        rechenici: 0,
        gt5: 0,
        lt5: 0,
        eq5: 0
    };

    // bukvi
    rezObj.bukvi = text.length;
    rezObj.zborovi = text.split(" ").length;
    const re = /[.!?]/;
    const numOfSentences = text.split(re);
    rezObj.rechenici = numOfSentences.length - 1;

    return rezObj;
};

module.exports = {
    textConverter,
    textStats
};