import sizeOf from 'buffer-image-size'
import centra from 'centra'

const imageSize = async (src: string | ArrayBuffer | Buffer) => {
  let buffer: Buffer

  if (typeof src === 'string') {
    buffer = await centra(src)
      .send()
      .then((res) => res.body)
  } else if (src instanceof ArrayBuffer) {
    buffer = Buffer.from(src)
  } else if (src instanceof Buffer) {
    buffer = src
  } else {
    throw new Error(`Invalid argument provided`)
  }

  const { height, width } = sizeOf(buffer)

  return { height, width }
}

export default imageSize
