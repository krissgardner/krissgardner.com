import Gallery from '@/components/Gallery'
import { Arrow, Download, GitHub, LinkedIn } from '@/components/icons'
import Tag from '@/components/Tag'

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-white">
        {`hey, I'm kriss 👋`}
      </h1>
      <p>
        {`I'm a `}
        <span className="underline decoration-gray-500 underline-offset-2">
          full stack developer
        </span>
        , content creator and startup enthusiast. I help businesses achieve
        their goals through product-driven development, effective cost
        management and strategic decision-making.
      </p>

      <Gallery />

      <p>
        {`I have a track record of creating successful MVPs `}
        <span className="underline decoration-gray-500 underline-offset-2">
          in less than 4 months
        </span>{' '}
        in industries such as Fintech, Education, Medtech, Ecommerce and
        Government.
      </p>
      <p className="mt-2">You can read more about me here:</p>

      <div className="my-4 flex w-full flex-row space-x-2 overflow-x-auto">
        <a href="/Resume.pdf" download>
          <div className="flex gap-2 items-center justify-between rounded border px-3 py-4 border-neutral-700 bg-neutral-800">
            <Download width={24} height={24} fill="#ffffff" />
            <p className="text-white">Resume</p>
          </div>
        </a>

        <a target="_blank" href="https://linkedin.com/in/kriss-gardner">
          <div className="flex gap-2 items-center justify-between rounded border px-3 py-4 border-neutral-700 bg-neutral-800">
            <LinkedIn width={24} height={24} fill="#ffffff" />
            <p className="text-white text-nowrap">kriss-gardner</p>
          </div>
        </a>

        <a target="_blank" href="https://github.com/krissgardner">
          <div className="flex gap-2 items-center justify-between rounded border px-3 py-4 border-neutral-700 bg-neutral-800">
            <GitHub width={24} height={24} fill="#ffffff" />
            <p className="text-white">krissgardner</p>
          </div>
        </a>
      </div>

      <p className="mt-8">
        Over the past few years, I have founded my own software projects. I
        started with creating a web developer coaching community{' '}
        <Tag>Tenxbase</Tag> and after that, created an automation service{' '}
        <Tag>Skool Assistant</Tag>.
      </p>
      <p className="mt-4">
        Now, I have set my eyes on the hospitality industry with a new project
        called <Tag>The G.AI.A</Tag>. Stay tuned to find out more!
      </p>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/kriss.gardner/"
          >
            <Arrow />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        {/*<li>*/}
        {/*  <a*/}
        {/*    className="flex items-center transition-all hover:text-neutral-100"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="_blank"*/}
        {/*    href="https://newsletter.krissgardner.com"*/}
        {/*  >*/}
        {/*    <Arrow />*/}
        {/*    <p className="ml-2 h-7">get email updates</p>*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </main>
  )
}
