import Styles from "./SquaresArea.module.scss";

type xOptions = "right" | "middle" | "left";

type yOptions = "top" | "center" | "bottom";

type colorOptions = "color-1" | "color-2";
interface props {
	id?: string;
	x: xOptions;
	y: yOptions;
}

const SquaresArea = ({ id, x, y }: props) => {
	const color = getBackgroundColor(x, y);
	return (
		<>
		<div className={Styles[color]}>
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
		<div className={Styles['between-lines']}></div>
		</>
	);

	function getBackgroundColor(x: xOptions, y: yOptions): colorOptions {
		const map = {
			right: 1,
			middle: 2,
			left: 3,

			top: 1,
			center: 2,
			bottom: 3,
		};

		if (Math.abs(map[x] - map[y]) === 1) {
			return "color-1";
		}

		return "color-2";
	}
};

export default SquaresArea;
