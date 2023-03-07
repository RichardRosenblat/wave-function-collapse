export function unionOf<T>(...groups: (Iterable<T> | ArrayLike<T>)[]) {
	if (groups.some((e) => !e)) {
		throw new Error("Cannot get the union if one of the values given is undefined");
	}
	return new Set(groups.flatMap((e) => Array.from(e)));
}
