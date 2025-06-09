### Usage

This package is for ERRNO symbolic constants and error throwing, with full
typing support.

List of ERRNO is based off
[LibUV/Errors](https://docs.libuv.org/en/stable/errors.html) (adopted by
Node.js). Corresponding number codes are not included, as they are not
cross-platform consistent.

Install this package in your project:

```bash
# via npm
npm add ts-errno

# or pnpm
pnpm add ts-errno

# or yarn
yarn add ts-errno
```

Now errors could be thrown easily:

```ts
// demo.ts
import { err } from "ts-errno";

// throw with additional message
if (!exist(file)) {
    throw err("ENOENT")`${file} not found.`;
}

// throw with additional details
try {
    open(file);
} catch (e) {
    throw err("ENOENT", e)`${file} not found.`;
}
```
