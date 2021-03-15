let myName: string = "Ebtesam";


const numOfStates: number = 50;


const addingNumbers: number = 5 + 4;


function sayHello() {
    alert("Hello World!");
}
sayHello();


function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    } else {
        alert("Welcome!");
    }
}


checkAge ("Jake",  25);
checkAge( "Zak", 30);
checkAge("Garret", 13);
checkAge("Sharp", 15);

let myFavoriteVeg: string[] = ["Potatoes", "Tomatoes", "Beans", "Corn", "squash"];

for (let i: number = 0; i < myFavoriteVeg.length; i++) {
    console.log(myFavoriteVeg[i]);
}


let pet = {
    name: "Chief",
    breed: "German Shepart"
};

console.log(pet.name, pet.breed);

let people:  {name: string, age: number}[] = [
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

for (let i: number = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}


function getLength(word: string) {
    return word.length;
}

let stringLength = getLength("hello");

if (stringLength % 2 === 0) {
    console.log("Today is a good day ");
} else {
    console.log('Today could be a bad bad day!');
}
