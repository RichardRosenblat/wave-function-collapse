import { atom } from "recoil";
import { defaultBoard } from "../util/defaultBoard";

export const boardState = atom({
	key: "boardState",
	default: defaultBoard,
});
