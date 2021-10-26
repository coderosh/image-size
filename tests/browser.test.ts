import imageSize from '../src/browser'

it('imageSize:browser should return width and height', async () => {
  const size = await imageSize('https://ulka.js.org/logo.png')

  expect(size).toEqual({ height: 827, width: 738 })
})
