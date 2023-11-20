import React from "react";

import styled from "styled-components";
import TextInput from "./TextInput";
import Input2 from "./Input2";

function MyTestPage(props) {
  return (
    <Wrapper>
      {/* <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents> */}
      <Section>
        <Label htmlFor="Nickname">닉네임</Label>
        <TextInput></TextInput>
      </Section>
      <Section>
        <Label htmlFor="Nickname">내용</Label>
        <Input2></Input2>
      </Section>
    </Wrapper>
  );
}
const Section = styled.section`
  margin-bottom: 10px;
  display: flex;
`;
const Label = styled.label`
  margin-right: 10px;
`;
const Title = styled.h1`
  //   font-family: "Helvetica", "Arial", sans-serif;
  //   line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
`;

const Contents = styled.p`
  margin: 0;
  //   font-family: "Helvetica", "Arial", sans-serif;
  //   line-height: 1.5;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
  /* display: flex; */
`;

export default MyTestPage;
