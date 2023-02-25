import { useState } from "react";
import { cell } from "../../types/cell";
import { cellId } from "../../types/cellId";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import Styles from "./Square.module.scss";
import Modal from 'react-modal';

interface props {
	x: xOptions;
	y: yOptions;
	id: cellId;
	children: cell;
}

const Square = ({ x, y, children: cell, id }: props) => {
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
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				<h2>Hello</h2>
				<button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</>
	);
};

export default Square;
