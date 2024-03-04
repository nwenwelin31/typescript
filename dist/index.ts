let age:number = 20;
let person:string = 'Nwe Nwe';
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
person.scroe = 40;
