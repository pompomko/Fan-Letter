import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Input2() {
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
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
        <br />
        {star}
      </div>
    </>
  );
}

export default Input2;
