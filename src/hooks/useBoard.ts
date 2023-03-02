import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { defaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);

	const collapse = (cell: cell, result: number) => {
		const { id } = cell;
		const mBoard = getMutableBoard(board);
		const [Y, X, y, x] = getCellCoordinates(id);

		// TODO update cells on board after collapsing
		mBoard[Y][X][y][x] = {
			...cell,
			hasCollapsed: true,
			possibleStates: new Set([result]),
		};

		updateBoardPossibleStates([Y, X, y, x], result, mBoard);

		setBoard(mBoard);
	};
	const collapseAll = () => {};
	const restoreAll = () => {
		setBoard(defaultBoard);
	};
	const restore = ({ id }: cell) => {
		const mBoard = getMutableBoard(board);
		const [Y, X, y, x] = getCellCoordinates(id);

		mBoard[Y][X][y][x] = {
			// TODO possible states need to be recalculated
			...defaultBoard[Y][X][y][x],
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
	function updateBoardPossibleStates(collapsedCellCoords: number[], valueCollapsedInto: number, board: cell[][][][]) {
		const [Y, X, y, x] = collapsedCellCoords;
		const cellArea = board[Y][X];

		updateAreaStates();
		
		

		function updateAreaStates() {
			cellArea.forEach((row, rowIndex) => {
				row.forEach((_, columnIndex) => {
					const isCollapsedCell = rowIndex === y && columnIndex === x;
					if (!isCollapsedCell) {
						const currentCell = board[Y][X][rowIndex][columnIndex];
						currentCell.possibleStates.delete(valueCollapsedInto);
					}
				});
			});
		}
	}
};
