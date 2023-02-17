import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import Styles from "./Square.module.scss";

interface props {
	x: xOptions;
	y: yOptions;
	children: number;
}

const Square = ({ x, y, children: value }: props) => {
	return <div className={Styles[x] + " " + Styles[y]}>{value < 0 ? "?" : value}</div>;
};

export default Square;
