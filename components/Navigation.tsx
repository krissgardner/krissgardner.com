import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="text-white flex gap-5 font-light mb-16">
      <Link href="/">home</Link>
      <Link href="/work">work</Link>
      {/*<Link target="_blank" href="https://newsletter.krissgardner.com">*/}
      {/*  newsletter*/}
      {/*</Link>*/}
    </div>
  )
}

export default Navigation
