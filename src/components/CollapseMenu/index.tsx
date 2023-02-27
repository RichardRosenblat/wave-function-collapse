import Modal from "react-modal";
import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import FadeIn from "react-fade-in";

const CollapseMenu = () => {
	const { selectedCell: cell, close } = useCollapseMenu();

	return (
		<Modal isOpen={!!cell} onRequestClose={close} contentLabel="Collapsing menu" shouldCloseOnEsc>
			{cell && (
				<FadeIn>
					<h2>Cell Id: {cell.id}</h2>
					<button onClick={close}>close</button>
					<div>Has collapsed: {cell.hasCollapsed ? "Yes" : "No"}</div>
					<div>Possible states: {JSON.stringify(Array.from(cell.possibleStates.values()))}</div>
					<h3> Collapse: </h3>
					{Array.from(cell.possibleStates.values()).map((v) => {
						return <button>{v}</button>;
					})}
				</FadeIn>
			)}
		</Modal>
	);
};

export default CollapseMenu;
