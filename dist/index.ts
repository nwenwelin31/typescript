let age:number = 20;
let single:boolean = true;

//arrays
let fruits:string[] = ['banna','orange','apple'];
fruits.push('strawberry');
let ages:number[] = [20,30,40,50];
ages.push(10);
console.log(fruits);
console.log(ages);

let myself = {
    name: 'Nwe Nwe',
    age: 20,
    married: false,
}
console.log(myself);

//type inference with arrays
let juices = ['apple','orange','momo'];
juices.push('peaches');
console.log(juices);
const j = juices[3];
console.log(j);

//object literals
let user:{name:string, age:number, id:number} = {
    name: 'John',
    age: 22,
    id:1
}

//typ inference with object literals
let person = {
    name: 'lugiu',
    score:35
}

person.name = 'browser',
person.score = 40;

//functions
 function addTwoNumbers(a:number,b:number):number{
    return a+b;
 }

 const subtractTwoNumbers = (a:number, b:number):number => {
    return a-b;
 }

 addTwoNumbers(3,9);
 subtractTwoNumbers(5,2);

 function addAllNumbers(items:number[]):number {
    const total = items.reduce((a,c) => a+c, 0);
    console.log(total);
    return total;
 }
 addAllNumbers([1,2,3,4,5,6,7,8,9,10]);


 //return type inference

 function formatGreeting(name:string, greeting:string):string{
    return `${greeting}, ${name}`;
}
const result = formatGreeting('John','Hello');

//any type
let month:any;
let title;
month = 20;
month = false;
title = 25;
title = {
    hello: 'world',
}

//any type in arrays
let things:any[] = ['hello', true, 30, null];
things.push({id:123});


//functions and any
function addTogether(value:any):any{
    return value+value;
}

const resultOne = addTogether('hello');
const resultTwo = addTogether(20);

//tuples examples
let hsla: [number, string, string, number]
hsla = [100, '100%', '50%',1]
let xy:[number,number]
xy = [100, 200]

function useCoords():[number, number] {
    //get coords
    const lat = 100
    const lang = 100
    return [lat, lang]
}
const [lat, lang] = useCoords();

// named tuples
let info:[name:string, age:number]
info = ['peach', 25]
console.log(info[0]);