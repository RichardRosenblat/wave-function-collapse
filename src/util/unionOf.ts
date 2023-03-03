export function unionOf<T>(...groups: (Iterable<T> | ArrayLike<T>)[]) {
	return new Set(groups.flatMap((e) => Array.from(e)));
}
