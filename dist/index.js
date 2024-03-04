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
//type inference with object literals
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
//tuples examples
var hsla;
hsla = [100, '100%', '50%', 1];
var xy;
xy = [100, 200];
function useCoords() {
    //get coords
    var lat = 100;
    var lang = 100;
    return [lat, lang];
}
var _a = useCoords(), lat = _a[0], lang = _a[1];
// named tuples
var info;
info = ['peach', 25];
console.log(info[0]);
var authorOne = { name: 'John', avatar: '/img/john.jpg' };
var newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
//function argument types
function createPost(post) {
    console.log("created post ".concat(post.title, " by ").concat(post.author.name));
}
createPost(newPost);
//with arrays
var posts = [];
posts.push(newPost);
function getRandomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
var colorOne = getRandomColor();
var colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
// example 2 - object literal
// type User = {
// 	name: string
// 	score: number
// }
// const userOne: User = { name: 'mario', score: 75 }
// function formatUser(user: User): void {
// 	console.log(`${user.name} has a score of ${user.score}.`)
// }
// formatUser(userOne)
// formatUser({ name: 'yoshi', score: 100 })
//union types
var someId;
someId = 1;
someId = '2';
var email = null;
email = 'mario@netninja.dev';
email = null;
var anotherId;
// anotherId = undefined
anotherId = '1';
anotherId = 2;
//type guards
// example 1
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods and properties
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
var idOne = swapIdType(1);
var idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
