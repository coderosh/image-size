import axios from 'axios'
import imageSize from '../src/'
import centra from 'centra'

const imgUrl = 'https://ulka.js.org/logo.png'

describe('imageSize:node', () => {
  it('should return width and height if src is string', async () => {
    const size = await imageSize('https://ulka.js.org/logo.png')
    expect(size).toEqual({ height: 827, width: 738 })
  })

  it('should return height and width if src is arraybuffer', async () => {
    const res = await axios.get(imgUrl, { responseType: 'arraybuffer' })

    const size = await imageSize(res.data.buffer)
    expect(size).toEqual({ height: 827, width: 738 })
  })

  it('should return height and width if src is buffer', async () => {
    const buffer = await centra(imgUrl)
      .send()
      .then((res) => res.body)

    const size = await imageSize(buffer)
    expect(size).toEqual({ height: 827, width: 738 })
  })
})
