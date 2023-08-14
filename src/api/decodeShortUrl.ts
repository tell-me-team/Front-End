import axios from "axios";

export const decodeShortUrl = async (shortUrl: string | undefined) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/survey/${shortUrl}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { userId, surveyId, userCount, nickname } = response.data.data;
    return { userId, surveyId, userCount, nickname };
  } catch (error) {
    console.error(error);
  }
};
