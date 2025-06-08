import { errno as ERRNO } from "./errno";

export { errno } from "./errno";

/**
 * @param errno symbolic constant from {@link errno}
 * @param cause optional error cause for debugging
 *
 * @example
 * if (!exist(file)) {
 * 	throw err(errno.ENOENT)`${file} not found.`;
 * }
 *
 * @example
 * try {
 * 	open(file);
 * } catch (e) {
 * 	throw err(errno.ENOENT, e)`${file} not found.`;
 * }
 */
export function err(
	errno: ERRNO,
	cause?: unknown,
): (
	template: { raw: readonly string[] | ArrayLike<string> },
	...substitutions: unknown[]
) => Error {
	return (template, ...substitutions) => {
		const message = String.raw(template, ...substitutions);

		return new Error(`[${symbol(errno)}] ${errno}: ${message}`, { cause });
	};
}

function symbol(errno: ERRNO): string {
	return Object.entries(ERRNO).find(([, e]) => errno === e)![0];
}
