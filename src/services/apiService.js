// Simulated API service (replace with actual API integration)
export const fetchAdditionalQuestions = async (topic) => {
  // Simulate fetching additional questions based on the survey topic
  // Replace with actual API call to fetch questions dynamically
  switch (topic) {
    case "Technology":
      return [
        "What IDE do you prefer?",
        "How do you stay updated with technology trends?",
      ];
    case "Health":
      return [
        "What is your primary health goal?",
        "How often do you visit the gym?",
      ];
    case "Education":
      return [
        "Why did you choose your field of study?",
        "What are your career aspirations?",
      ];
    default:
      return [];
  }
};
