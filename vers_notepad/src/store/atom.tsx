import { atom } from "recoil";
import { Memo } from "../type/Type";

export const getMemosState = atom<Memo[]>({
  key: "getMemosState",
  default: [],
});

export const updateMemosState = atom<Memo[]>({
  key: "updateMemosState",
  default: [],
});
