import Gallery from '@/components/Gallery'
import { Download, Instagram, LinkedIn } from '@/components/icons'

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

      <div className="my-4 flex w-full flex-row space-x-2">
        <a href="/Resume.pdf" download>
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <Download width={24} height={24} fill="#ffffff" />
            <p className="text-white">Resume</p>
          </div>
        </a>

        <a target="_blank" href="https://linkedin.com/in/kriss-gardner">
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <LinkedIn width={24} height={24} fill="#ffffff" />
            <p className="text-white">kriss-gardner</p>
          </div>
        </a>

        <a target="_blank" href="https://www.instagram.com/kriss.gardner/">
          <div className="flex gap-2 items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <Instagram width={24} height={24} fill="#ffffff" />
            <p className="text-white">kriss.gardner</p>
          </div>
        </a>
      </div>
    </main>
  )
}
