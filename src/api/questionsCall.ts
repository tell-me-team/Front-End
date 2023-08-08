import axios from "axios";

export const questionsCall = async (surveyId: number) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/survey/questions/${surveyId}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data.data;
    const questions = data.map((item: any) => [item.question, item.answerA, item.answerB]);

    return questions;
  } catch (error) {
    throw console.error(error);
  }
};
