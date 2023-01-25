// Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj

let numbers = [7, 2, 3, 4, 12, 44, 1];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] > largest) 
  {
    largest = numbers[i];
  }
  else if (numbers[i] < smallest) 
  {
    smallest = numbers[i];
  }
}

  console.log('Najgolemiot broj e ' + largest);
  console.log('Najmaliot broj e ' + smallest);
