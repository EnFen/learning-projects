import React, { useState } from 'react'

export const Input = () => {
	// NOTE that this component uses the react hook 'useState'
	const [name, setName] = useState(""); // Uses TS's implicit typing to infer that an 'input' will return a string, so defult "" does not throw an error
	// const [name, setName] = useState<string | null>(""); // using the <> syntax, this allows the passing of explicit allowed types (in this case, string OR null as a union)
	// const [name, setName] = useState<string>(""); // same as above, but won't throw an error

	return <input value={name} onChange={e => setName(e.target.value)} />

};
