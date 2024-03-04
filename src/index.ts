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

//type inference with object literals
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


//interfaces
 interface Author {
    name:string,
    avatar:string
 }

 const authorOne: Author = {name: 'John', avatar: '/img/john.jpg'};

 interface Post {
    title:string,
    body:string,
    tags:string[],
    create_at:Date,
    author:Author
 }

 const newPost: Post = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
 }


 //function argument types
 function createPost (post: Post): void {
    console.log(`created post ${post.title} by ${post.author.name}`);
 }

 createPost(newPost);

 //with arrays
 let posts: Post[] = [];
 posts.push(newPost);

 //type aliases
 // example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// example 2 - object literal

type User = {
	name: string
	score: number
}

const userOne: User = { name: 'mario', score: 75 }

function formatUser(user: User): void {
	console.log(`${user.name} has a score of ${user.score}.`)
}

formatUser(userOne)
formatUser({ name: 'yoshi', score: 100 })


//union types
let someId: number | string

someId = 1
someId = '2'

let email: string | null = null

email = 'mario@netninja.dev'
email = null

type Id = number | string
let anotherId: Id

// anotherId = undefined
anotherId = '1'
anotherId = 2

//--------------------
// union type pitfall
//--------------------

function swapIdType(id: Id): Id {
	// can only use props and methods common to
	// both number and string types
	// parseInt(id) --> not allowed

	return id
}