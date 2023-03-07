export function getCellCoordinatesFromId(id: string) {
	const yValue = ["t", "c", "b"];
	const xValue = ["l", "m", "r"];

	return [yValue.indexOf(id[0]), xValue.indexOf(id[1]), yValue.indexOf(id[3]), xValue.indexOf(id[4])];
}
