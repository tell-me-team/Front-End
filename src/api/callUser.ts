import axios from "axios";
import { accessTokenStorage } from "../store/typedStorage";

export const callUser = async () => {
  const BackendURL = `${import.meta.env.VITE_BACKEND_URL}/v1/users/info`;
  const accessToken = accessTokenStorage.get();
  try {
    const response = await axios.get(BackendURL, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-TOKEN": `${accessToken}`,
      },
    });
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
