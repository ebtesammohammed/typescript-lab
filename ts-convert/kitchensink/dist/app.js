/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\nvar myName = \"Ebtesam\";\nvar numOfStates = 50;\nvar addingNumbers = 5 + 4;\nfunction sayHello() {\n    alert(\"Hello World!\");\n}\nsayHello();\nfunction checkAge(name, age) {\n    if (age < 21) {\n        alert(\"Sorry \" + name + \", you aren't old enough to view this page!\");\n    }\n    else {\n        alert(\"Welcome!\");\n    }\n}\ncheckAge(\"Jake\", 25);\ncheckAge(\"Zak\", 30);\ncheckAge(\"Garret\", 13);\ncheckAge(\"Sharp\", 15);\nvar myFavoriteVeg = [\"Potatoes\", \"Tomatoes\", \"Beans\", \"Corn\", \"squash\"];\nfor (var i = 0; i < myFavoriteVeg.length; i++) {\n    console.log(myFavoriteVeg[i]);\n}\nvar pet = {\n    name: \"Chief\",\n    breed: \"German Shepart\"\n};\nconsole.log(pet.name, pet.breed);\nvar people = [\n    {\n        name: \"Robert\",\n        age: 41\n    },\n    {\n        name: \"Afrah\",\n        age: 25\n    },\n    {\n        name: \"Jeremiah\",\n        age: 8\n    },\n    {\n        name: \"Brooke\",\n        age: 9\n    },\n    {\n        name: \"Camille\",\n        age: 15\n    }\n];\nfor (var i = 0; i < people.length; i++) {\n    checkAge(people[i].name, people[i].age);\n}\nfunction getLength(word) {\n    return word.length;\n}\nvar stringLength = getLength(\"hello\");\nif (stringLength % 2 === 0) {\n    console.log(\"Today is a good day \");\n}\nelse {\n    console.log('Today could be a bad bad day!');\n}\n\n\n//# sourceURL=webpack://kitchensink/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;