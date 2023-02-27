import { cell } from "../../types/cell";

interface props {
	cell: cell;
	closeModal: () => void;
}

const CollapseMenu = ({  closeModal, cell }: props) => {
	return (
		<>
			<h2>Cell Id: {cell.id}</h2>
			<button onClick={closeModal}>close</button>
			<div>Has collapsed: {cell.hasCollapsed ? "Yes" : "No"}</div>
			<div>Possible states: {JSON.stringify(Array.from(cell.possibleStates.values()))}</div>
			<h3> Collapse: </h3>
			{Array.from(cell.possibleStates.values()).map((v) => {
				return <button>{v}</button>;
			})}
		</>
	);
};

export default CollapseMenu;
