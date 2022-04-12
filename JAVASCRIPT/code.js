//Write your js here
console.log("Hello world");
var a = 78;
var b = "code";
console.log(a);
console.log(b);

var num1 = 2;
var num2 = 9;

// Arithmetic operators in action in JavaScript
console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 * num2 is " + num1 * num2);
console.log("The value of num1 / num2 is " + num1 / num2);
console.log("The value of num1 ** num2 is " + num1 ** num2);
console.log("The value of num1++ is " + num1++);
console.log("The value of ++num1 is " + ++num1);
console.log("The value of num1-- is " + num1--);
console.log("The value of --num1 is " + --num1);

var id = "code";
var channel = "VScode";
var message = "practice make you perfect";
var temp = `${id} is a 'nice' "and" we has a channel called ${channel}`;
// console.log(string + name + message);
var len = id.length;
console.log(`Length of id is ${len}`);

document.getElementById("content").innerHTML = "<h3>this is an h3 heading</h3>"; //to insert html to tag with id content

var str = "This is a string";
console.log(str);

// First occurrence of a substring
var position = str.indexOf("is");
console.log(position); //output is :- 2
// Last occurence of a substring
position = str.lastIndexOf("is");
console.log(position); //output is :- 5

var substr = str.slice(1, 8);
console.log(substr); //outut is hi is a
// slicing method
var substr = str.slice(1, 8); //give character from 1 to 8 index value
var substr = str.substring(5, 7); //same as slice but not be negative
var substr = str.substr(1, 3); //give character start from 5 to 12
console.log(str[3]); //output is :- s

var replaced = str.replace("string", "code");
console.log(replaced); //output is :- This is a code

//to change upper and lower case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var newString = str.concat("New String");
console.log(newString); //output is :- This is a stringNew String

var strWithWhitespaces = "   this contains        whitespaces   ";
console.log(strWithWhitespaces);
console.log(strWithWhitespaces.trim()); //output is :- this contains      whitespaces
//delte starting and ending spaces

var char = str.charAt(2);
console.log(char); //output is :- i

var char2 = str.charCodeAt(2); // Not very important
console.log(char2); //output is :- 105 ASCII value of i

let a = "u";
{
  //let make variable have reach with in the braces
  let a = "u6";
  console.log(a);
}
console.log(a);
//output is :- u6 u

const a = "This cannot be changed";
a = "I want to change this. This cannot be changed";
console.log(a); //output is :- This cannot be changed

// Cases
let age = 5;
if (age > 18) {
  console.log("You can drink water");
} else if (age == 2) {
  console.log("Age is 2");
} else if (age == 5) {
  console.log("Age is 5");
} else {
  console.log("You can drink Cold Drink");
}

const cups = 41;
switch (cups) {
  case 4:
    console.log("The value of cups is 4");
    break;

  case 41:
    console.log("The value of cups is 41");
    break;

  case 42:
    console.log("The value of cups is 42");
    break;

  case 43:
    console.log("The value of cups is 43");
    break;

  default:
    console.log("The value of cups is none of 4, 41, 42, 43");
    break;
}

let myVar = 34;
let myVar2 = "string";
let myVar3 = true; //boolean type
let myVar4 = null; //value is zero
let myVar5 = undefined; //value is undefined

let employee = {
  name: "code",
  salary: 10,
  channel: "VScode",
  channel2: "VScode2",
  "channel 2": "VScode3", //add space in key
};
console.log(employee);

let names = [1, 2, 4, "Harry", undefined];
console.log(names); //all value
console.log(names[1]); //particular value at index number
//anothr method
let names = new Array(1, 2, 4, "Harry", undefined); //to treat array has an object
console.log(names.length); //output is :- 5
let names = new Array(15); //to create array of 15 empty element

names = names.sort(); //arrange ascending according to ASCII value
names.push("this is pushed"); //to add element to object/array

//access an object
console.log(employee.name);
console.log(employee[`name`]); //output is :- code

//Function
function greet(name, greetText) {
  console.log(greetText + " " + name);
  console.log(name + " is a good boy");
}
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

let returnVal = greet(name3);
console.log(returnVal); //the output is undefinrd because the greet not return anything
function sum(a, b, c) {
  let d = a + b + c;
  return d;
}
let returnVal = sum(1, 2, 3);
console.log(returnVal);

// Alert in in-browser JavaScript - Does not return anything
alert("This is a message");
// Prompt in JS
let name = prompt("What is your name?", "Guest");
console.log(name);
// Confirm in JS
let deletePost = confirm("Do you really want to delete this post?");

// console.log(deletePost);
if (deletePost) {
  // Code to delete the post
  console.log("Your post has been deleted successfully");
} else {
  // Code to cancel deletion of the post
  console.log("Your post has not been deleted");
}

//Looping
let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
for (let index = 0; index < friends.length; index++) {
  console.log("Hello friend, " + friends[index]);
}

friends.forEach(function f(element) {
  console.log("Hello Friend, " + element + " to modern JavaScript");
});

// It loops through the values of an iterable object.
for (element of friends) {
  console.log("Hello Friend, " + element + " to modern JavaScript again");
}

let employee = {
  name: "Harry",
  salary: 2,
  channel: "CWH",
};

// Use this loop to iterate over objects in JavaScript
for (key in employee) {
  console.log(`The ${key} of employee is ${employee[key]}`);
}

