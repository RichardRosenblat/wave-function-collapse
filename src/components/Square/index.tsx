import { useState } from "react";
import { cell } from "../../types/cell";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import Styles from "./Square.module.scss";
import Modal from "react-modal";
import CollapseMenu from "../CollapseMenu";

interface props {
	x: xOptions;
	y: yOptions;
	children: cell;
}

const Square = ({ x, y, children: cell }: props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const firstValueFromCell = cell.possibleStates.values().next().value;

	const openModal = () => {
		setIsModalOpen(true);
	};
	function closeModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<div className={Styles[x] + " " + Styles[y] + " " + Styles.cell} onClick={openModal}>
				{cell.hasCollapsed ? firstValueFromCell : "?"}
			</div>
			<Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Collapsing menu">
				<CollapseMenu cell={cell} closeModal={closeModal}/>
			</Modal>
		</>
	);
};

export default Square;
