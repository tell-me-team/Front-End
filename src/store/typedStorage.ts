import { TypedStorage } from "@toss/storage/typed";

export const accessTokenStorage = new TypedStorage<string>("accessToken");
export const refreshTokenStorage = new TypedStorage<string>("refreshToken");

// 사용법
// accessTokenStorage.get()
// accessTokenStorage.set("abc")
