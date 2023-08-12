import axios from "axios";

export const callResult = async (userId: number, surveyId: number) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/users/survey-results/${userId}/${surveyId}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    // const { userId, surveyId, userCount } = response.data.data;
    return;
  } catch (error) {
    console.error(error);
  }
};
