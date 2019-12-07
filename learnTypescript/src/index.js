"use strict";
exports.__esModule = true;
var isOpen = false;
var userName = "Gerald";
var userAge = 35;
var list = [0, 1, 2];
var gerald = ["Gerald", 35];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["Designer"] = 1] = "Designer";
    Job[Job["ProjectManagement"] = 2] = "ProjectManagement";
})(Job || (Job = {}));
var jobA = Job.WebDev;
var jobB = Job['1'];
var fruit = "Apple";
var fruitCount = 4;
var sayFirstWord = function (word) {
    console.log(word || "Hello");
    return word || "Hello";
};
var saySecondWord = function (word) {
    if (word === void 0) { word = "G'Day"; }
    console.log(word);
    return word;
};
var sayThirdWord = function (word) {
    if (word === void 0) { word = "Hey"; }
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    console.log(otherArgs);
    return otherArgs;
};
sayFirstWord();
saySecondWord();
sayThirdWord('', "There");
var newName = "Bob";
newName = "Ken";
var newerName = newName;
newerName = "Pam";
var newestName = "Jon";
newestName = 10;
newestName = false;
var newStatus = newestName;
newStatus = true;
var makeMargin = function (x) {
    return "margin: " + x + "px;";
};
makeMargin(10);
makeMargin("10");
var dog;
dog = "Rex";
dog = 3;
dog = true;
var cat;
cat = "Mittens";
cat = undefined;
cat = null;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({
    name: "Gerald",
    age: 35
});
sayName({
    age: 28,
    name: "Marion"
});
var describeHuman = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name + " is " + age + " years old");
    return { name: name, age: age };
};
describeHuman({
    name: "Fran",
    age: 50
});
var contentType;
(function (contentType) {
    contentType[contentType["Video"] = 0] = "Video";
    contentType[contentType["BlogPost"] = 1] = "BlogPost";
    contentType[contentType["Quiz"] = 2] = "Quiz";
})(contentType || (contentType = {}));
console.log(contentType.Quiz);
var createContent = function (contentType) {
    console.log(contentType);
};
createContent(0);
createContent(contentType.Video);
var contentType2;
(function (contentType2) {
    contentType2["Video"] = "VIDEO";
    contentType2["BlogPost"] = "BLOG_POST";
    contentType2["Quiz"] = "QUIZ";
})(contentType2 || (contentType2 = {}));
console.log(contentType2.Quiz);
var createContent2 = function (contentType) {
    console.log(contentType);
};
createContent2(contentType2.Video);
var Team = (function () {
    function Team(name) {
        this.name = name;
    }
    Team.prototype.score = function () {
        console.log('Gooooal!');
        return 'goal';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
var Animal = (function () {
    function Animal(name, scientificName) {
        this.name = name;
        this.scientificName = scientificName;
        this.mealsEaten = 0;
    }
    Animal.prototype.makesSound = function () {
        console.log(this.name + " makes a sound");
        return 'goal';
    };
    Animal.prototype.changeName = function () {
        return this.scientificName;
    };
    return Animal;
}());
var raccoon = new Animal('Rocky', 'Trashus-Panderus');
raccoon.makesSound();
var sayFruit = function (_a) {
    var name = _a.name, shape = _a.shape;
    console.log("Would you like a " + shape + " " + name + "?");
    return name;
};
sayFruit({ name: 'apple', shape: 'round' });
