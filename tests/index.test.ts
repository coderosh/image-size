import imageSize from '../src/'

test('imageSize:node should return width and height', async () => {
  const size = await imageSize('https://ulka.js.org/logo.png')
  expect(size).toEqual({ height: 827, width: 738 })
})
