import Styles from "./SquaresArea.module.scss";

interface props {
	id?: string;
	x: "right" | "middle" | "left";
	y: "top" | "center" | "bottom";
}

const SquaresArea = ({ id }: props) => {
	return (
		<div>
			<div className={Styles.line}>
				<div>{id}1</div>
				<div>{id}2</div>
				<div>{id}3</div>
			</div>
			<br />
			<div className={Styles.line}>
				<div>{id}4</div>
				<div>{id}5</div>
				<div>{id}6</div>
			</div>
			<br />
			<div className={Styles.line}>
				<div>{id}7</div>
				<div>{id}8</div>
				<div>{id}9</div>
			</div>
		</div>
	);
};

export default SquaresArea;
