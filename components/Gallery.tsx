import Image from 'next/image'

import working from '@/public/working.jpeg'
import evening from '@/public/evening.jpeg'
import meetup from '@/public/meetup.jpg'
import creator from '@/public/creator.jpeg'
import mentorship from '@/public/mentorship.jpeg'
import lounge from '@/public/lounge.jpeg'

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div className="relative h-40">
        <Image
          alt="Me working on incredible freelance projects! If you want to work with me, send your request over email."
          src={working}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="Me at a networking event with other freelancers."
          src={evening}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-center"
        />
      </div>
      <div className="relative">
        <Image
          alt="Me talking to other freelancers at a meetup. My friend and co-founder, Andrei Stoica, is next to me."
          src={meetup}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="Me recording content for my online mentorship skool Tenxbase."
          src={creator}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-1 sm:row-span-2">
        <Image
          alt="Me holding a weekly Q&A with some of my students."
          src={lounge}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40">
        <Image
          alt="Me having a blast at one of my favourite lounges!"
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
