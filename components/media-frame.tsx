import Image from 'next/image';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export function MediaFrame({
  src,
  alt,
  className = '',
  aspectRatio = 'video',
}: MediaFrameProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gray-100 ${aspectClasses[aspectRatio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
