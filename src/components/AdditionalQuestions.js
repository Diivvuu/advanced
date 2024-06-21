import React from "react";

const AdditionalQuestions = ({ questions }) => (
  <div>
    <h3>Additional Questions:</h3>
    <ul>
      {questions.map((question, index) => (
        <li key={index}>{question}</li>
      ))}
    </ul>
  </div>
);

export default AdditionalQuestions;
