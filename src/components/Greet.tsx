import React, { useState } from "react";

const Greet = () => {
  const [input, setInput] = useState("value");
  return (
    <>
      <h1>Hash Router Tests.</h1>
      <h2>Web-Page.</h2>
      <h2>Github.io page</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>
        {input} <nav> One nav </nav>
      </p>
    </>
  );
};

export default Greet;
