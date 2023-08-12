import axios from "axios";

export const socialLogin = async (code: string) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/auth/kakao/login?code=${code}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { accessToken, refreshToken, userId, userPicture } = response.data.data;
    return { accessToken, refreshToken, userId, userPicture };
  } catch (error) {
    throw console.error(error);
  }
};
