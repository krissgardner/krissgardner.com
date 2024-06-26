import Gallery from '@/components/Gallery'
import {
  Arrow,
  Download,
  GitHub,
  Instagram,
  LinkedIn,
} from '@/components/icons'

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-white">
        {`hey, I'm kriss 👋`}
      </h1>
      <p>{`I'm a full stack developer, content creator and startup enthusiast. I help businesses achieve their goals through product-driven development, effective cost management and strategic decision-making.`}</p>

      <Gallery />

      <p>
        {`I have a track record of creating successful mvps in less than 4 months in industries such as Fintech, Education, Medtech, Ecommerce and Government.`}
      </p>
      <p className="mt-2">You can read more about me here:</p>

      <div className="my-4 flex w-full flex-row space-x-2 overflow-x-auto">
        <a href="/Resume.pdf" download>
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <Download width={24} height={24} fill="#ffffff" />
            <p className="text-white">Resume</p>
          </div>
        </a>

        <a target="_blank" href="https://linkedin.com/in/kriss-gardner">
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <LinkedIn width={24} height={24} fill="#ffffff" />
            <p className="text-white text-nowrap">kriss-gardner</p>
          </div>
        </a>

        <a target="_blank" href="https://github.com/krissgardner">
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <GitHub width={24} height={24} fill="#ffffff" />
            <p className="text-white">krissgardner</p>
          </div>
        </a>

        {/*<a target="_blank" href="https://www.instagram.com/kriss.gardner/">*/}
        {/*  <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">*/}
        {/*    <Instagram width={24} height={24} fill="#ffffff" />*/}
        {/*    <p className="text-white">kriss.gardner</p>*/}
        {/*  </div>*/}
        {/*</a>*/}
      </div>

      <p className="mt-8">
        Over the past few years, I have founded a few of my own projects. After
        creating a web developer coaching community Tenxbase, then creating a
        productivity SaaS Skool Assistant, I have now set my eyes on the
        hospitality industry where I am proud to introduce The G.AI.A.
      </p>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
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
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://newsletter.krissgardner.com"
          >
            <Arrow />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </main>
  )
}
