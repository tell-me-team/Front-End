import axios from "axios";

export const decodeShortUrl = async (shortUrl: string | undefined) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/survey/${shortUrl}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const { userId, surveyId, userCount } = response.data.data;
    console.log(userId);
    console.log(surveyId);
    console.log(userCount);
    return { userId, surveyId, userCount };
  } catch (error) {
    console.error(error);
  }
};
