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

eval("\nvar myPreviousPositions = [\n    {\n        company: \"Top-Golf\",\n        title: \"Bayhost\",\n        description: \"help customers sign into bays\"\n    },\n    {\n        company: \"Empire\",\n        title: \"Bartending\",\n        description: \"Serve customers with drinks\"\n    },\n    {\n        company: \"Alabama Department of Correction\",\n        title: \"Officer\",\n        description: \"find contourbands\"\n    }\n];\nvar mySkills = [\n    {\n        skill: \"Team work\",\n        cool: true\n    },\n    {\n        skill: \"Networking\",\n        cool: true\n    },\n    {\n        skill: \"Very obsorvant\",\n        cool: false\n    },\n    {\n        skill: \"Talking lots\",\n        cool: false\n    }\n];\nvar myInterests = [\"movies\", \"Shopping\", \"Gambling\", \"partying\"];\nconsole.log(\"Name: \" + \"Ebtesam Mohammed\".toUpperCase()\n    + \"\\n\" +\n    \"Career: Student / Birmingham Innovation\"\n    + \"\\n\" +\n    \"Description: I like my class\");\nconsole.log(\"\\n\");\nconsole.log(\"My Interests:\");\nfor (var _i = 0, myInterests_1 = myInterests; _i < myInterests_1.length; _i++) {\n    var interest = myInterests_1[_i];\n    console.log(\"* \" + interest);\n}\nconsole.log(\"\\n\");\nconsole.log(\"My Previous Experience:\");\nmyPreviousPositions.forEach(function (element) {\n    displayPosition(element.company, element.title, element.description);\n});\nconsole.log(\"\\n\");\nconsole.log(\"My Skills:\");\nmySkills.forEach(function (element) {\n    displaySkill(element.skill, element.cool);\n});\nfunction displayPosition(companyName, jobTitle, jobDescription) {\n    console.log(\"* \" + jobTitle + \" at \" + companyName + \". And I \" + jobDescription);\n}\nfunction displaySkill(skill, isCool) {\n    if (isCool) {\n        console.log(skill);\n    }\n    else {\n        console.log(skill);\n    }\n}\n\n\n//# sourceURL=webpack:///./app.ts?");

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