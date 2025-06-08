### Usage

This package is for ERRNO symbolic constants and error throwing, with full
typing support.

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
import { err, errno } from "ts-errno";

// throw with additional message
throw err(errno.ENOENT)`${file} not found.`;

// throw with additional cause
throw err(errno.ENOENT, { ... })`${file} not found.`;
```
