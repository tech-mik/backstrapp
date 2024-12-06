import Image from 'next/image'

interface IImages {
  src: string
  alt: string
}

const Slider = ({ images }: { images: IImages[] }) => {
  return images.map((image, index) => (
    <Image
      src={image.src}
      fill
      alt={image.alt}
      className='object-cover'
      key={index}
    />
  ))
}

export default Slider
