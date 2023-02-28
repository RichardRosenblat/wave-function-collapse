import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { defaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, result: number) => {
		alert(`Cell: ${cell.id} collapsed into ${result}`);
	};
	const collapseAll = () => {};
	const restoreAll = () => {
		setBoard(defaultBoard);
	};
	const restore = (cell: cell) => {};

	return { board: board as ReadonlyArray4D<cell>, collapse, restore, collapseAll, restoreAll };
};
