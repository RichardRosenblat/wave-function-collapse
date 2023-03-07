export function differenceOf<T>(a: Iterable<T> | ArrayLike<T>, b: Iterable<T> | ArrayLike<T>) {
	if (!a || !b) {
		throw new Error("Cannot get difference of undefined values");
	}
	const arrayB = Array.from(b);
	return new Set(Array.from(a).filter((e) => !arrayB.includes(e)));
}
