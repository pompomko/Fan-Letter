import React from "react";

import styled from "styled-components";

function NavBox(props) {
  return (
    <NavBox1>
      <Title>{props.Title}</Title>
    </NavBox1>
  );
}
const NavBox1 = styled.div`
  width: 100px;
  height: 100px;
  border: 3px solid red;
  color: red;
`;
const Title = styled.h1`
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;
export default NavBox;
