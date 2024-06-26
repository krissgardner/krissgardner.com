import Image from 'next/image'

import caffe from '@/public/caffe.jpeg'
import evening from '@/public/evening.jpeg'
import meetup from '@/public/meetup.jpg'
import creator from '@/public/creator.jpeg'
import mentorship from '@/public/mentorship.jpeg'
import cigar from '@/public/cigar.jpeg'

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div className="relative h-40">
        <Image
          alt="Image 1"
          src={caffe}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative sm:row-span-2 row-span-1">
        <Image
          alt=""
          src={evening}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative">
        <Image
          alt=""
          src={meetup}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt=""
          src={creator}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover sm:object-center"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt=""
          src={cigar}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40">
        <Image
          alt=""
          src={mentorship}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

export default Gallery
