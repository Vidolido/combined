// Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

let elementsA = [6, "Maja", 15, 6, "Elena", "Maja", 13, 9, 11, 9, 15];
let index = 0 
let newarr = [];

for (let i = 0; i < elementsA.length; i++) 
{
    for (let j = i + 1; j < elementsA.length; j++) 
    {
        if (elementsA[i] === elementsA[j]) 
        {
            newarr[index] = elementsA[i];
            index++;
        }
    }
}
console.log('Ima dupli elementi: ' + newarr)