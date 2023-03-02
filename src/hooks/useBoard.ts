import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { defaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";
import { cellNumericCoordinates } from "../types/cellNumericCoords";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, result: number) => {
		const { id } = cell;
		const mBoard = getMutableBoard(board);
		const cords = getCellCoordinates(id);

		// TODO update cells on board after collapsing
		mBoard[+cords[0]][+cords[1]][+cords[2]][+cords[3]] = {
			...cell,
			hasCollapsed: true,
			possibleStates: new Set([result]),
		};
		setBoard(mBoard);

	};
	const collapseAll = () => {};
	const restoreAll = () => {
		setBoard(defaultBoard);
	};
	const restore = (cell: cell) => {
		const mBoard = getMutableBoard(board)
		const cords = getCellCoordinates(cell.id);

		mBoard[+cords[0]][+cords[1]][+cords[2]][+cords[3]] = {
			// TODO possible states need to be recalculated
			...defaultBoard[+cords[0]][+cords[1]][+cords[2]][+cords[3]]
		};

		setBoard(mBoard);
	};

	return { board: board as ReadonlyArray4D<cell>, collapse, restore, collapseAll, restoreAll };
};

function getMutableBoard(board: cell[][][][]) {
	return board.map((e) => e.map((e) => e.map((e) => e.map((e) => e))));
}
function getCellCoordinates(id: string): cellNumericCoordinates {
	const yValue = ["t", "c", "b"];
	const xValue = ["l", "m", "r"];

	return `${yValue.indexOf(id[0])}${xValue.indexOf(id[1])}${yValue.indexOf(id[3])}${xValue.indexOf(id[4])}`;
}
