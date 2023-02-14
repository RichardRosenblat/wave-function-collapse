import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
const Board = () => {
	return (
		<>
			<div className={Styles.area_group}>
				<SquaresArea id={"A"} />
				<SquaresArea id={"B"} />
				<SquaresArea id={"C"} />
			</div>
			<br />
			<div className={Styles.area_group}>
				<SquaresArea id={"D"} />
				<SquaresArea id={"E"} />
				<SquaresArea id={"F"} />
			</div>
			<br />
			<div className={Styles.area_group}>
				<SquaresArea id={"G"} />
				<SquaresArea id={"H"} />
				<SquaresArea id={"I"} />
			</div>
		</>
	);
};

export default Board;
