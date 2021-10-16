el; // //alert("Hello World!");
('use strict');
// const country = "Ireland";
// const continent = "Europe";
// let population = "1.2 Crores";
// let county = 'india';
// county = 'ireland';

// console.log(`Country is ${country}, it is in ${continent} continent and has a population ${population}`);

// // Data Type
// // 1. Number : let myVar = 10; let myVar = 10.45;
// // 2. String : let myVar = "Tushar";
// // 3. Boolean : let myVar = true;
// // 4. Undefined : let myVar;
// // 5. Null : it also represents empty value.
// // 6. Symbol : Value that is unique and cannot be changed
// // 7. BigInt : Numeric value which is large and cannot be stored in Number.
// //

// console.log(typeof(country));

// const isIsland = false;
// let language;

// console.log(typeof(isIsland),typeof(population),typeof(country),typeof(language))

// language = "English";

// const description = "Ireland is in Europe, and its 11 milion people speak Irish"

// let x, y;
// x = 10;
// y = 20;
// x,y = y,x;
// console.log(x,y);

// let markWeight, markHeight, johnWeight, johnHeight, markBMI, johnBMI, markHigherBMI;
// markWeight = 78;
// markHeight = 1.69;
// johnWeight = 92;
// johnHeight = 1.95;
// markBMI = (markWeight / (markHeight ** 2)).toFixed(2);
// johnBMI = (johnWeight / (johnHeight ** 2)).toFixed(2);
// markHigherBMI = markBMI > johnBMI;

