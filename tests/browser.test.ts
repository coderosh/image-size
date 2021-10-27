import imageSize from '../src/browser'
import axios from 'axios'

const imgUrl = 'https://ulka.js.org/logo.png'

describe('imageSize:browser', () => {
  beforeAll(() => {
    window.URL.createObjectURL = () => imgUrl
  })

  it('should return width and height if src is url', async () => {
    const size = await imageSize(imgUrl)

    expect(size).toEqual({ height: 827, width: 738 })
  })

  it('should return height and width if src is arraybuffer', async () => {
    const res = await axios.get(imgUrl, { responseType: 'arraybuffer' })

    const size = await imageSize(res.data)

    expect(size).toEqual({ height: 827, width: 738 })
  })

  it('should return height and width if src is Blob', async () => {
    const res = await axios.get(imgUrl, { responseType: 'blob' })

    const size = await imageSize(res.data)

    expect(size).toEqual({ height: 827, width: 738 })
  })
})
