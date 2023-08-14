import axios from "axios";
import { accessTokenStorage } from "../store/typedStorage";

export const callResultMyself = async (userId: number, surveyId: number) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/users/survey-results/${userId}/${surveyId}`;
  const accessToken = accessTokenStorage.get();

  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": `${accessToken}`,
      },
    });
    // const { userId, surveyId, userCount } = response.data.data;
    return response;
  } catch (error) {
    console.error(error);
  }
};