// if (markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// }else if(johnBMI > markBMI){
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }else{
//     console.log(`Mark's and John's BMI is same (${markBMI})`);
// }

// // Type Conversion - Is when we manually convert one type to another.
// let inputBirthYear = '1990';
// let age = 2021 - Number(inputBirthYear) ;
// console.log(`Age is ${age}`);

// // Type Coercion - Is when Javascript automatically convert one type to another.
// // When we use plus (+) then number is converted to string. if we use minus (-) then string is converted to numbers.
// console.log('1990'+15); //output - 199015
// console.log('1990'-15); //output - 1975

// // Falsy and truthy values
// // Falsy values are those values which are not false but when we convert those values to boolean they will become false. e.g. 0, '', NaN, undefined, null
// // except for these values all other values are truthy values.
// console.log(Boolean(0), Boolean(NaN), Boolean(''), Boolean(undefined), Boolean(null)); // output will be false
// console.log(Boolean(1));

// // User Input

// const favNumb = Number(prompt("Please enter your fav number"));

// if(favNumb === 23){
//     console.log("You have entered number 23!");
// } else if(favNumb === 9){
//     console.log("You have entered number 9!");
// } else{
//     console.log("You havent entered number 9 or 23!")
// }

// if (favNumb !== 9) console.log("Why not 9");

// let avgDolphins = ((97+112+101) / 3);
// let avgKoalas = ((109+95+106) / 3);

// console.log(avgDolphins, avgKoalas)

// if ((avgDolphins > avgKoalas) && avgDolphins >= 100){
//     console.log("Dolphins are winner")
// }else if((avgKoalas > avgDolphins) && avgKoalas >=100){
//     console.log("Koalas are the winner")
// }else if ((avgKoalas === avgKoalas) && avgKoalas >= 100){
//     console.log("There is a tie!")
// }else{
//     console.log("No team wins the trophy !")
// }

// // Switch Cases:

// const enteredDay = prompt("Please enter day!");

// switch (enteredDay.toLowerCase()){
//     case "monday":
//         console.log("Its monday!");
//         break;
//     case "tuesday":
//         console.log("Its tuesday!");
//         break;
//     case "wednesday":
//         console.log("Its wednesday!");
//         break;
//     case "thursday":
//         console.log("Its thursday!");
//         break;
//     case "friday":
//         console.log("Its friday!");
//         break;
//     default:
//         console.log("Its weeked!");
//         break;
// }

// const name = prompt("Boy or Girl") === "Boy" ? "Ishan" : "Ishna";
// console.log(`${name}`);

// const billAmt = 430 ;
// const tip = billAmt >=50 && billAmt <= 300 ? billAmt * 0.15 : billAmt * 0.20;

// console.log(`The bill was ${billAmt}, the tip was ${tip}, and the total value ${billAmt + tip}`);

// //Functions - There are 3 types of functions. Function Declaration, Funtion Expression and Arrow Function.
// //1. Function Declaration:
// function calcAge1(birthYear){
//     return 2021 - birthYear;
// }
// const age1 = calcAge1(Number(prompt(`Please enter your BirthYear!`)));
// console.log(`Age using Function declaration is ${age1}`);

// //2. Function Expression:
// const calcAge2 = function (birthYear){
//     return 2021 - birthYear;
// }
// const age2 = calcAge2(Number(prompt('Please enter birthYear.')));
// console.log(`Age using Function Expression is ${age2}`);

// //3. Arrow Function: Special Form of function expression.
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(Number(prompt('Please enter birthYear.')));
// console.log( `Age using Arrow Function is ${age3}`);

// //4. Arrow Function with multiple arguments and statements.
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age4 = 2021 - birthYear;
//     const yearsLeft = 65 - age4;
//     return `Hello ${firstName}, years left for your retirement are ${yearsLeft} !`;
// }
// console.log(yearsUntilRetirement(1990, "Tushar"));

// const yearsUntilRetirement = (birthYear) => {
//     const currentAge = 2021 - birthYear;
//     return `Years left until retirement are ${65 - currentAge}`;
// }

// console.log(yearsUntilRetirement(1990));

// const calcAge = function(birthYear){
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement1 = function (birthYear){
//     const currentAge1 = calcAge(birthYear)
//     const yearsLeft1 = 65 - currentAge1
//     return yearsLeft1 < 0 ? 0 : yearsLeft1;

// }

// console.log(yearsUntilRetirement1(1990));
// console.log(yearsUntilRetirement1(1954));

// const calcAverage = (score1, score2, score3) => (score1+score2+score3) / 3;

// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if (avgDolphins >= (avgKoalas * 2)){
//         return `Dolphin wins (${avgDolphins} vs. ${avgKoalas})`;
//     }else if(avgKoalas >= (avgDolphins * 2)){
//         return `Koalas wins (${avgKoalas} vs. ${avgDolphins})`;
//     }else{
//         return `No team Wins!`;
//     }
// }
// console.log(checkWinner(avgDolphins,avgKoalas));

//Arrays:
// //const familyMembersNew = new Array('Papa', 'Mummy');
// const familyMembers = ['Papa', 'Mummy'];
// console.log(familyMembers.length)

// familyMembers.push('Tushar'); //add element at the end of an array
// console.log(familyMembers);

// console.log(familyMembers.push('TusharNew')) //it will output new lenght of an array.
// console.log(familyMembers);

// familyMembers.unshift('Rohini'); //add element at the start of an array
// console.log(familyMembers);

// console.log(familyMembers.unshift('RohiniNew')); //it will output new length of an array.
// console.log(familyMembers);

// familyMembers.pop(); //Removes element from the end of an array
// console.log(familyMembers);

// console.log(familyMembers.pop()); //it will display the element which was removed from an array;
// console.log(familyMembers);

// familyMembers.shift(); //Removes an element from the start of an array.
// console.log(familyMembers);

// console.log(familyMembers.shift()) // it will display the element which was removed from an array.
// console.log(familyMembers);

// console.log(familyMembers.indexOf('Mummy'));
// console.log(familyMembers.includes('Mummy'));

// const calcTip = function(billValue){
//     const tip = billValue >=50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
//     return tip;
// }

// // const calcTip = (billValue) => billValue >=50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

// const bill = [125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [bill[0]+tip[0], bill[1]+tip[1], bill[2]+tip[2]];

// console.log(`Tip array is [${tip}]`);
// console.log(`Total amount array is [${total}]`);

// for(let i=0; i<bill.length; i++){
//     console.log(`Bill amount is ${bill[i]} and tip amount is ${calcTip(bill[i])}`);
// }

// Objects - Key and Value Pair.
// There are many ways to declare objects, declaring object using a key and value pair is one of the way to define object.

// const ishu = {
//     firstName : "Ishna",
//     lastName : "Chavan",
//     father: "Tushar",
//     mother: "Rohini",
//     friends: ['Kavish','Raj','Timu','Granthu']
// };

// console.log(ishu['firstName']);
// console.log(`${ishu.firstName} has ${ishu.friends.length} friends and her best friend is ${ishu.friends[0]}`);
// console.log(ishu.father);
// ishu.home = "Andheri";
// ishu['birthdate'] = '7th Oct 2019';

// console.log(ishu);

// const tushar = {
//     firstName:"Tushar",
//     lastName:"Chavan",
//     birthYear:1990,
//     // in an object we can create key value pair of function as well.
//     calcAge: function(){
//         // in below line we have created a new variable called age and calculated current age and stored in it.
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     job:"Programmer",
//     hasDriversLicense: true,
//     getSummary: function(){
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${this.hasDriversLicense?"has a driver license":"doesn't have a driver license."}`
//     }
// }

// console.log(tushar.calcAge());
// console.log(tushar.age);

// console.log(tushar.getSummary())

// const Mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI= this.mass / this.height**2;
//         return this.BMI;
//     }
// }

// const John = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;;
//     }
// }

// let higherBMIName;
// let lowerBMIName;
// if(Mark.calcBMI() > John.calcBMI()){
//     higherBMIName = "Mark";
//     lowerBMIName = "John";
// }else{
//     higherBMIName = "John";
//     lowerBMIName = "Mark";
// }
// console.log(`${Mark.calcBMI() > John.calcBMI() ? Mark.fullName : John.fullName}'s BMI (${Mark.BMI > John.BMI ? Mark.calcBMI() : John.calcBMI()}) is higher than ${Mark.BMI > John.BMI ? John.fullName : Mark.fullName}'s (${Mark.BMI > John.BMI ? John.calcBMI() : Mark.calcBMI()})'s `)

// const atul = {
//     fisrtName : "Atul",
//     lastName: "Surve",
//     wife:"Vrushali",
//     favSports : ['football','cricket'],
//     birthYear : 1991,
//     age: function(){
//         const atulAge = 2021 - this.birthYear;
//         return atulAge;
//     }
// }
// console.log(atul.fisrtName);

// for(let i=0;i<=9;i++){
//     if(i <= 4){
//         console.log(`Lifting weight repitition ${i+1}`);
//     }else if (i>4 && i<=7){
//         console.log(`Lifting weight repitition ${i+1}`);
//         continue;
//         console.log(`Lifting weight repitition ${i+1}`);
//     }else{
//         console.log(`Lifting weight repitition ${i+1}`);
//         break;
//         console.log(`Lifting weight repitition ${i+1}`);
//     }

// }

// const marks = new Array('10','20','30','40');
// let type = new Array();
// console.log(marks);
// for (let i = 0;i<marks.length;i++){
//     console.log(`Tushar's marks - ${marks[i]}`);
//     type[i] = typeof marks[i];
// }
// console.log(type);

// const arr1 = [10,20,30,40,50];
// for(let i = (arr1.length - 1);i>=0 ; i--){
//     console.log(arr1[i]);
// }

// for(let i = 0; i< arr1.length;i++){
//     for(let j=i+1;j< arr1.length;j++){
//         console.log(`${arr1[i]} --- ${arr1[j]}`)
//     }
//     console.log(`---------`)
// }

// let userInput = "";

// function askUser(){
//     userInput = prompt("Please enter something!");
//     return userInput;
// }

// let userInputArrow = () => prompt("Please enter something!");

// do{
//     console.log(`Hello ${userInputArrow}`);
// }while(userInputArrow !== "stop");

let calcTip = (billAmount) =>
  billAmount >= 50 && billAmount <= 200 ? billAmount * 0.15 : billAmount * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
console.log(calcTip(100));
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(totals);

function calcAverage(arr) {
  let totalBill = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    totalBill = totalBill + arr[i];
  }
  console.log(totalBill);
  return totalBill / arr.length;
}
console.log(calcAverage(totals));

const tempratures = [-3, -6, 0];
const tempNew = [];
// for (let i = 0; i < tempratures.length; i++) console.log(typeof tempratures[i]);
for (let i = 0; i < tempratures.length; i++) {
  if (typeof tempratures[i] === 'number') {
    tempNew.push(tempratures[i]);
  } else {
    continue;
  }
}
console.log(tempratures, tempNew);
const maxTemp = Math.max(...tempNew);
const minTemp = Math.min(...tempNew);
console.log(maxTemp, minTemp);
let tempAmplitude;
if (maxTemp < 0 && minTemp < 0) {
  tempAmplitude = maxTemp - minTemp;
} else if (minTemp < 0 && maxTemp >= 0) {
  tempAmplitude = maxTemp + minTemp * -1;
}
console.log(tempAmplitude);

const studentMarks = {
  studentName: 'Tushar',
  studentID: '10552610',
  course: 'M.Sc. Information Systems with Computing',
  sem1Marks: [60, 75, 89, 73, 60],
  sem2Marks: [76, 65, 0, 68, 52],
};
console.log(studentMarks);
console.table(studentMarks);

const calcPercentage = function (sem1, sem2) {
  const marks = sem1.concat(sem2);
  let totalMarks = 0;
  for (let i = 0; i < marks.length; i++) totalMarks += marks[i];

  console.log(totalMarks);
  return totalMarks;
};
console.warn(calcPercentage(studentMarks.sem1Marks, studentMarks.sem2Marks));

const printForecast = function (temp) {
  let stringForcast = '...';
  for (let i = 0; i < temp.length; i++) {
    stringForcast += ` ${temp[i]} in ${i + 1} days... `;
  }
  return stringForcast;
};

console.log(printForecast([12, 5, -5, 0, 4]));
