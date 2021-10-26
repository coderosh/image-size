import probe from 'probe-image-size'

const imageSize = async (imgUrl: string) => {
  const { height, width } = await probe(imgUrl)

  return { height, width }
}

export default imageSize
