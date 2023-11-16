import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import TestPage from "components/TestPage";

function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      Detail요건상세 페이지
      <br />
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        상세페이지로 이동
      </button>
      <h1>상세페이지 글자크기 확인중</h1>
      <TestPage title="에스파 펜레터" contents="아래에 내용을 적어주세요" />
    </div>
  );
}

export default Detail;
