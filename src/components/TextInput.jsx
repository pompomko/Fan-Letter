import React from "react";
import styled from "styled-components";
import { useState } from "react";

function TextInput() {
  const [star, setstar] = useState("");
  const handleChange = (event) => {
    setstar(event.target.value);
  };
  return (
    <>
      <div>
        입력값 :{""}
        <input type="text" value={star} onChange={handleChange} />
        <br />
        {star}
      </div>
    </>
  );
}

export default TextInput;
