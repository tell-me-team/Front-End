import axios from "axios";

export const socialLogin = async (code: string) => {
  // TODO: 아래 URL 부분 API 명세서에 맞게 바꾸기
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}`;
  try {
    const response = await axios.post(
      BackendURL,
      { code },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const accessToken = response.headers["access-token"];
    const refreshToken = response.headers["refresh-token"];

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("Failed to fetch tokens");
  }
};
