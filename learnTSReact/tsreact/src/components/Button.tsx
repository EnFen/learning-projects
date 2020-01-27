import React from 'react';

type Props = {
	// onclick(): string // method returns 'string'
	// onClick(): void // method returns 'void' (i.e. no return value)
	// onClick(param: string): void // Method with params
	// onClick: () => void // this 'typing' reads not as a method, but as a property, which is a function, that returns void
	// onClick: (param: string) => void // same as above, but includes passed params
	// onClick: (e: React.MouseEvent) => void // this time, the parameter is an 'event'; in this case, a React event. The event is typed, generically, as a 'MouseEvent'
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // same as above, but this more specifically identifies the event as a button click
	// onChange?: (e: React.FormEvent<HTMLInputElement>) => void // another common example of a typed React event. NOTE that {MouseEvent, FormEvent} etc can be imported along with React so that they don't have to be expressed as properties of React in-line. i.e. 'FormEvent' rather than 'React.FormEvent'
	// children: string // typing children in this way is fine if the children are a primitive, but is more complicated when the children are other HTML elements 
	// Instead of the above 'Props' can be wrapped in the Functional Component type (part of the React module) as React.FC<Props> in which 'children' is already an implicit HTML property, so doesn't require complex typing

}

export const Button: React.FC<Props> = ({ onClick, children }) => {
	return (
		<button onClick={onClick}>{children}</button>
	)
}
