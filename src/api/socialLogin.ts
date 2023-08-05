import axios from "axios";

export const socialLogin = async (code: string) => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/auth/kakao/login?code=${code}`;
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { accessToken, refreshToken } = response.data;
    console.log(response);
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("Failed to fetch tokens");
  }
};
