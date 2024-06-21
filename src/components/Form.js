import React, { useState, useEffect } from "react";
import { fetchAdditionalQuestions } from "../services/apiService";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import ConditionalSection from "./ConditionalSection";
import AdditionalQuestions from "./AdditionalQuestions";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [surveyTopic, setSurveyTopic] = useState("");
  const [favoriteLanguage, setFavoriteLanguage] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [exerciseFrequency, setExerciseFrequency] = useState("");
  const [dietPreference, setDietPreference] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [feedback, setFeedback] = useState("");
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    surveyTopic: "",
    technologySection: "",
    healthSection: "",
    educationSection: "",
    feedback: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    const errorsCopy = { ...errors };

    if (!fullName) {
      errorsCopy.fullName = "Full Name is required.";
    } else {
      errorsCopy.fullName = "";
    }

    if (!email) {
      errorsCopy.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorsCopy.email = "Email is invalid.";
    } else {
      errorsCopy.email = "";
    }

    if (!surveyTopic) {
      errorsCopy.surveyTopic = "Survey Topic is required.";
    } else {
      errorsCopy.surveyTopic = "";
    }

    if (surveyTopic === "Technology") {
      if (!favoriteLanguage) {
        errorsCopy.technologySection =
          "Favorite Programming Language is required.";
      } else {
        errorsCopy.technologySection = "";
      }

      if (!yearsOfExperience) {
        errorsCopy.technologySection += " Years of Experience is required.";
      } else if (isNaN(yearsOfExperience) || yearsOfExperience <= 0) {
        errorsCopy.technologySection +=
          " Years of Experience must be a valid number.";
      }
    }

    if (surveyTopic === "Health") {
      if (!exerciseFrequency) {
        errorsCopy.healthSection = "Exercise Frequency is required.";
      } else {
        errorsCopy.healthSection = "";
      }

      if (!dietPreference) {
        errorsCopy.healthSection += " Diet Preference is required.";
      } else {
        errorsCopy.healthSection = "";
      }
    }

    if (surveyTopic === "Education") {
      if (!highestQualification) {
        errorsCopy.educationSection = "Highest Qualification is required.";
      } else {
        errorsCopy.educationSection = "";
      }

      if (!fieldOfStudy) {
        errorsCopy.educationSection += " Field of Study is required.";
      } else {
        errorsCopy.educationSection = "";
      }
    }

    if (!feedback || feedback.length < 50) {
      errorsCopy.feedback =
        "Feedback is required and must be at least 50 characters.";
    } else {
      errorsCopy.feedback = "";
    }

    // Set errors state
    setErrors(errorsCopy);

    // If no errors, proceed with form submission
    if (
      !errorsCopy.fullName &&
      !errorsCopy.email &&
      !errorsCopy.surveyTopic &&
      !errorsCopy.technologySection &&
      !errorsCopy.healthSection &&
      !errorsCopy.educationSection &&
      !errorsCopy.feedback
    ) {
      try {
        const additionalQuestions = await fetchAdditionalQuestions(surveyTopic);
        setAdditionalQuestions(additionalQuestions);
        console.log("Form Submitted:", {
          fullName,
          email,
          surveyTopic,
          favoriteLanguage,
          yearsOfExperience,
          exerciseFrequency,
          dietPreference,
          highestQualification,
          fieldOfStudy,
          feedback,
          additionalQuestions,
        });

        // You can further process the form data here (e.g., send to backend)
      } catch (error) {
        console.error("Error fetching additional questions:", error);
      }
    }
  };

  useEffect(() => {
    if (surveyTopic) {
      fetchAdditionalQuestions(surveyTopic)
        .then((questions) => {
          setAdditionalQuestions(questions);
        })
        .catch((error) => {
          console.error("Error fetching additional questions:", error);
          // Handle API fetch error (e.g., set state to show error message)
        });
    }
  }, [surveyTopic]);

  return (
    <form onSubmit={handleFormSubmit}>
      <InputField
        id="fullName"
        label="Full Name:"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      {errors.fullName && <span className="error">{errors.fullName}</span>}

      <InputField
        id="email"
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {errors.email && <span className="error">{errors.email}</span>}

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
      />
      {errors.surveyTopic && (
        <span className="error">{errors.surveyTopic}</span>
      )}

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
      />
      {errors.technologySection && (
        <span className="error">{errors.technologySection}</span>
      )}
      {errors.healthSection && (
        <span className="error">{errors.healthSection}</span>
      )}
      {errors.educationSection && (
        <span className="error">{errors.educationSection}</span>
      )}

      <TextAreaField
        id="feedback"
        label="Feedback (at least 50 characters):"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        minLength={50}
        required
      />
      {errors.feedback && <span className="error">{errors.feedback}</span>}

      {additionalQuestions.length > 0 && (
        <AdditionalQuestions questions={additionalQuestions} />
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
