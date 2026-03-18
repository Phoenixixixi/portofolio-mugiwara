import Image from 'next/image'
export default function Avatar({
  size,
  src,
  alt,
}: {
  size: number
  src: string
  alt?: string
}) {
  return (
    <div
      className="rounded-full bg-amber-200 relative"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt || 'avatar'}
        fill
        className="object-cover rounded-full"
      />
    </div>
  )
}
