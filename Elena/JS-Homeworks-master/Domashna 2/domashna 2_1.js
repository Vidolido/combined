// Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza.
// Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza

let names = ["Elena","Martin","Petar","Maja"];
 let animals = ["Dog","Cat","Bird","Fish"];
 let namesAnimals = [];
 let j = 0;
 let k = 0;
    for (let i = 1; i <= (names.length + animals.length) ; i++) {
       if( i % 2 !== 0)
       {
          namesAnimals.push(names[j]);
          j = j + 1;
       } else {
          namesAnimals.push(animals[k]);
          k = k + 1;
       }
    }
    console.log(namesAnimals)