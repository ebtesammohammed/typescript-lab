const myPreviousPositions:  {company: string, title: string, description: string}[] = [
    {
        company: "Top-Golf",
        title: "Bayhost",
        description: "help customers sign into bays"
    },
    {
        company: "Empire",
        title: "Bartending",
        description: "Serve customers with drinks"
    },
    {
        company: "Alabama Department of Correction",
        title: "Officer",
        description: "find contourbands"
    }
];
const mySkills: {skill: string, cool: boolean}[] = [
    {
        skill: "Team work",
        cool: true
    },
    {
        skill: "Networking",
        cool: true
    },
    {
        skill: "Very obsorvant",
        cool: false
    },
    {
        skill: "Talking lots",
        cool: false
    }
];
const myInterests: string[] = ["movies", "Shopping", "Gambling", "partying"];

console.log(
    "Name: " + "Ebtesam Mohammed".toUpperCase()
    + "\n" +
    "Career: Student / Birmingham Innovation"
    + "\n" +
    "Description: I like my class"
);

console.log("\n");
console.log("My Interests:");
for (const interest of myInterests) {
    console.log("* " + interest);
}

console.log("\n");
console.log("My Previous Experience:");
myPreviousPositions.forEach(function (element) {
    displayPosition(element.company, element.title, element.description);
});

console.log("\n");
console.log("My Skills:");
mySkills.forEach(function (element) {
    displaySkill(element.skill, element.cool)
});

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
    console.log("* " + jobTitle + " at " + companyName + ". And I " + jobDescription);
}

function displaySkill(skill: string, isCool: boolean) {
    if (isCool) {
        console.log(skill);
    } else {
        console.log(skill);
    }
}