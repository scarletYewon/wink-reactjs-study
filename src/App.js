import React, { useState } from "react";
import Header from "./Component/Details/Header";
import Problem from "./Component/Problem/Problem";
import InputSample from './Answerinput';

const App = () => {
  const [num, setNum] = useState(0);
  const problems = [
    {
      title: "문제 제목1",
      content: "문제 내용1",
      answer: "문제 정답1"
    },
    {
      title: "문제 제목2",
      content: "문제 내용2",
      answer: "문제 정답2"
    }
  ];
  const getData = (num) => {
    if(0 <= num && num < problems.length) {
      setNum(num)
    }
  };


  return (
    <div>
      <Header num={num} title={problems[num].title} getData={getData}/>
      <Problem title={problems[num].title} content={problems[num].content} answer={problems[num].answer} />
      <InputSample />
    </div>
  );
}

export default App;