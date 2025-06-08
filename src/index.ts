import { errno } from "./errno";

export { errno } from "./errno";

/**
 * @param err ERRNO symbolic constant from {@link errno}
 * @param cause optional error cause for debugging
 *
 * @example throw err(errno.ENOENT)`${file} not found.`
 * @example throw err(errno.ENOENT, { ... })`${file} not found.`
 */
export function err(
	err: errno,
	cause?: unknown,
): (
	template: { raw: readonly string[] | ArrayLike<string> },
	...substitutions: unknown[]
) => Error {
	return (template, ...substitutions) => {
		const message = String.raw(template, ...substitutions);

		return new Error(`[${symbol(err)}] ${err}: ${message}`, { cause });
	};
}

function symbol(err: errno): string {
	return Object.entries(errno).find(([, e]) => err === e)![0];
}
