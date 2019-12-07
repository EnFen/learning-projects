import { Fruit } from './Interfaces';

// ***** TYPES *****
// Boolean
const isOpen: boolean = false;

// String
const userName: string = "Gerald";

// Number
const userAge: number = 35;

// Array
const list: number[] = [0, 1, 2];

// Tuple - array with consistent structure
// i.e.the number and types of elements in the array are the same as declared
const gerald: [string, number] = ["Gerald", 35];

// Enumerable
// first define enumerable object
enum Job { WebDev, Designer, ProjectManagement }
// then access an enumerable element as follows:
const jobA: Job = Job.WebDev;
const jobB: Job = Job['1'];

// Any - applies a non-specific type
const fruit: any = "Apple";
const fruitCount: any = 4;

// Other types include null, undefined, never - these may be touched on later

// ***** FUNCTIONS *****
// type definitions can be supplied for function arguments, return type
// '?' used on arguments which can be supplied optionally
const sayFirstWord = (word?: string): string => {
	console.log(word || "Hello");
	return word || "Hello";
}
// default arguments can be supplied instead of optional arguments, with a '=' and the default value
// Note that the type of the default value is implicitly accepted as the type definition for the argument
const saySecondWord = (word = "G'Day"): string => {
	console.log(word);
	return word;
}
// like JavaScript, 'rest' arguments can be passed using '...' which supplies any number of other arguments as an array
// types can be defined to make expectations about these rest arguments and return values which use them explicit 
const sayThirdWord = (word = "Hey", ...otherArgs: string[]): string[] => {
	console.log(otherArgs);
	return otherArgs;
}
// functions using named arguments will be covered later in 'Interfaces'

sayFirstWord();
saySecondWord();
sayThirdWord('', "There");

// ***** IMPLICIT TYPES *****
// when declaring variables (such as with 'let'), 
// typeScript implicitly infers the variable type from the initially assigned type when the variable is declared
let newName = "Bob";
// this works, because the modified variable has the same type as that originally assigned...
newName = "Ken";
// this does not
// newName = 10;
// Note that explicit types using ":", (e.g. :string) can also be used on 'let'
// and may still be the best option when passing the variable between modules for example.

// Implicitly assigned types stil work when assigning an already declared variable to another
let newerName = newName;
// Once again, this will work...
newerName = "Pam";
// this will not
// newerName = 20;

// ***** UNION TYPES *****
// Union types can be defined using '|'
let newestName: string | number | boolean = "Jon";
// with union types defined, both the following will work
newestName = 10;
newestName = false;

// Note that if this variable is implicitly assigned to another variable,
// only the last assigned type applies, so...
let newStatus = newestName;
// this will work
newStatus = true;
// whereas these will not
// newStatus = "fine";
// newStatun = 20;
// to avoid this, union types must be explicitly provided for any new variables which use previously declared ones.

// A USE CASE FOR UNION TYPES
const makeMargin = (x: string | number): string => {
	return `margin: ${x}px;`
}

// in this case, both of these will work (and should be accepted to return a string value)...
makeMargin(10);
makeMargin("10");
// but correctly, this will not
// makeMargin(false);

// ***** NULL & UNDEFINED TYPES *****
// Assume we define a variable without a type, or initial assignment
let dog;
// this can be redefined as any type...
dog = "Rex";
dog = 3;
dog = true;
// even though we may only want it to be only of the 'string' or 'undefined' type
// We can do this simply by defining the type as 'string', 
// even though an initial assignment is ommitted, making the value and type 'undefined'
// this is becouse the 'undefined' and 'null' types are implicit for all types in addition to any explicit definition
// so...
let cat: string;
// these will work...
cat = "Mittens";
cat = undefined;
cat = null;
// whereas these will not
// cat = 3
// cat = false
// to change this behaviour, typescript can be configured to use 'strict null check', 
// which will mean that 'null' and 'undefined' can only be explicitly defined as with other types

// ***** INTERFACES *****
// inte4rfaces define the shape that passed arguments should have
//  this allows for features such as named parameters, which can be passed in any order to a function for example
interface Human {
	name: string;
	age?: number;
}

const sayName = ({ name, age }: Human): string => {
	console.log(name);
	return name;
}

// not that the following functions can be called with the arguments in any order 
sayName({
	name: "Gerald",
	age: 35
});

sayName({
	age: 28,
	name: "Marion"
});

// Interfaces can naturally be used to define data types returned from a function
const describeHuman = ({ name, age }: Human): Human => {
	console.log(`${name} is ${age} years old`);
	return { name, age };
}

describeHuman({
	name: "Fran",
	age: 50
})

