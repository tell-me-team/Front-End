import { atom } from "recoil";

export const userIdState = atom({
  key: "userIdState",
  default: 0,
});

export const userPictureState = atom({
  key: "userPictureState",
  default: "",
});

export const othersState = atom({
  key: "othersState",
  default: true,
});
