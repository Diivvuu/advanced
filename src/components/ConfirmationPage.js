import React, { useEffect, useState } from "react";
import { fetchAdditionalQuestions } from "../services/apiService";
import TextAreaField from "./TextAreaField"; // Import the TextAreaField component

const ConfirmationPage = ({ data }) => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await fetchAdditionalQuestions(data.surveyTopic);
        setAdditionalQuestions(questions);
        // Initialize answers object with empty strings for each question
        const initialAnswers = {};
        questions.forEach((question) => {
          initialAnswers[question] = "";
        });
        setAnswers(initialAnswers);
      } catch (error) {
        console.error("Error fetching additional questions:", error);
        setAdditionalQuestions([]);
      }
    };

    fetchQuestions();
  }, [data.surveyTopic]);

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmitAnswers = () => {
    // Handle submission of answers if needed (e.g., send to server)
    console.log("Answers:", answers);
    // Example: Send answers to server, update state, etc.
  };

  return (
    <div>
      <h2>Submitted Data</h2>
      <p>
        <strong>Full Name:</strong> {data.fullName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Survey Topic:</strong> {data.surveyTopic}
      </p>
      {data.surveyTopic === "Technology" && (
        <>
          <p>
            <strong>Favorite Programming Language:</strong>{" "}
            {data.favoriteLanguage}
          </p>
          <p>
            <strong>Years of Experience:</strong> {data.yearsOfExperience}
          </p>
        </>
      )}
      {data.surveyTopic === "Health" && (
        <>
          <p>
            <strong>Exercise Frequency:</strong> {data.exerciseFrequency}
          </p>
          <p>
            <strong>Diet Preference:</strong> {data.dietPreference}
          </p>
        </>
      )}
      {data.surveyTopic === "Education" && (
        <>
          <p>
            <strong>Highest Qualification:</strong> {data.highestQualification}
          </p>
          <p>
            <strong>Field of Study:</strong> {data.fieldOfStudy}
          </p>
        </>
      )}
      <p>
        <strong>Feedback:</strong> {data.feedback}
      </p>

      {additionalQuestions.length > 0 && (
        <>
          <h3>Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <div key={index}>
              <label>{question}</label>
              <TextAreaField
                value={answers[question]}
                onChange={(e) => handleAnswerChange(question, e.target.value)}
                minLength={10} // Example: Minimum length validation
                required // Example: Required field
              />
            </div>
          ))}
          <button onClick={handleSubmitAnswers}>Submit Answers</button>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;
