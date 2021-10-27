# image-size

> Get height and width of image using [Image](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) api in browser and [buffer-image-size](https://npmjs.com/package/buffer-image-size) package in nodejs.

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

- Image source as url (nodejs and browser)

  ```js
  import imageSize from '@coderosh/image-size'

  const main = async () => {
    const url = 'https://ulka.js.org/logo.png'

    const size = await imageSize(url)
    console.log(size) // { height: 827, width: 738 }
  }
  ```

- Image source as arraybuffer (nodejs and browser)

  ```js
  import imageSize from '@coderosh/image-size'

  const main = async () => {
    const url = 'https://ulka.js.org/logo.png'
    const ab = await fetch(url).then((res) => res.arrayBuffer())

    const size = await imageSize(ab)
    console.log(size) // { height: 827, width: 738 }
  }
  ```

- Image source as buffer (nodejs only)

  ```js
  import imageSize from '@coderosh/image-size'

  const main = async () => {
    const url = 'https://ulka.js.org/logo.png'
    const buffer = await fetch(url).then((res) => res.buffer())

    const size = await imageSize(buffer)
    console.log(size) // { height: 827, width: 738 }
  }
  ```

- Image source as blob (browser only)

  ```js
  import imageSize from '@coderosh/image-size'

  const main = async () => {
    const url = 'https://ulka.js.org/logo.png'
    const blob = await fetch(url).then((res) => res.blob())

    const size = await imageSize(blob)
    console.log(size) // { height: 827, width: 738 }
  }
  ```

## License

MIT
