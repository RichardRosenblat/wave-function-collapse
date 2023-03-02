import { atom } from "recoil";
import { getDefaultBoard } from "../util/defaultBoard";

export const boardState = atom({
	key: "boardState",
	default: getDefaultBoard(),
});
