import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { defaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, result: number) => {
		alert(`Cell: ${cell.id} collapsed into ${result}`);
	};
	const collapseAll = () => {};
	const restore = () => {
		setBoard(defaultBoard);
	};

	return { board, restore, collapse, collapseAll };
};
