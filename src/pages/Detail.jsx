import React from "react";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
}

export default Detail;
