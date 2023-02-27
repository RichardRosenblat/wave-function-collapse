import { collapseMenuState } from "../states/collapseMenuState";
import { useRecoilState } from "recoil";
import { cell } from "../types/cell";

export const useCollapseMenu = () => {
	const [selectedCell, setSelectedCell] = useRecoilState(collapseMenuState);

	const open = (cell: cell) => {
		setSelectedCell(cell);
	};
	const close = () => {
		setSelectedCell(null);
	};

	return { selectedCell, open, close };
};