let i = 0;
while (i < 4) {
  console.log(`${i} is less than 4`);
  i++;
}

let j = 34;
do {
  console.log(`${j} is less than 4 and we are inside do while loop`);
  j++;
} while (j < 4);

//Document
let nav = document.getElementById('nav');
console.log(nav);

let containers = document.getElementsByClassName('container');
console.log(containers);
//if we write as container(0) or container(1) then we will get the first and second containers respectively

//If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc),
let sel = document.querySelector('container’);
console.log("Selector returns ", sel)
//if we want to select all the ids
let sel = document.querySelectorAll('#nav');
console.log("Selector returns ", sel)
let sel = document.querySelectorAll('#nav>li');
console.log("Selector returns ", sel)

// Events
// Onchange-  An HTML element has been changed
// Onclick- The user clicks an HTML element
// Onmouseover-   The user moves the mouse over an HTML element
// Onmouseout-The user moves the mouse away from an HTML element
// Onkeydown- The user pushes a keyboard key
// Onload- The browser has finished loading the page

//onclick
<button id="btn" onclick="toggleHide()">Show/Hide</button>
function toggleHide(){
        let btn = document.getElementById('btn');
        let para = document.getElementById('para'); 
        if(para.style.display != 'none'){
        para.style.display = 'none';
        }
        else{
        para.style.display = 'block';
        }
    }

    let para = document.getElementById('para');
        para.addEventListener('mouseover', function run(){
            alert('Mouse Inside')
        });

        para.addEventListener('mouseout', function run(){
          alert('Mouse now went outside')
      });

// Time
// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds
// setTimeout --> Alllows us to run the function once after the interval of time
// clearTimeout --> Alllows us to stop run the function 
function greet(){
  console.log("Hello Good Morning ");
}
setTimeout(greet, 5000);
    function greet(name, byeText){
      console.log("Hello Good Morning " + name + " " + byeText);
  }
   timeOut = setTimeout(greet, 5000, "Harry", "Take Care"); //calling function inside setTimeout
   console.log(timeOut);
   // setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout

   clearTimeout(timeOut);
function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime,  1000);

let now = new Date();
console.log(now);
let dt = new Date(1000);
console.log(dt);
let newDate = new Date("2029-09-30");
console.log(newDate)
// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);
        
let yr = newDate.getFullYear();
console.log("The year is ", yr);
        
let month = newDate.getMonth();
console.log("The month is ", month);
        
let dat = newDate.getDate();
console.log("The date is ", dat);
        
let hours = newDate.getHours();
console.log("The hours is ", hours);
        
let min = newDate.getMinutes();
console.log("The hours is ", min);
        
let sec = newDate.getSeconds();
console.log("The hours is ", sec);
        
let millisec = newDate.getMilliseconds();
console.log("The hours is ", milliec);

// We can also set date and time manually with the functions like setDate() and newMinutes 
newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate)

// If we want to add the clock on our website, we can do this with the help of the above functions. But before that, we have to add the HTML which goes like 
// <div class="container">Current time is <span id="time"></span></div>
// Then we will define the above functions and create an inner HTML as follows-

newDate.setDate(8);
newDate.setMinutes(29);
console.log(newDate)
setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}

//without arrow function
function greet(){
  console.log('Good morning')
}
// Arrow function
let greet =  ()=> {
  console.log('Good morning');
}
//example
setTimeout(() => {
  console.log("We are inside settimeout");
}, 3000);
let sum2 = (a, b) => a+b;
let half = a => a/2;

//arrow function in loop
let obj1={
  greeting: "Good Morning",
  names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
  speak(){
      this.names.forEach((student)=>{
          console.log(this.greeting + " Kukdoo Koo " + student);
      });
  }
}
obj1.speak();

//Math function
let m = Math;
console.log(m)// show all math function
// Printing the constants from Math Object
console.log("The value of Math.E is ", Math.E)
console.log("The value of Math.PI is ", Math.PI)
console.log("The value of Math.LN2 is ", Math.LN2)
console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2)
console.log("The value of Math.LOG2E is ", Math.LOG2E)

let a = 34.64534;
let b = 89;

console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8)) 
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8))
// Trinonometric Functions
console.log("The value of sin(pi) is ", Math.sin(Math.PI/2))
console.log("The value of tan(pi) is ", Math.tan(Math.PI/2))
console.log("The value of cos(pi) is ", Math.cos(Math.PI/2))
console.log("Minimum value of 4, 5, 6 is ", Math.min(4,5, 6));
console.log("Maximum value of 4, 5, 6 is ", Math.max(4,5, 6));
let r = Math.random();
console.log("The random number is ", r)
// to generate a random number between a and b
let a1 = 50;
let b1 = 60;
let r50_60 = a1 + (b1-a1)*Math.random();
console.log("The random number is ", r50_60)

//JSON
let jsonObj = {
  name: "Harry",
  channel: "CWH",
  friend: "Rohan Das",
  food: "Bhindi" //#bhindiLoverSquad
} 
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);// to convert this object into string
console.log(myJsonStr);
myJsonStr = myJsonStr.replace('Harry', 'Larry');
console.log(myJsonStr);
newJsonObj = JSON.parse(myJsonStr);// to convert this string again into an object
console.log(newJsonObj);