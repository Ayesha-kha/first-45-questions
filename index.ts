//100-Day-of-coding
//#!/usr/bin/env node

//QUESTION 2
let personName = "Ayesha Ahmed";
console.log(
  `Hello ${personName},would you like to learn some typescript today?`
);

//QUESTION 3
let perName = "Nafees Ahmed";
console.log("Lower case", perName.toLowerCase());
console.log("Upper case", perName.toUpperCase());
console.log(
  "Title case",
  perName.charAt(0).toUpperCase() + perName.slice(1).toLowerCase()
);

//Day 2 Challenge;
//Question 1
console.log(
  'Imran khan once said,"Compromise for your dream but never compromise on your dream."'
);

//Question 2
let famousPerson = "Imran Khan";
let message = "Compromise for your dream but never compromise on your dream.";
console.log(`${famousPerson} once said, "${message}"`);

//Question 3
let persName = "\n\t Ayesha Nafees Ahmed \t\n";
console.log(persName);
console.log(persName.trim());

//Day 3 Challenge
//Question 7 and 8
//Addition
console.log(7 + 1);
//Subtraction
console.log(10 - 2);
//Multiply
console.log(4 * 2);
//Division
console.log(40 / 5);

// Question 9
let favouriteNum = 10;
let mess = "My favourite number is: ";
console.log(`${mess}${favouriteNum}`);

//Day 4 Challenge
//Question 10
//Ayesha Nafees Ahmed, 2-april-2024
//This program print a personal message.
//let myName = "Ayesha Nafees";
//console.log(`hello &{myName}! would you like to learn some typescript today?`);

//Question 11
let myFriend = ["Zoha", "Adina", "Anousha", "Sana", "Absar", "Hamna"];
for (let i = 0; i < myFriend.length; i++) {
  console.log(myFriend[i]);
}

//Question 12
let myBesties = ["Zoha", "Adina", "Anousha", "Sana", "Absar", "Hamna"];
for (let i = 0; i < myBesties.length; i++) {
  console.log(`Would you come to the party ${myBesties[i]}?`);
}

//Day 5 Challenge
//Question 13
let favTransport = ["Cars", "Buses", "Cycle", "Bike", "Scooty", "Aero plane"];
for (let transport of favTransport) {
  console.log(`I would like to own a ${transport}.`);
}

//Question 14
let myGuest = ["Waseem Badami", "Imran khan", "iqrar-ul-haq"];
myGuest.forEach((guest) => {
  console.log(`Dear ${guest}, would you come to join me for iftari?`);
});

//Question 15
let notCome = "Imran khan";
console.log(`${notCome} cannot make it to the dinner.`);

let newGuest = "Ayesha Nafees";
myGuest[myGuest.indexOf(notCome)] = newGuest;

myGuest.forEach((guest) => {
  console.log(`Dear ${guest}, would you come to join me for iftari?`);
});

//Day 6 Challenge
//Question 16
myGuest.unshift("Kashif Abbasi");
myGuest.push("Bilal Abbas");
let middleGuest: string = "Hammad Azhar";
let middleIndex = myGuest.length / 2;
myGuest.splice(middleIndex, 0, middleGuest);
myGuest.forEach((guest) => {
  console.log(`\nDear ${guest}, would you come to join me for iftari?`);
});

//Question 17
console.log(
  `\nSorry! ${myGuest} I have space for only two guest so i can invite only two people for iftari. `
);
while (myGuest.length > 2) {
  let removeGuest = myGuest.pop();
  console.log(`\nSorry Mr. ${removeGuest} I cannot invite you.`);
}
for (let i = 0; i < myGuest.length; i++) {
  console.log(`\nDear ${myGuest} you are still invited.`);
}
myGuest.splice(0, 2);
console.log(myGuest);

//Question 18
let favouritePlaces = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Quetta",
  "Balochistan",
];
//Print your array in its original order.
console.log("Origina order :", favouritePlaces);
//Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical order :", [...favouritePlaces].sort());
//Show that your array is still in its original order by printing it.
console.log("Origina order :", favouritePlaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical order :", [...favouritePlaces].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Origina order :", favouritePlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Alphabetical order :", favouritePlaces.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Alphabetical order :", favouritePlaces.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order :", favouritePlaces.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical order :", favouritePlaces.sort().reverse());

//Question 19
console.log(`\nI am inviting ${myGuest.length} in the iftar party`);

//Question 20
let eidList = [
  "bangles",
  "Makeup",
  "jewellery",
  "dress",
  "slippers",
  "Mehandi.",
];
console.log(`These are my Eid shopping items ${eidList}`);

//Question 21
// Write a program that creates Objects containing these items.
let flower = {
  name: "Rose",
  color: "Red",
  season: "Spring",
};
console.log(flower);

//Day 8 Challenge
//Question 22
let mySubject = ["urdu", "English", "Maths", "Islamiat", "Science"];

//Arrays are start with zero indexed,so index 5 is out of bounds.
console.log(mySubject[2]);
//Correccting the error by accessing a valid index.

