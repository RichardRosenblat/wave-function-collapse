export function differenceOf<T>(a: Iterable<T> | ArrayLike<T>, b: Iterable<T> | ArrayLike<T>) {
	const arrayB = Array.from(b);
	return new Set(Array.from(a).filter((e) => !arrayB.includes(e)));
}
