import Image from 'next/image';
import Link from 'next/link';

interface CardGameProps {
  id: string;
  thumbnail: string;
  background: string;
  title: string;
  description: string;
}

export function CardGame({
  id,
  thumbnail,
  background,
  title,
  description,
}: CardGameProps) {
  return (
    <div id={id}>
      <Image
        src={background}
        alt=''
        width={480}
        height={220}
        className='w-full object-center rounded-xl'
      />

      <div className='flex items-center gap-4 py-4'>
        <Image
          src={thumbnail}
          alt=''
          width={90}
          height={90}
          className='rounded-xl'
        />

        <div className='space-y-1'>
          <h4 className='text-lg'>{title}</h4>
          <p className='text-xs text-gray-400 text-ellipsis line-clamp-2'>
            {description}
          </p>
        </div>

        <Link
          href='#'
          className='h-7 flex items-center px-4 text-sm border border-gray-400 rounded-sm'
        >
          View
        </Link>
      </div>
    </div>
  );
}
