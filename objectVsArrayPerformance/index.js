const {performance} = require('perf_hooks');

const obj = {};
const array = [];

function randomString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomNumbers = (amountOfNumbers, min, max) => {
    const numbers = [];
    for (let i=0; i<amountOfNumbers; i++) {
        numbers.push(randomNumber(min, max));
    }
    return numbers;
}

for (let i = 0; i < 50000; i++) {
    const val = randomString(10);
    obj[val] = val;
    array.push(val);
}
const numbers = getRandomNumbers(5000, 0, 50000);


let start = performance.now();
for (let i=0; i<numbers.length; i++) {
    const val = i in obj;
}
let end = performance.now();
console.log("i in obj perfomance");
console.log(end-start);




start = performance.now();
for (let i=0; i<numbers.length; i++) {
    const val = obj[i];
}
end = performance.now();
console.log("obj[i] perfomance");
console.log(end-start);



start = performance.now();
for (let i=0; i<numbers.length; i++) {
    const val = array.includes(i);
}
end = performance.now();
console.log("array include perfomance");
console.log(end-start);
