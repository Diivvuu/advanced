import React from "react";

const AdditionalQuestions = ({ questions }) => (
  <div className="mb-4">
    <h3 className="text-xl text-bomb-blast-yellow mb-2">
      Additional Questions:
    </h3>
    <ul className="list-disc list-inside">
      {questions.map((question, index) => (
        <li key={index} className="text-bomb-blast-white">
          {question}
        </li>
      ))}
    </ul>
  </div>
);

export default AdditionalQuestions;
