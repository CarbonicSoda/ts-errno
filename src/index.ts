import { ERRNO } from "./errno";

/**
 * Get ERRNO error to throw.
 *
 * @param errno code of {@link ERRNO}.
 * @see {@link ERRNO} for code details.
 *
 * @example
 * if (!exist(file)) {
 * 	throw err("ENOENT")`${file} not found.`;
 * }
 *
 * @param cause optional error details.
 *
 * @example
 * try {
 * 	open(file);
 * } catch (e) {
 * 	throw err("ENOENT", e)`${file} not found.`;
 * }
 */
export function err(
	errno: keyof typeof ERRNO,
	cause?: unknown,
): (
	template: { raw: readonly string[] | ArrayLike<string> },
	...substitutions: unknown[]
) => Error {
	return (template, ...substitutions) => {
		const message = String.raw(template, ...substitutions);

		return new Error(`[${errno}] ${ERRNO[errno]}: ${message}`, { cause });
	};
}
