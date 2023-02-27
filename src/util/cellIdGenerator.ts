import { cellId } from "../types/cellId";

function* getIdGenerator() {
	const y = ["t", "c", "b"];
	const x = ["l", "m", "r"];
	while (true) {
		for (let areaYI = 0; areaYI < y.length; areaYI++) {
			const ay = y[areaYI];
			for (let areaXI = 0; areaXI < x.length; areaXI++) {
				const ax = x[areaXI];
				for (let cellYI = 0; cellYI < y.length; cellYI++) {
					const cy = y[cellYI];
					for (let cellXI = 0; cellXI < x.length; cellXI++) {
						const cx = x[cellXI];
						yield (ay + ax + "[" + cy + cx + "]") as cellId;
					}
				}
			}
		}
	}
}

export const idGenerator = getIdGenerator() as Iterator<cellId, cellId, cellId>;