import React from "react";
import "./styles.css";
import quizData from "./data.js";

let dataObj = quizData;

function mean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function average(data) {
  let firstNames1 = data.quizzes.scores1.first;
  let lastNames1 = data.quizzes.scores1.last;
  let firstNames2 = data.quizzes.scores2.first;
  let lastNames2 = data.quizzes.scores2.last;

  let scores1 = data.quizzes.scores1.score;
  let scores2 = data.quizzes.scores2.score;

  let arr1 = [
    `${data.quizzes.quiz1}: ${mean(scores1)}, Max: ${Math.max(...scores1)} (${
      lastNames1[scores1.indexOf(Math.max(...scores1))]
    }, ${firstNames1[scores1.indexOf(Math.max(...scores1))]}), Min: ${Math.min(
      ...scores1
    )} (${lastNames1[scores1.indexOf(Math.min(...scores1))]}, ${
      firstNames1[scores1.indexOf(Math.min(...scores1))]
    })`
  ];
  let arr2 = [
    `${data.quizzes.quiz2}: ${mean(scores2)}, Max: ${Math.max(...scores2)} (${
      lastNames2[scores2.indexOf(Math.max(...scores2))]
    }, ${firstNames2[scores2.indexOf(Math.max(...scores2))]}), Min: ${Math.min(
      ...scores2
    )} (${lastNames2[scores2.indexOf(Math.min(...scores2))]}, ${
      firstNames2[scores2.indexOf(Math.min(...scores2))]
    })`
  ];

  return [arr1, arr2];
}

function averageJSX(data) {
  return (
    <div>
      <p className="QuizRowOdd">{average(data)[0]}</p>
      <p className="QuizRowEven">{average(data)[1]}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2> Assignment 1 - JSX</h2>
      <h3> Quiz Results </h3>
      {averageJSX(dataObj)}
    </div>
  );
}
