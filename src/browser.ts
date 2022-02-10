const imageSize = async (src: string | ArrayBuffer | Blob) => {
  return new Promise<{ height: number; width: number }>((resolve, reject) => {
    const image = new Image()
    let source: string

    if (typeof src === 'string') {
      source = src
    } else if (src instanceof ArrayBuffer) {
      source = URL.createObjectURL(new Blob([new Uint8Array(src)]))
    } else if (src instanceof Blob) {
      source = URL.createObjectURL(src)
    } else {
      throw new Error(`Invalid argument provided`)
    }

    image.onload = () => {
      const { height, width } = image

      if (src instanceof Blob) URL.revokeObjectURL(source)

      resolve({ height, width })
    }

    image.onerror = (err) => reject(err)

    image.src = source
  })
}

export default imageSize
