let candy = {
    color: 'pink',
    flavor: 'strawberry',
    get colorAndFlavor(){
        if(this.color && this.flavor){
            return this.color + ' : ' + this.flavor;
        }else{
            console.log('missing color or flavor, can`t tell!')
        }
    }
}

console.log(candy);
console.log(candy.colorAndFlavor);

const candyFactory = (name, color, flavor) => {
    return {
        name,
        color,
        flavor
    }
}

const chocolate = candyFactory('Chocolate', 'Brown', 'Milky');
console.log(chocolate);
console.log(chocolate.flavor);
const chocolate2 = Object.assign(chocolate);
console.log(chocolate2);