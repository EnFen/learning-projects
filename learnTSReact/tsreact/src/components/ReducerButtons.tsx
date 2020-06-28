import React, { /*useReducer,*/ useRef, useContext } from "react";
import styled from 'styled-components';
import { useClickOutside } from "./useClickOutside";
import { GlobalContext } from "./GlobalState";

// type State = {
//   rValue: boolean;
// };

// // The following describes a way to declare types for Actions if all action 'types' and 'payloads' are similar
// // type Action = {
// //   //   type: string; // Or whatever type is attached to the action 'type'
// //   type: "one" | "two" | "three"; // more explicit than the above; removes possible errors when defining a type
// //   payload?: string; // Or whatever type is attached to the action 'payload'
// // };

// // Alternatively, the following could be used when the types of 'type' and 'payload' were different for each action
// type Action =
//   | { type: "one"; payload?: string }
//   | { type: "two"; payload?: number }
//   | { type: "three"; payload?: boolean };

// // const initialState = { rValue: true };

// function reducer(state: State, action: Action) {
//   switch (action.type) {
//     case "one":
//       return { rValue: true };
//     case "two":
//       return { rValue: false };
//     case "three":
//       return initialState;
//     default:
//       return state;
//   }
// }

export const ReducerButtons = () => {
	// Demonstrates how to use 'useReducer' with typescript and React
	// const [state, dispatch] = useReducer(reducer, initialState);
	// Demonstrates how to use 'useRef' with typescript and React
	const ref = useRef<HTMLDivElement>(null!);
	// Demonstrates how to use 'useContext' with typescript and React
	const { rValue, turnOn, turnOff, reset } = useContext(GlobalContext);

	useClickOutside(ref, () => {
		console.log('Clicked outside')
	});

	return (
		<Wrapper ref={ref}>
			{/* The following line can be sused with 'useReducer' but is unnecessary with 'useContext' */}
			{/* {state?.rValue && <h1>Visible</h1>} */}

			{/* The following line is used with 'useContext' */}
			{rValue && <h1>Visible</h1>}
			{/* <button onClick={() => dispatch({ type: "one" })}>Action One</button>
      <button onClick={() => dispatch({ type: "two" })}>Action Two</button>
      <button onClick={() => dispatch({ type: "three" })}>Action Three</button> */}
			<button onClick={turnOn}>Action One</button>
			<button onClick={turnOff}>Action Two</button>
			<button onClick={reset}>Action Three</button>
		</Wrapper  >
	);
};

const Wrapper = styled.div`
  background: red;
`
