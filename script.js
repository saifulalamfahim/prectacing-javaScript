let x = 5;
let y = 5;
let z = 8;
console.log(x == z);
const trees = ["brave", "nothing", "slow"];
console.log(trees[1]);
const objects = {name:"Saifl ALam", age:33, adress:"Halishhar"};
console.log(typeof trees);

function sleep() {
    console.log("now i am learning");
};

console.log("now i am testing");
sleep();

function people(names, age) {
    console.log(names + "is here, And this person age is " + age );
};
people("jasim", 20);
people("karim", 34);
people("Meave", 26);
people("kamini", 23);
people("jacchetai", 00);


const car = {
    Name: "volvo",
    model: 500,
    weith: "850KG",
    color: "white",
    start: function (){
        console.log("car start");
    },
    drive: function (){
        console.log("car is driving");
    },
    stop: function (){
        console.log("car is stop now");
    }   
};
console.log(car);

 
function testClick() {
    document.getElementById('test').innerHTML = Date();
};
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

let permission = "7";
console.log(permission.padStart(4, 7));

const text1 = 'the fushing dog, Eating dog';
console.log(text1.replace("dog", "cat"));

let str = 'b' + 'a' + + 'a' + 'a';
console.log(str.toUpperCase()); 

const fruits = ["bnanan", "Orange", "Apple", "Mango", "bnanan", "Orange", "Apple", "Mango"];

for (i= 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

const practice1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice").innerHTML = practice1.toString();

const practice2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice1").innerHTML = practice2.join("*");

const practice3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice2").innerHTML = practice3;
document.getElementById("practice3").innerHTML = practice3.pop();
document.getElementById("practice4").innerHTML = practice3;

const practice4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("practice5").innerHTML = practice4;
document.getElementById("practice6").innerHTML = practice4.push("kathal");
document.getElementById("practice7").innerHTML = practice4;

const numbers = [45, 6, 8, 34, 67, 3, 41];

function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------");
};

numbers.forEach(myFunction);

const nweDate = new Date();
document.getElementById("Date").innerHTML = nweDate;

const nweDate1 = new Date(2021, 11, 26, 2, 50, 30);
document.getElementById("Date1").innerHTML = nweDate1;



function getSolved(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getSolved(1, 6));

const students = ["Fahim", "Kanjan", "Rabinal", "Barun legar", "Wornwer", "Abalan"];
console.log(students.sort());


const rollNumbers = [3,6,1,8,6,9,3,4,5,6,7,3,2,5,1,8];
console.log(rollNumbers.sort(function(a, b){
    return a - b;
}));

let age = 19;

if (age >= 19) {
    console.log("he ami parsi");
}