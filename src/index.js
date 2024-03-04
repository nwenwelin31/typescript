var age = 20;
var single = true;
//arrays
var fruits = ['banna', 'orange', 'apple'];
fruits.push('strawberry');
var ages = [20, 30, 40, 50];
ages.push(10);
console.log(fruits);
console.log(ages);
var myself = {
    name: 'Nwe Nwe',
    age: 20,
    married: false,
};
console.log(myself);
//type inference with arrays
var juices = ['apple', 'orange', 'momo'];
juices.push('peaches');
console.log(juices);
var j = juices[3];
console.log(j);
//object literals
var user = {
    name: 'John',
    age: 22,
    id: 1
};
//typ inference with object literals
var person = {
    name: 'lugiu',
    score: 35
};
person.name = 'browser',
    person.score = 40;
//functions
function addTwoNumbers(a, b) {
    return a + b;
}
var subtractTwoNumbers = function (a, b) {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(5, 2);
function addAllNumbers(items) {
    var total = items.reduce(function (a, c) { return a + c; }, 0);
    console.log(total);
    return total;
}
addAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//return type inference
function formatGreeting(name, greeting) {
    return "".concat(greeting, ", ").concat(name);
}
var result = formatGreeting('John', 'Hello');
//any type
var month;
var title;
month = 20;
month = false;
title = 25;
title = {
    hello: 'world',
};
//any type in arrays
var things = ['hello', true, 30, null];
things.push({ id: 123 });
//functions and any
function addTogether(value) {
    return value + value;
}
var resultOne = addTogether('hello');
var resultTwo = addTogether(20);
