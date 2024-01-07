# unduration

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]

unduration is a tiny (0.2kb) library that aims to standardize the way we handle durations in JavaScript, aiming to replace things like:

```js
// 1 minute
defineHandler('/', {
  ttl: 1000 * 60 * 60 * 24
  // OR worse
  ttl: 86_400_000
})
```
With:
```js
// 1 minute
defineHandler('/', {
  ttl: '1m',
  // OR
  ttl: {
    minutes: 1,
  }
})
```

Libraries tend to use different formats for durations, which makes it hard to use them together. unduration aims to solve this problem by providing a standard way to define durations, and utilities to use this standard.



## Usage

Install package:

```sh
# npm
npm install unduration

# yarn
yarn add unduration

# pnpm
pnpm install unduration

# bun
bun install unduration
```

Import:

```js
// ESM
import { defineDuration } from "unduration";

// CommonJS
const { defineDuration } = require("unduration");
```


## Development

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/unduration?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/unduration
[npm-downloads-src]: https://img.shields.io/npm/dm/unduration?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/unduration
[codecov-src]: https://img.shields.io/codecov/c/gh/unjs/unduration/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/unjs/unduration
[bundle-src]: https://img.shields.io/bundlephobia/minzip/unduration?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=unduration