// ***** ENUMS *****
// enumerables define strict lists or collections of constants
// there are two types:
// Numeric enums
enum contentType {
	Video,
	BlogPost,
	Quiz
}
// note that this console.log prints a number, 
// representing the 'index' of the requested item in the enumerable object
console.log(contentType.Quiz)
// this needs to be considered when using enums in functions, for example:
const createContent = (contentType: contentType) => {
	console.log(contentType)
}
// Accessing the 'Video' item in the enum will not work like this...
// createContent('Video')
// but can be accessed in one of the following two ways
createContent(0)
createContent(contentType.Video)
// both return a number - numeric enums

// Referenced Enums
// In a referenced enum, we can assign values to items;
// in this case, we are defining constants, so they have been capitalised
// Note that the values can be of any type that is 'not computed' including strings, numbers, and floats, but not 'true' or 'false' booleans (which are computed to 1/0), objects or arrays, or named variables 
enum contentType2 {
	Video = "VIDEO",
	BlogPost = "BLOG_POST",
	Quiz = "QUIZ"
}
// note that this console.log prints the value, of the of the requested item in the enumerable object
console.log(contentType2.Quiz)
// this needs to be considered when using enums in functions, for example:
const createContent2 = (contentType: contentType2) => {
	console.log(contentType)
}
// With referenced enums, accessing the 'Video' item will not work using either of these methods...
// createContent('VIDEO')
// createContent2(0)
// but can only be accessed using the named reference
createContent2(contentType2.Video)

// ***** CLASSES *****
// Typescript classes work very similarly to standard classes in Javascript, 
// but allows for type definitions much like in other typescript functions
class Team {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	score(): string {
		console.log('Gooooal!');
		return 'goal';
	}
}

const redWings = new Team('Red Wings');
redWings.score();

// some of the differences in typescript classes include property or method modifiers, such as 'private', or 'readOnly'
class Animal {
	public mealsEaten: number; // public properties can be accessed from inside or outside the class (and can be defined with or without the 'public' keyword)
	private name: string; // prevents use of property outside the class
	readonly scientificName: string; // prevents property from being changed

	constructor(name: string, scientificName: string) {
		this.name = name;
		this.scientificName = scientificName;
		this.mealsEaten = 0;
	}

	makesSound(): string {
		console.log(`${this.name} makes a sound`);
		return 'goal';
	}

	changeName(): string {
		// note that after initially setting the 'scientificName' property,
		// attempts to change it result in an error; 
		// This is because the property is set to read-only
		// this.scientificName = 'Littleus-Banditus';
		return this.scientificName;
	}
}

const raccoon = new Animal('Rocky', 'Trashus-Panderus');
raccoon.makesSound();
// note that this will throw an error because the 'name' property has private scope modifier
// raccoon.name;

// ***** MODULES *****

// to better organise code, modules can be used;
// for example, the 'Fruit' interface is defined in another file and imported here as a module
const sayFruit = ({ name, shape }: Fruit): string => {
	console.log(`Would you like a ${shape} ${name}?`);
	return name;
}

sayFruit({ name: 'apple', shape: 'round' });
// This is not too much different to JavaScript, but
// it is a good idea for interfaces, enums and other definitions to be included in their own files

// ***** GENERIC TYPES *****
// Generic types define types to tell a script what types should be used and where,
// without assigning a specific name to the type for example;
// The following function uses a generic type, defined before any arguments are passed 
// Note: generic types are often denoted 'T' to represent 'Type', but could be anything
const inputOutput = <T>(arg: T): T => {
	return arg;
}
// Here, <T> defines a generic type, which is used by the arguments being passed to the function, and is returned by the function
// With generic types, functions will employ typescript rules to enforce types, but the specific type used is only applied when the function is called, e.g.
inputOutput("Hello");
// and 
inputOutput(14);
// both 'work' without throwing errors, even though one was called with a string, and the other was called with a number.
// The 'type' passed in both functions must be the same as the 'type' returned, as defined by the generic 'T', but no specific type definition is required.

// ***** Duck Typing *****
// ...Something that looks and feels like something else, probably is...
// consider the following implementation of 'Human':
class Dancer implements Human {
	name: string;
	age?: number;
}
// We instantiate a new Dancer, without properties
let Astaire: Human = new Dancer()
// Then we define an object 'fake', which looks a lot like a 'Human'
const fake = {
	name: "Joe",
	year: 1930
}
// If we now set 'Astaire's' properties to 'fake', typescript does not throw an error, 
// since the necessary properties of 'Human' have been satisfied, even though the overarching type is different
Astaire = fake;