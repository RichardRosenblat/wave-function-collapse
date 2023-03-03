import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { getDefaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";
import { collapseCell } from "../logic/collapseCell";
import { calculateCellStates } from "../logic/calculateStates";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, into: number) => {
		const { id } = cell;
		const mBoard = getMutableBoard(board);
		const cellCoords = getCellCoordinates(id);

		collapseCell(cellCoords, into, mBoard);
		setBoard(mBoard);
	};
	const collapseAll = () => {};
	const restoreAll = () => {
		setBoard(getDefaultBoard());
	};
	const restore = ({ id, possibleStates }: cell) => {
		const mBoard = getMutableBoard(board);
		const [Y, X, y, x] = getCellCoordinates(id);
		const previousCellState = Array.from(possibleStates)[0];

		mBoard[Y][X][y][x] = {
			id,
			hasCollapsed: false,
			// TODO algorithm needs to be reviewed
			possibleStates: calculateCellStates([Y, X, y, x], previousCellState, mBoard),
		};

		setBoard(mBoard);
	};

	return { board: board as ReadonlyArray4D<cell>, collapse, restore, collapseAll, restoreAll };

	function getMutableBoard(board: cell[][][][]) {
		return board.map((e) => e.map((e) => e.map((e) => e.map((e) => e))));
	}
	function getCellCoordinates(id: string) {
		const yValue = ["t", "c", "b"];
		const xValue = ["l", "m", "r"];

		return [yValue.indexOf(id[0]), xValue.indexOf(id[1]), yValue.indexOf(id[3]), xValue.indexOf(id[4])];
	}
};
