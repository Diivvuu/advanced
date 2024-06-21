import React, { useState } from "react";
import { fetchAdditionalQuestions } from "../services/apiService";
import InputField from "./InputField";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [surveyTopic, setSurveyTopic] = useState("");

  return (
    <div>
      <form>
        <div>
          <InputField
            id="fullName"
            label="Full Name:"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
