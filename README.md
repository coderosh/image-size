# image-size

> Get height and width of image using [Image](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) api in browser and [prob-image-size](https://npmjs.com/package/probe-image-size) package in nodejs.

<a href="https://npmjs.com/package/@coderosh/image-size"><img alt="NPM" src="https://img.shields.io/npm/v/@coderosh/image-size" /></a>
<a href="https://github.com/coderosh/image-size"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
<a href="#"><img alt="CI" src="https://img.shields.io/github/workflow/status/coderosh/image-size/CI"></a>
<a href="https://github.com/coderosh/image-size"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" /></a>

## Installation

```sh
# npm
npm install @coderosh/image-size

# yarn
yarn add @coderosh/image-size
```

## Usage

```js
import imageSize from '@coderosh/image-size'

async function main() {
  const size = await imageSize('https://ulka.js.org/logo.png')

  console.log(size) // { height: 827, width: 738 }
}

main()
```

## License

MIT
