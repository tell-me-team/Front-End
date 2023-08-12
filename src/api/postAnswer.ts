import axios from "axios";

export const postAnswer = async (surveyId: number, userId: number, answers: any) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/survey/${surveyId}/${userId}/answers`;

  try {
    const response = await axios.post(BackendURL, answers, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw console.error(error);
  }
};
