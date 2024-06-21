import React, { useState, useEffect } from "react";
import { fetchAdditionalQuestions } from "../services/apiService";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import ConditionalSection from "./ConditionalSection";
import ConfirmationPage from "./ConfirmationPage"; // Create this component

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [surveyTopic, setSurveyTopic] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [exerciseFrequency, setExerciseFrequency] = useState("");
  const [dietPreference, setDietPreference] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [feedback, setFeedback] = useState("");
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    const data = {
      fullName,
      email,
      surveyTopic,
      favoriteLanguage: surveyTopic === "Technology" ? favoriteLanguage : "",
      yearsOfExperience: surveyTopic === "Technology" ? yearsOfExperience : "",
      exerciseFrequency: surveyTopic === "Health" ? exerciseFrequency : "",
      dietPreference: surveyTopic === "Health" ? dietPreference : "",
      highestQualification:
        surveyTopic === "Education" ? highestQualification : "",
      fieldOfStudy: surveyTopic === "Education" ? fieldOfStudy : "",
      feedback,
    };
    setSubmittedData(data); // Store submitted data

    try {
      const additionalQuestionsResponse = await fetchAdditionalQuestions(
        surveyTopic
      );
      setAdditionalQuestions(additionalQuestionsResponse.questions || []);
    } catch (error) {
      console.error("Error fetching additional questions:", error);
      setAdditionalQuestions([]);
    }
  };

  useEffect(() => {
    // Fetch additional questions when surveyTopic changes
    const fetchQuestions = async () => {
      try {
        const additionalQuestionsResponse = await fetchAdditionalQuestions(
          surveyTopic
        );
        setAdditionalQuestions(additionalQuestionsResponse.questions || []);
      } catch (error) {
        console.error("Error fetching additional questions:", error);
        setAdditionalQuestions([]);
      }
    };

    if (formSubmitted && surveyTopic) {
      fetchQuestions();
    }
  }, [formSubmitted, surveyTopic]);

  if (formSubmitted) {
    return (
      <ConfirmationPage
        data={submittedData}
        additionalQuestions={additionalQuestions}
      />
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-gray-900 rounded-lg shadow-lg"
    >
      <InputField
        id="fullName"
        label="Full Name:"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        disabled={formSubmitted}
        className="mb-4"
      />

      <InputField
        id="email"
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={formSubmitted}
        className="mb-4"
      />

      <SelectField
        id="surveyTopic"
        label="Survey Topic:"
        value={surveyTopic}
        onChange={(e) => setSurveyTopic(e.target.value)}
        options={[
          { value: "", label: "Select Topic" },
          { value: "Technology", label: "Technology" },
          { value: "Health", label: "Health" },
          { value: "Education", label: "Education" },
        ]}
        required
        disabled={formSubmitted}
        className="mb-4"
      />

      <ConditionalSection
        surveyTopic={surveyTopic}
        favoriteLanguage={favoriteLanguage}
        setFavoriteLanguage={setFavoriteLanguage}
        yearsOfExperience={yearsOfExperience}
        setYearsOfExperience={setYearsOfExperience}
        exerciseFrequency={exerciseFrequency}
        setExerciseFrequency={setExerciseFrequency}
        dietPreference={dietPreference}
        setDietPreference={setDietPreference}
        highestQualification={highestQualification}
        setHighestQualification={setHighestQualification}
        fieldOfStudy={fieldOfStudy}
        setFieldOfStudy={setFieldOfStudy}
        disabled={formSubmitted}
        className="mb-4"
      />

      <TextAreaField
        id="feedback"
        label="Feedback:"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
        disabled={formSubmitted}
        className="mb-4"
      />

      <button
        type="submit"
        disabled={formSubmitted}
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
