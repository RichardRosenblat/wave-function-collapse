import { useRecoilState } from "recoil";
import { boardState } from "../states/boardState";
import { getDefaultBoard } from "../util/defaultBoard";
import { cell } from "../types/cell";
import { ReadonlyArray4D } from "../types/4dArray";
import { collapseCell } from "../logic/collapseCell";
import { calculateCellStates } from "../logic/calculateStates";
import { collapseNextCell } from "../logic/collapseAllCells";
import { getCellCoordinatesFromId } from "../util/getCellCoordinatesFromId";
import { isSolvingState } from "../states/isSolvingState";

let intervalId: NodeJS.Timer | null = null;

export const useBoard = () => {
	const [board, setBoard] = useRecoilState(boardState);
	const [isSolving, setIsSolving] = useRecoilState(isSolvingState);

	const collapse = (cell: cell, into: number) => {
		setBoard((prev) => {
			const { id } = cell;
			const mBoard = getMutableBoard(prev);
			const cellCoords = getCellCoordinatesFromId(id);

			collapseCell(cellCoords, into, mBoard);
			return mBoard;
		});
	};
	const collapseAll = () => {
		setBoard((prev) => {
			const mBoard = getMutableBoard(prev);
			while (true) {
				const wasACellCollapsed = collapseNextCell(mBoard);
				if (!wasACellCollapsed) {
					break;
				}
			}
			return mBoard;
		});
	};

	const startCollapsing = (onFinish: () => unknown = () => {}) => {
		if (!intervalId) {
			setIsSolving(true);
			intervalId = setInterval(() => {
				setBoard((prev) => {
					const mBoard = getMutableBoard(prev);
					const hasACellCollapsed = collapseNextCell(mBoard);
					if (!hasACellCollapsed) {
						stopCollapsing();
						onFinish();
					}
					return mBoard;
				});
			}, 200);
		}
	};
	const stopCollapsing = () => {
		setIsSolving(false);

		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
	};

	const restore = ({ id, possibleStates }: cell) => {
		setBoard((prev) => {
			const mBoard = getMutableBoard(prev);
			const [Y, X, y, x] = getCellCoordinatesFromId(id);
			const previousCellState = Array.from(possibleStates)[0];

			mBoard[Y][X][y][x] = {
				id,
				hasCollapsed: false,
				possibleStates: calculateCellStates([Y, X, y, x], previousCellState, mBoard),
			};

			return mBoard;
		});
	};
	const restoreAll = () => {
		setBoard(getDefaultBoard());
	};

	return {
		board: board as ReadonlyArray4D<cell>,
		isSolving,
		collapse,
		restore,
		collapseAll,
		restoreAll,
		startCollapsing,
		stopCollapsing,
	};

	function getMutableBoard(board: cell[][][][]) {
		return board.map((e) => e.map((e) => e.map((e) => e.map((e) => e))));
	}
};
