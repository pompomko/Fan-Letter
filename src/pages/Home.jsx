import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home 이게 메인화면
      <br />
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        상세페이지로 이동
      </button>
    </div>
  );
}

export default Home;
