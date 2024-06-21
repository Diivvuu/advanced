import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ConditionalSection = ({
  surveyTopic,
  favoriteLanguage,
  setFavoriteLanguage,
  yearsOfExperience,
  setYearsOfExperience,
  exerciseFrequency,
  setExerciseFrequency,
  dietPreference,
  setDietPreference,
  highestQualification,
  setHighestQualification,
  fieldOfStudy,
  setFieldOfStudy,
}) => {
  if (surveyTopic === "Technology") {
    return (
      <div>
        <SelectField
          id="favoriteLanguage"
          label="Favorite Programming Language:"
          value={favoriteLanguage}
          onChange={(e) => setFavoriteLanguage(e.target.value)}
          options={[
            { value: "", label: "Select Language" },
            { value: "JavaScript", label: "JavaScript" },
            { value: "Python", label: "Python" },
            { value: "Java", label: "Java" },
            { value: "C#", label: "C#" },
          ]}
          required
        />
        <InputField
          id="yearsOfExperience"
          label="Years of Experience:"
          type="number"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(parseInt(e.target.value))}
          required
        />
      </div>
    );
  }

  if (surveyTopic === "Health") {
    return (
      <div>
        <SelectField
          id="exerciseFrequency"
          label="Exercise Frequency:"
          value={exerciseFrequency}
          onChange={(e) => setExerciseFrequency(e.target.value)}
          options={[
            { value: "", label: "Select Frequency" },
            { value: "Daily", label: "Daily" },
            { value: "Weekly", label: "Weekly" },
            { value: "Monthly", label: "Monthly" },
            { value: "Rarely", label: "Rarely" },
          ]}
          required
        />
        <SelectField
          id="dietPreference"
          label="Diet Preference:"
          value={dietPreference}
          onChange={(e) => setDietPreference(e.target.value)}
          options={[
            { value: "", label: "Select Preference" },
            { value: "Vegetarian", label: "Vegetarian" },
            { value: "Vegan", label: "Vegan" },
            { value: "Non-Vegetarian", label: "Non-Vegetarian" },
          ]}
          required
        />
      </div>
    );
  }

  if (surveyTopic === "Education") {
    return (
      <div>
        <SelectField
          id="highestQualification"
          label="Highest Qualification:"
          value={highestQualification}
          onChange={(e) => setHighestQualification(e.target.value)}
          options={[
            { value: "", label: "Select Qualification" },
            { value: "High School", label: "High School" },
            { value: "Bachelor's", label: "Bachelor's" },
            { value: "Master's", label: "Master's" },
            { value: "PhD", label: "PhD" },
          ]}
          required
        />
        <InputField
          id="fieldOfStudy"
          label="Field of Study:"
          type="text"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          required
        />
      </div>
    );
  }

  return null;
};

export default ConditionalSection;
