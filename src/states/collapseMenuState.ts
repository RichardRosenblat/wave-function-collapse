import { atom } from "recoil";
import { cell } from "../types/cell";

export const collapseMenuState = atom<cell|null>({
	key: "collapseMenuState",
	default: null,
});
