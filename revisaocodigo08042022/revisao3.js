let cat = {
    skin: 'fur',
    weight: 15,
    color: 'red',
    makeSound: function(){
        console.log('meow');
    },
    weightMark () {
        console.log(this.weight)
    }
}

console.log(cat.skin);
console.log(cat.weight);
console.log(cat.color);
console.log('-------------------------------------------------');
cat.weightMark();
console.log('-------------------------------------------------');

cat.color = 'white';
console.log(cat.color);
delete cat.skin;
console.log(cat);
cat.makeSound();

let phones = {
    samsung: {
        color: 'blue',
        model: 123,
        fastCharge: true
    },
    iPhone: {
        color: 'silver',
        model: 234,
        fastCharge: false
    },
    xiaomi: {
        color: 'black',
        model: 345,
        fastCharge: true
    },
}

console.log(phones.iPhone);
console.log(phones);

let changeCharger = obj => {
    obj.fastCharge = true;
}

console.log(phones.iPhone);
changeCharger(phones.iPhone);
console.log(phones.iPhone);

for (let phone in phones) {
    console.log(phones[phone].color)
}