import Gallery from '@/components/Gallery'

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-white">
        {`hey, I'm kriss 👋`}
      </h1>
      <p>{`I'm a full stack developer, content creator and startup enthusiast. I help businesses achieve their goals through product-driven development, effective cost management and strategic decision-making.`}</p>

      <Gallery />
    </main>
  )
}
