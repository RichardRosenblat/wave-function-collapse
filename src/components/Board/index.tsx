import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
const Board = () => {
	return (
		<section className={Styles.container}>
			<div className={Styles.area_group}>
				<SquaresArea id={"A"} y="top" x='right' />
				<SquaresArea id={"B"} y="top" x='middle' />
				<SquaresArea id={"C"} y="top" x='left' />
			</div>
			<br />
			<div className={Styles.area_group}>
				<SquaresArea id={"D"} y="center" x='right' />
				<SquaresArea id={"E"} y="center" x='middle' />
				<SquaresArea id={"F"} y="center" x='left' />
			</div>
			<br />
			<div className={Styles.area_group}>
				<SquaresArea id={"G"} y="bottom" x='right' />
				<SquaresArea id={"H"} y="bottom" x='middle' />
				<SquaresArea id={"I"} y="bottom" x='left' />
			</div>
		</section>
	);
};

export default Board;
