import React, { useState, useRef } from "react";

export const Input = () => {
  // NOTE that this component uses the react hook 'useState'
  const [name, setName] = useState(""); // Uses TS's implicit typing to infer that an 'input' will return a string, so defult "" does not throw an error
  // const [name, setName] = useState<string | null>(""); // using the <> syntax, this allows the passing of explicit allowed types (in this case, string OR null as a union)
  // const [name, setName] = useState<string>(""); // same as above, but won't throw an error

  // //Read only ref's
  //   const ref = useRef<HTMLInputElement>(null!); // The addition of the '!' to the null implies that the HTMLInputElement is 'readonly' once set
  // //const ref = useRef<HTMLInputElement | null>(null); // Alternatively, the ref could be set to 'mutable', with a union type for example
  // // Even with a read only ref, the following 'if' statement needs to be included to avoid a render error:
  //   if (ref && ref.current) {
  //     console.log("REF", ref.current.value);
  //   }

  // // The 'clean' alternative to the above (as of TS v3.7 and react v3.3) is to use optional chaining:
  const ref = useRef<HTMLInputElement>(null);

  console.log("REF", ref?.current?.value); // Here, the '?' marks indicate the optional chaining, and represents a 'check' to see if 'ref' exists before accesing its properties, and likewise for 'current'

  // A final way to approach this is to disable 'strictNullCheck' in the tsconfig file

  return (
    <input ref={ref} value={name} onChange={e => setName(e.target.value)} />
  );
};
