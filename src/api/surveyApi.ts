import axios from "axios";

export const surveyGetApi = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const surveyPostApi = async (userAnswer: string[]) => {
  try {
    const response = await axios.post(
      "https://tell-me.store/healthcheck",
      userAnswer
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
