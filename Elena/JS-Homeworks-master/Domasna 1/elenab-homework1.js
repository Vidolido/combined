// so konsultacija od net za prompt :D

const operation = prompt('Vnesi Operacija ( +, -, *, /, % ): ');
const number1 = parseFloat(prompt('Vnesi prv broj: '));
const number2 = parseFloat(prompt('Vnesi vtor broj: '));

let result;

if ((operation == '/') && (number2 == '0')) {
    console.log('Error');
}
else if (operation === '+') {
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
}
else if (operation === '-') {
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
}
else if (operation === '*') {
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
}
else if (operation === '/') {
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
}
else if (operation === '%') {
    result = (number2 / 100) * number1;
    console.log(`${number1} + ${number2} = ${result}%`);
} 
else {
    console.log('Error')
}
