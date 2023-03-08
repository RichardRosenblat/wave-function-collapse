import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { getDefaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";
import { collapseCell } from "../logic/collapseCell";
import { calculateCellStates } from "../logic/calculateStates";
import { collapseAllCells } from "../logic/collapseAllCells";
import { getCellCoordinatesFromId } from "../util/getCellCoordinatesFromId";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, into: number) => {
		const { id } = cell;
		const mBoard = getMutableBoard(board);
		const cellCoords = getCellCoordinatesFromId(id);

		collapseCell(cellCoords, into, mBoard);
		setBoard(mBoard);
	};
	const collapseAll = () => {
		const mBoard = getMutableBoard(board);
		collapseAllCells(mBoard);
		setBoard(mBoard);
	};
	const restoreAll = () => {
		setBoard(getDefaultBoard());
	};
	const restore = ({ id, possibleStates }: cell) => {
		const mBoard = getMutableBoard(board);
		const [Y, X, y, x] = getCellCoordinatesFromId(id);
		const previousCellState = Array.from(possibleStates)[0];

		mBoard[Y][X][y][x] = {
			id,
			hasCollapsed: false,
			possibleStates: calculateCellStates([Y, X, y, x], previousCellState, mBoard),
		};

		setBoard(mBoard);
	};

	return { board: board as ReadonlyArray4D<cell>, collapse, restore, collapseAll, restoreAll };

	function getMutableBoard(board: cell[][][][]) {
		return board.map((e) => e.map((e) => e.map((e) => e.map((e) => e))));
	}
};
