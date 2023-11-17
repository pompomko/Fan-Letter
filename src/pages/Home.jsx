import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TestPage from "components/TestPage";
import NavBox from "components/NavBox";
import TextInput from "components/TextInput";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBox title="에스파 펜레터 모음집">'Next Level'</NavBox>
      <TextInput />

      <TestPage
        title="에스파 펜레터d입력창"
        contents="아래에 내용을 적어주세요"
      />
      <br />
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        상세페이지로 이동
      </button>
      <h1>홈페이지 글자크기 확인중</h1>
    </div>
  );
}

export default Home;
