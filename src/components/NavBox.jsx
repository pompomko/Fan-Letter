import React from "react";

import styled from "styled-components";

function NavBox({ children, title }) {
  return (
    <>
      <NavBox1>
        <Title>{title}</Title>

        {children}
      </NavBox1>
    </>
  );
}
NavBox.defaultProps = {
  title: "그룹명을 입력해주세요",
};
const NavBox1 = styled.header`
  background-image: url(assets/images/espa.jpg);
  text-align: center;
  display: flex;
  height: 300px;
`;
const Title = styled.h1`
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 30px;

  margin-bottom: 8px;

  color: blanchedalmond;
`;
export default NavBox;
