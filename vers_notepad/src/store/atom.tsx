import { atom } from "recoil";
import { Memo } from "../type/Type";

export const getMemosState = atom<Memo[]>({
  key: "getMemosState",
  default: [],
});

export const addIdState = atom<string>({
  key: "addIdState",
  default: "",
})