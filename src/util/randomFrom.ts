export function randomFrom<T>(s: Iterable<T> | ArrayLike<T>) {
	if (!s) {
		throw new Error("Cannot get random element from undefined");
	}
	const arr = Array.from(s);
	return arr[Math.floor(Math.random() * arr.length)];
}
