const sum = function (a, b){
    const result = a+b;
    return result;
}

console.log(sum(Math.floor(Math.random()*10), Math.floor(Math.random()*10)));

const multy = (a, b) => {
    const result = a*b;
    return result;
}

console.log(multy(Math.floor(Math.random()*10), Math.floor(Math.random()*10)));

const squareNum = num => num*num;
console.log(squareNum(5));

const array = [];
array[0] = 1;
console.log(array);
console.log(array.length);
array.push(2);
console.log(array);

for(let i = 0; i < 5; i++){
    console.log(i);
}

for(let i = 5; i >= 0; i--){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    for(let j = 5; j >= 0; j--){
        console.log('i = ' + i + ' j = ' + j);
    }
}

let counter = 1;

while (counter < 5) {
    console.log(counter);
    counter++;
}
console.log('------------------------------------------')
let iNeed = 5;
let iHave = 0;

do{
    iHave++
    console.log(iHave)
}while(iHave<iNeed);

const animals = ['Dog', 'Cat', 'Turtle'];

for(const animal of animals){
    console.log(animal);
}

const myNameIs = 'Thatiana';

for(const letter of myNameIs){
    console.log(letter);
}

const removeIt = [1, 2, 3, 'me', 'you', 'us'];

for (const remove of removeIt){
    if(remove === 'me'){
        continue;
    }console.log(remove);
}

