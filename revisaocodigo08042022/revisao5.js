const myNumbers = [1, 2, 3, 10, 20, 30, 100];

console.log(myNumbers);

myNumbers.forEach(number => console.log('number: '+ number));

myNumbers.map(number => console.log(number));
const bigNumbers = myNumbers.map(number => {
    return number * 10;
})
console.log(bigNumbers);

const smallNumbers = myNumbers.map(number => {
    return number / 10;
})

console.log(smallNumbers);

const unevenNumbers = myNumbers.filter(number => {
    return (number % 2 === 1)
})

console.log(unevenNumbers);

const reducing = myNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(reducing);

console.log(myNumbers.join(' - '))

const reverseArray = arr => {
    let reversed = [];
    for(let i = arr.length-1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
}

console.log(reverseArray(myNumbers))

const shoutTheNumber = arr => {
    for(let i = 0; i < arr.length; i++){
        console.log('the number is: '.toUpperCase() + arr[i] + '!')
    }
}

shoutTheNumber(myNumbers)

const putOneMore = arr => {
    let withOne = [];
    for(let i = 0; i < arr.length; i++){
        withOne.push(1 + arr[i])
    }
    console.log(withOne)
}

putOneMore(myNumbers)

const plussTwo = arr => {
    let withTwo = [];
    arr.forEach(number => withTwo.push(2 + number));
    console.log(withTwo)
}

plussTwo(myNumbers)

const smallestPowerOfTwo = arr => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        number = arr[i];
        let j = 1;
        while(j < number){
            j = j*2;
        }
        result.push(j);
    }
    return result;
}

console.log(smallestPowerOfTwo(myNumbers))

const divide = (number) => {
    console.log(number/2);
}
const divideEverything = arr =>{
    arr.forEach(divide);
}

divideEverything(myNumbers);

const putFive = num => num + 5;
const putFiveHere = arr => arr.map(putFive);
console.log(putFiveHere(myNumbers));

const multiplyByTwo = arr => arr.map(number => number*2);
console.log(multiplyByTwo(myNumbers));

const justEquals = (arrOne, arrTwo) => arrOne.filter(number => arrTwo.includes(number));
console.log(justEquals(myNumbers, unevenNumbers));

const areAllEven = arr => arr.every(number => (number%2) === 0);
console.log(areAllEven(myNumbers));