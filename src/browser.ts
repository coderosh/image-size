const imageSize = async (imgUrl: string) => {
  return new Promise<{ height: number; width: number }>((resolve, reject) => {
    const image = new Image()

    image.onload = () => {
      const { height, width } = image
      resolve({ height, width })
    }

    image.onerror = (err) => reject(err)

    image.src = imgUrl
  })
}

export default imageSize
