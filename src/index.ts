import { ERRNO } from "./errno";

export { ERRNO as errno } from "./errno";

/**
 * Get ERRNO error to throw.
 *
 * @param errno symbolic constant from {@link ERRNO}.
 * @param cause optional error cause for debugging.
 *
 * @example
 * if (!exist(file)) {
 * 	throw err(errno.ENOENT)`${file} not found.`;
 * }
 * @example
 * try {
 * 	open(file);
 * } catch (e) {
 * 	throw err(errno.ENOENT, e)`${file} not found.`;
 * }
 */
export function err(
	errno: (typeof ERRNO)[keyof typeof ERRNO],
	cause?: unknown,
): (
	template: { raw: readonly string[] | ArrayLike<string> },
	...substitutions: unknown[]
) => Error {
	return (template, ...substitutions) => {
		const message = String.raw(template, ...substitutions);

		return new Error(`${errno}: ${message}`, { cause });
	};
}
