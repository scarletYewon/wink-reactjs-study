<<<<<<< Updated upstream
import React, { Component } from "react";
import MyName from "./MyName";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
=======
import React, { useState } from "react";
import Header from "./Component/Details/Header";
import Problem from "./Component/Problem/Problem";

const App = () => {
  const [num, setNum] = useState(0);
  const [problems, setProblems] = useState([
    {
      title: "문제 제목1",
      content: "문제 내용1",
      answer: "문제 정답1"
    },
    {
      title: "문제 제목2",
      content: "문제 내용2",
      answer: "문제 정답2"
    },
    {
      title: "문제 제목3",
      content: "문제 내용3",
      answer: "문제 정답3"
    },
    {
      title: "문제 제목4",
      content: "문제 내용4",
      answer: "문제 정답4"
    },
    {
      title: "문제 제목5",
      content: "문제 내용5",
      answer: "문제 정답5"
    }
  ]);
  const getData = (num) => {
    if(0 <= num && num < problems.length) {
      setNum(num);
    }
  };

  return (
    <div>
      <Header num={num} title={problems[num].title} getData={getData}/>
      <Problem title={problems[num].title} content={problems[num].content} answer={problems[num].answer} />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
