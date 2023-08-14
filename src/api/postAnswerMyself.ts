import axios from "axios";
import { accessTokenStorage } from "../store/typedStorage";

export const postAnswerMyself = async (surveyId: number, userId: number, answers: any) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/survey/${surveyId}/${userId}/answers`;
  const accessToken = accessTokenStorage.get();

  try {
    const response = await axios.post(BackendURL, answers, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    throw console.error(error);
  }
};
