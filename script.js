//alert("Hello World!");
'use strict';
const country = "Ireland";
const continent = "Europe";
let population = "1.2 Crores";
let county = 'india';
county = 'ireland';

console.log(`Country is ${country}, it is in ${continent} continent and has a population ${population}`);

// Data Type
// 1. Number : let myVar = 10; let myVar = 10.45;
// 2. String : let myVar = "Tushar";
// 3. Boolean : let myVar = true;
// 4. Undefined : let myVar;
// 5. Null : it also represents empty value. 
// 6. Symbol : Value that is unique and cannot be changed
// 7. BigInt : Numeric value which is large and cannot be stored in Number. 
//

console.log(typeof(country));

const isIsland = false;
let language;

console.log(typeof(isIsland),typeof(population),typeof(country),typeof(language))

language = "English";

const description = "Ireland is in Europe, and its 11 milion people speak Irish"

let x, y;
x = 10;
y = 20;
x,y = y,x;
console.log(x,y);

let markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI, markHigherBMI;
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
markBMI = (markWeight / (markHeight ** 2)).toFixed(2);
johnBMI = (johnWeight / (johnHeight ** 2)).toFixed(2);
markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
}else if(johnBMI > markBMI){
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}else{
    console.log(`Mark's and John's BMI is same (${markBMI})`);
}

// Type Conversion - Is when we manually convert one type to another.
let inputBirthYear = '1990';
let age = 2021 - Number(inputBirthYear) ;
console.log(`Age is ${age}`);

// Type Coercion - Is when Javascript automatically convert one type to another. 
// When we use plus (+) then number is converted to string. if we use minus (-) then string is converted to numbers. 
console.log('1990'+15); //output - 199015
console.log('1990'-15); //output - 1975

// Falsy and truthy values
// Falsy values are those values which are not false but when we convert those values to boolean they will become false. e.g. 0, '', NaN, undefined, null
// except for these values all other values are truthy values. 
console.log(Boolean(0), Boolean(NaN), Boolean(''), Boolean(undefined), Boolean(null)); // output will be false
console.log(Boolean(1));

// User Input

const favNumb = Number(prompt("Please enter your fav number"));

if(favNumb === 23){
    console.log("You have entered number 23!");
} else if(favNumb === 9){
    console.log("You have entered number 9!");
} else{
    console.log("You havent entered number 9 or 23!")
}

if (favNumb !== 9) console.log("Why not 9");

let avgDolphins = ((97+112+101) / 3);
let avgKoalas = ((109+95+106) / 3);

console.log(avgDolphins, avgKoalas)

if ((avgDolphins > avgKoalas) && avgDolphins >= 100){
    console.log("Dolphins are winner")
}else if((avgKoalas > avgDolphins) && avgKoalas >=100){
    console.log("Koalas are the winner")
}else if ((avgKoalas === avgKoalas) && avgKoalas >= 100){
    console.log("There is a tie!")
}else{
    console.log("No team wins the trophy !")
}

// Switch Cases:

const enteredDay = prompt("Please enter day!");

switch (enteredDay.toLowerCase()){
    case "monday":
        console.log("Its monday!");
        break;
    case "tuesday":
        console.log("Its tuesday!");
        break;
    case "wednesday":
        console.log("Its wednesday!");
        break;
    case "thursday":
        console.log("Its thursday!");
        break;
    case "friday":
        console.log("Its friday!");
        break;
    default:
        console.log("Its weeked!");
        break;
}

const name = prompt("Boy or Girl") === "Boy" ? "Ishan" : "Ishna";
console.log(`${name}`);

const billAmt = 430 ;
const tip = billAmt >=50 && billAmt <= 300 ? billAmt * 0.15 : billAmt * 0.20; 

console.log(`The bill was ${billAmt}, the tip was ${tip}, and the total value ${billAmt + tip}`);


//Functions - There are 3 types of functions. Function Declaration, Funtion Expression and Arrow Function. 
//1. Function Declaration:
function calcAge1(birthYear){
    return 2021 - birthYear;
}
const age1 = calcAge1(Number(prompt(`Please enter your BirthYear!`)));
console.log(`Age using Function declaration is ${age1}`);

//2. Function Expression:
const calcAge2 = function (birthYear){
    return 2021 - birthYear;
}
const age2 = calcAge2(Number(prompt('Please enter birthYear.')));
console.log(`Age using Function Expression is ${age2}`);

//3. Arrow Function: Special Form of function expression. 
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(Number(prompt('Please enter birthYear.')));
console.log( `Age using Arrow Function is ${age3}`);

//4. Arrow Function with multiple arguments and statements.
const yearsUntilRetirement = (birthYear,firstName) => {
    const age4 = 2021 - birthYear;
    const yearsLeft = 65 - age4;
    return `Hello ${firstName}, years left for your retirement are ${yearsLeft} !`;
}
console.log(yearsUntilRetirement(1990, "Tushar"));

