const cheap = true;

if(cheap){
    console.log('buy');
}

if(cheap){
    console.log('buy');
} else {
    console.log('don`t buy');
}

const dark = true;

dark ? console.log('turn on the lights') : console.log('turn the lights off');

const a = Math.floor(Math.random()*3);
console.log(a);

if(a === 0) {
    console.log(0);
} else if(a === 1){
    console.log(1);
} else if (a === 2) {
    console.log(2);
} else {
    console.log('other');
}

const b = Math.floor(Math.random()*5);
console.log(b);

switch (b){
    case 0:
        console.log('zero');
        break;
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('five');
        break;
}

function barks(){
    console.log('au au au');
}

barks();