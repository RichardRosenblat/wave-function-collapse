import { cellId } from "./cellId";

export interface cell {
	id: cellId,
	hasCollapsed: boolean;
	possibleStates: Set<number>;
}