//Question 23
//Conditional statement;
//Test 1
let marks: number = 50;
console.log("Is marks == '50'?I take admission in It program");
console.log(marks == 50);

//test 2
console.log("Is marks === '50'?I take admission in It program");
console.log(marks === 50);

//test 3
console.log("Is marks != '60'?I take admission in It program");
console.log(marks != 60);

//test 4
console.log("Is marks !== '70'?I take admission in It program");
console.log(marks !== 70);

//test 5
console.log("Is marks <= '50'?I take admission in It program");
console.log(marks <= 50);

//False
//Test 1
let myMarks: string = "25";
console.log("Is mymarks == '25'?I take admission in It program");
console.log(myMarks == "19");

//Test 2
console.log("Is mymarks === '25'?I take admission in It program");
console.log(myMarks === "19");
//test 3
console.log("Is mymarks === '25'?I take admission in It program");
console.log(myMarks === "19");

console.log("Is mymarks !== '25'?I take admission in It program");
console.log(myMarks !== "25");

console.log("Is mymarks.uppercase == '25'?I take admission in It program");
console.log(myMarks.toUpperCase() == "19");

//Question 24
//Tests for equality and inequality with strings
console.log("Equality test with strings:", "ayesha" == "ayesha");
console.log("Equality test with strings:", ("ayesha" as string) != "Ayesha");

//Tests using the lower case function
console.log("Testing with lower case: ", "HELLO".toLowerCase() == "hello");

//• Numerical tests involving equality ,
console.log("Equality test with numbers:", 49 === 49);

//Numerical tests involving  inequality,
console.log("Inequality test with numbers:", (49 as number) !== 26);

// greater than and less than,
console.log("greater than  test:", 100 > 25);
console.log("less than test:", 3 < 25);

//greater than or equal to,
console.log("greater than or equal to:", 25 >= 25);

//less than or equal to
console.log("less than or equal to:", 25 <= 50);

// Tests using "and" and "or" operators
console.log("Tests using 'and' operator: ", 25 == 25 && 100 > 25);
console.log("Tests using 'or' operator: ", 25 == 25 || 100 <= 25);

// Test whether an item is in a array
let favouriteFood: string[] = [
  "burger",
  "pizza",
  "biryani",
  "sharwma",
  "tikka",
];
console.log(
  "Is burger is in my favourite food:",
  favouriteFood.includes("burger")
);

// Test whether an item is not in a array
console.log(
  "Is fish is in my favourite food:",
  !favouriteFood.includes("fish")
);

//Days 9 Challenge
//Question 25
let alien_color = "green";
if (alien_color == "green") {
  console.log("wow what a shot You have earned 10 points!");
}

//The version that fails will have no output.)
if (alien_color == "Red") {
  console.log("wow what a shot You have earned 10 points!");
}

//Question 26
// the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alienColor = "green";
if (alienColor == "green") {
  console.log(
    "wow what a shot You have earned 5 points for shooting the alien !"
  );
} else {
  console.log("Wrong shot You have lost 10 points!");
}

let alieColor = "yellow";
if (alieColor == "green") {
  console.log(
    "wow what a shot You have earned 5 points for shooting the alien !"
  );
} else {
  console.log("Wrong shot You have just earned 10 points!");
}

//Question 27
//Alien color: Green
let alien_Color1 = "green";
if (alien_Color1 == "green") {
  console.log(
    "wow what a shot You have earned 5 points for shooting the alien !"
  );
} else if (alien_Color1 == "red") {
  console.log(
    "wow what a shot You have earned 10 points for shooting the alien !"
  );
} else if (alien_Color1 == "yellow") {
  console.log(
    "wow what a shot You have earned 15 points for shooting the alien !"
  );
}
//Alien color: yellow
let alien_Color2 = "yellow";
if (alien_Color2 == "green") {
  console.log(
    "wow what a shot You have earned 5 points for shooting the alien !"
  );
} else if (alien_Color2 == "yellow") {
  console.log(
    "wow what a shot You have earned 10 points for shooting the alien !"
  );
} else if (alien_Color2 == "red") {
  console.log(
    "wow what a shot You have earned 15 points for shooting the alien !"
  );
}

//Alien color: red
let alien_Color3 = "red";
if (alien_Color3 == "green") {
  console.log(
    "wow what a shot You have earned 5 points for shooting the alien !"
  );
} else if (alien_Color3 == "yellow") {
  console.log(
    "wow what a shot You have earned 10 points for shooting the alien !"
  );
} else if (alien_Color3 == "red") {
  console.log(
    "wow what a shot You have earned 15 points for shooting the alien !"
  );
}

//Day 10 Challenge
//Question 28
let age = 3;
if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("the person is a kid.");
} else if (age < 20) {
  console.log("the person is a teenager.");
} else if (age < 65) {
  console.log("the person is a adult.");
} else {
  console.log("the person is a elder.");
}

//Question 29
let favouriteFruit = ["apple", "mango", "orange"];
if (favouriteFruit.includes("apple")) {
  console.log("I really like apple.");
}
if (favouriteFruit.includes("mango")) {
  console.log("I really like mango.");
}

