import { atom } from "recoil";

export const pageState = atom({
  key: "pageState",
  default: "home",
  // [kids, primary, secondary,high]
});