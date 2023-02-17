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
					<div className={Styles["between-rows"]}></div>
					<div>1</div>
					<div className={Styles["between-rows"]}></div>

					<div>2</div>
					<div className={Styles["between-rows"]}></div>

					<div>3</div>
					<div className={Styles["between-rows"]}></div>
				</div>
				<br />
				<div className={Styles.line}>
					<div className={Styles["between-rows"]}></div>
					<div>4</div>
					<div className={Styles["between-rows"]}></div>

					<div>5</div>
					<div className={Styles["between-rows"]}></div>

					<div>6</div>
					<div className={Styles["between-rows"]}></div>
				</div>
				<br />
				<div className={Styles.line}>
					<div className={Styles["between-rows"]}></div>
					<div>7</div>
					<div className={Styles["between-rows"]}></div>

					<div>8</div>
					<div className={Styles["between-rows"]}></div>

					<div>9</div>
					<div className={Styles["between-rows"]}></div>
				</div>
			</div>
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
