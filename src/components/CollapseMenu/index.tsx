import Modal from "react-modal";
import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { useBoard } from "../../hooks/useBoard";

const CollapseMenu = () => {
	const { selectedCell: cell, close } = useCollapseMenu();
	const { collapse } = useBoard();

	return (
		<Modal isOpen={!!cell} onRequestClose={close} contentLabel="Collapsing menu" shouldCloseOnEsc>
			{cell && (
				<>
					<h2>Cell Id: {cell.id}</h2>
					<button onClick={close}>close</button>
					<div>Has collapsed: {cell.hasCollapsed ? "Yes" : "No"}</div>
					<div>Possible states: {JSON.stringify(Array.from(cell.possibleStates.values()))}</div>
					<h3> Collapse: </h3>
					{Array.from(cell.possibleStates.values()).map((v) => {
						return <button onClick={() => collapse(cell, v)}>{v}</button>;
					})}
				</>
			)}
		</Modal>
	);
};

export default CollapseMenu;
