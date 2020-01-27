import React from 'react';

// --- Proposed props
// title
// isActive

// --- The 'old' (React w/o TS) way of declaring types:
// Head.propTypes = {
// 	title: Proptypes.string,
// 	isActive: Proptypes.bool
// }

// --- The 'TS' way to declare types
type Props = {
	title: string, // required
	isActive?: boolean // optional
};
// Note how we assign the types to the passed props after destructuring using the 'Props' type

// --- The 'old' way to declare default props:
// Head.defaultProps = {
// 	title: "Hello",
// 	isActive: true 
// }

// --- The 'TS' way to declare default props:
// Assign default parameters in destructuring using an '=' sign. NOTE: this can now be performed in normal React too
// See that a declaration of defaultProps is no longer required.

// --- The 'TS' way of passing optional props
// In React, all props are optional, and a prop needs to be explicitly specified if 'required'
// TS switches this logic, instead making any declared props required, and optional props explicitly required.
// This is done by including a '?' after any optional props in the 'Props' type declaration

// --- Other basic types
// Note: there are more advanced, React specific types which will be explored at a later time
type TypeScriptTypes = {
	myString: string,
	myNum: number,
	myBool: boolean,
	myArray: string[], // Array of string in this case
	myTuple: [string, number], // Array containing a specific number of types in a specific order
	myObject: {} // empty object
	myObject2: {
		field1: string,
		field2: boolean
	}, // object with known fields 
	myObject3: User, // reference to a named object declared elsewhere
	myUnion1: string | number, // defines the two possible types which could be assigned to the variable
	myUnion2: "condition1" | "condition2", // defines the two possible strings which could be assigned to the variable
	myFunc1: Function,
	myFunc2(): string, // defines a function, and its returned type (in this case, 'string')
	myFunc3: () => void // defines a function, and its returned type (in this case, 'void')

};

type User = {
	name: string,
	age: number
}

export const Head = ({ title, isActive = true }: Props) => {
	return (
		<div>
			<h1>{title}</h1>
			{isActive &&
				<h3>Active</h3>
			}
		</div>
	)
}
