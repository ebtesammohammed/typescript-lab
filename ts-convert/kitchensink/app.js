"use strict";
var myName = "Ebtesam";
var numOfStates = 50;
var addingNumbers = 5 + 4;
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        alert("Welcome!");
    }
}
checkAge("Jake", 25);
checkAge("Zak", 30);
checkAge("Garret", 13);
checkAge("Sharp", 15);
var myFavoriteVeg = ["Potatoes", "Tomatoes", "Beans", "Corn", "squash"];
for (var i = 0; i < myFavoriteVeg.length; i++) {
    console.log(myFavoriteVeg[i]);
}
var pet = {
    name: "Chief",
    breed: "German Shepart"
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: "Robert",
        age: 41
    },
    {
        name: "Afrah",
        age: 25
    },
    {
        name: "Jeremiah",
        age: 8
    },
    {
        name: "Brooke",
        age: 9
    },
    {
        name: "Camille",
        age: 15
    }
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(word) {
    return word.length;
}
var stringLength = getLength("hello");
if (stringLength % 2 === 0) {
    console.log("Today is a good day ");
}
else {
    console.log('Today could be a bad bad day!');
}
