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
    <div className="max-w-md mx-auto mt-8 p-6 bg-bomb-blast-gray rounded-lg shadow-bomb-blast">
      <h2 className="text-2xl text-bomb-blast-yellow mb-4">Submitted Data</h2>
      <p className="text-bomb-blast-white">
        <strong>Full Name:</strong> {data.fullName}
      </p>
      <p className="text-bomb-blast-white">
        <strong>Email:</strong> {data.email}
      </p>
      <p className="text-bomb-blast-white">
        <strong>Survey Topic:</strong> {data.surveyTopic}
      </p>
      {data.surveyTopic === "Technology" && (
        <>
          <p className="text-bomb-blast-white">
            <strong>Favorite Programming Language:</strong>{" "}
            {data.favoriteLanguage}
          </p>
          <p className="text-bomb-blast-white">
            <strong>Years of Experience:</strong> {data.yearsOfExperience}
          </p>
        </>
      )}
      {data.surveyTopic === "Health" && (
        <>
          <p className="text-bomb-blast-white">
            <strong>Exercise Frequency:</strong> {data.exerciseFrequency}
          </p>
          <p className="text-bomb-blast-white">
            <strong>Diet Preference:</strong> {data.dietPreference}
          </p>
        </>
      )}
      {data.surveyTopic === "Education" && (
        <>
          <p className="text-bomb-blast-white">
            <strong>Highest Qualification:</strong> {data.highestQualification}
          </p>
          <p className="text-bomb-blast-white">
            <strong>Field of Study:</strong> {data.fieldOfStudy}
          </p>
        </>
      )}
      <p className="text-bomb-blast-white">
        <strong>Feedback:</strong> {data.feedback}
      </p>

      {additionalQuestions.length > 0 && (
        <>
          <h3 className="text-xl text-bomb-blast-yellow mt-4 mb-2">Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <div key={index} className="mb-4">
              <label className="block mb-1 text-bomb-blast-yellow">{question}</label>
              <TextAreaField
                value={answers[question]}
                onChange={(e) => handleAnswerChange(question, e.target.value)}
                minLength={10} // Example: Minimum length validation
                required // Example: Required field
              />
            </div>
          ))}
          <button
            onClick={handleSubmitAnswers}
            className="bg-bomb-blast-red hover:bg-bomb-blast-orange text-bomb-blast-white py-2 px-4 rounded w-full mt-4"
          >
            Submit Answers
          </button>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;