if (favouriteFruit.includes("orange")) {
  console.log("I really like orange.");
}
if (favouriteFruit.includes("pineapple")) {
  console.log("I really like pineapple.");
}

if (favouriteFruit.includes("grapes")) {
  console.log("I really like grapes.");
}

//Question 30
let userName = ["admin", "ahmed", "bilal", "kiran", "fizza"];
for (let i = 0; i < userName.length; i++) {
  if (userName[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userName[i]}, thank you for logging in again.`);
  }
}

//Day 11 Challenge
//Question 31
let user_Name = ["admin", "ahmed", "bilal", "kiran", "fizza"];
if (user_Name.length === 0) {
  console.log("We need to find some users!");
} else {
  user_Name = [];
  console.log("All user name have been removed " + user_Name.length);
}

//Question 32
let currentUser: string[] = [
  "ayeKhan2",
  "naFees9",
  "aDina8",
  "anOUshy5",
  "fqAHmed8",
];
let newUser: string[] = [
  "ayeKhan2",
  "saNa89",
  "zohALI21",
  "fqAHmed8",
  "anilNAF23",
];
newUser.forEach(newUsername => {
  let lowerCase = newUsername.toLowerCase();

  if(currentUser.map(curr_user =>
    curr_user.toLowerCase()).includes(lowerCase)){
      console.log(`${newUsername} will need to enter a new username .`);
    }
    else{
      console.log(`${newUsername} is available .`);
    }
})

//Question 33
let numbers: number[] = [1,2,3,4,5,6,7,8,9];
numbers.forEach(number =>{
  let ordinalEnd = "st";
  if( number === 1){
    ordinalEnd = "st";
  } else if(number === 2){
    ordinalEnd = "nd";
  } else if (number === 3){
    ordinalEnd = "rd";
    }else{
      ordinalEnd = "th";
    }
    console.log(`${number}${ordinalEnd}`);
})

//Day 12 challenge
//Question 34
let favouritePizza: string[] = ['Tikka pizza','chicken Lava pizza','muglai pizza'];
for(let pizza of favouritePizza){
  console.log(` I like ${pizza}.`);
}
console.log(" I really love pizza.");


//question 35
let animalschar:string[] = ['fish','shark','dolphine'];
for(let animal of animalschar){
  console.log(`${animal} would make a great pet.`);
}
console.log("These all live in water.");

//Functions
//Question 36
function make_shirts(size:string , text:string){
  console.log(`making a ${size} shirt with the message of : ${text}`);
}
make_shirts("small", "Enjoy life!");
make_shirts("medium", "Enjoy life!");
make_shirts("large", "Enjoy life!");

//Day 13 challenge

//Question 37
function make_shirt(size:string = "large" , text:string = "I love python!"){
  console.log(`making a ${size} shirt with the message of : ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love typescript!");


//Question 38
function describe_country(city:string , country:string = "Pakistan"){
  console.log(`${city} is in ${country}.`);
}
describe_country("Balochistan");
describe_country("Multan");
describe_country("Istanbul", "Turkey");

//Question 39
function city_country(city:string , country:string) {
  return (`${city}, ${country}`);
}
console.log(city_country("karachi", "Pakistan"));
console.log(city_country("Busan", "Korea"));
console.log(city_country("Paris", "france"));

//Days 14 challenge
//Question 40
function make_album(name:string, title: string, tracks?: number){
 
  let album:{name:string, title: string, tracks?: number} = {
    name: name,
    title: title,
    
  }

  if(tracks !== undefined){
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album('Atif Aslam','jaal parri');
console.log(album1);

let album2 = make_album('Ali Zafar','jhoom');
console.log(album2);

let album3 = make_album('Arjit Singh','Yarriyan', 15);
console.log(album3);

//Question 41
let magician:string[] = ['Harry potter','Raven','Wizard Delamorte','Criss Angel','David Copperfield'];
//Question 43
function copyArray(magicianName:string[]){
  return [...magicianName]
}
let magicName = copyArray(magician);

//Question 42
function make_great(magicians:string[]) {
  for (let i = 0; i < magicians.length; i++){
    magicians[i] = "the great" + magicians[i] }
}

//Question 41
function show_magicians(magicians: string[]){
  magicians.forEach(magician =>{
    console.log(magician);
  });
}

make_great(magicName);
console.log("This is my original array:" )
show_magicians(magician);
console.log("This is my modified array:" )
show_magicians(magicName);

//Question 44
function sandwhichItem (items:string[]){
  console.log(`Items a person want in sandwhich are : ${items.join(' ,')}`);
}
sandwhichItem(["mayonese","cheese."]);
sandwhichItem(["tomato","chicken","lettuce."]);
sandwhichItem(["ham","onion","ketchup","dip."]);

//Question 45
function carDetail(manufacture:string, model:string, ...moreOptions:{[key :string ] :any}[]):object{
  let details = {
    manufacture,
    model,
    ...Object.assign({} , ...moreOptions)
  }

  return details;
};

let information = carDetail("honda","civic" , {color :"black"} , {"year": 
2020});
console.log(information);

