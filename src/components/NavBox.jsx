import React from "react";

import styled from "styled-components";

function NavBox({ children, title }) {
  return (
    <>
      <NavBox1>
        <Title>
          {title}
          <SubTitle>{children}</SubTitle>
          <SelectBox>
            <AespaList>카리나</AespaList>
            <AespaList>윈터</AespaList>
            <AespaList>닝닝</AespaList>
            <AespaList>지젤</AespaList>
          </SelectBox>
        </Title>
      </NavBox1>
    </>
  );
}
NavBox.defaultProps = {
  title: "그룹명을 입력해주세요",
};
const AespaList = styled.li`
  border: 1px solid red;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 5px;
  width: 80px;
  padding: 3px;
  justify-content: space-between;
  text-align: center;
  background-color: black;
  color: white;
  &:hover {
    background-color: yellow;
    color: black;
  }
  cursor: pointer;
`;
const SelectBox = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  margin-top: 65px;
  border-radius: 8px;
  padding: 10px;
  width: 35vw;
  min-width: 200px;
  background-color: rgb(103, 107, 104);
`;
const SubTitle = styled.h2`
  color: blue;
`;
const NavBox1 = styled.header`
  background-image: url(assets/images/espa.jpg);
  text-align: center;
  display: flex;
  height: 230px;
`;
const Title = styled.h1`
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 30px;
  text-shadow: 2px 2px 4px grey;
  margin-bottom: 8px;
  color: blanchedalmond;
`;
export default NavBox;
