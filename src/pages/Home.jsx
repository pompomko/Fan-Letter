import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TestPage from "components/TestPage";
import NavBox from "components/NavBox";
// const NavBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 3px solid red;
//   color: red;
// `;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBox title="네브박스 적용확인" />

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
