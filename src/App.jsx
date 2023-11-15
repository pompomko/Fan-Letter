import "./App.css";
import styled from "styled-components";

function Child() {
  //자바스크립트 영역
  // const abc = 1
  const onClickButton = () => {
    alert("클릭!");
  };

  return (
    // JSX문법
    <div
      style={{
        height: "200px",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      여긴Child이것은 내가만든 app컴포넌트
      <button onClick={onClickButton}>클릭!</button>
    </div>
  );
}

function Bhild() {
  return <Child />;
}

function Ahild() {
  return <Bhild />;
}

function App() {
  return (
    <>
      <Ahild />
    </>
  );
}

export default App;
