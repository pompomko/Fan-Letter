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
        :{""}
        <input
          type="text"
          value={star}
          onChange={handleChange}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
        <br />
        {star}
      </div>
    </>
  );
}

export default TextInput;
