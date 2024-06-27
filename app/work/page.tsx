const Work = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-white">
        my work
      </h1>
      <p>
        On a mission to build{' '}
        <span className="underline decoration-gray-500 underline-offset-2">
          impactful products
        </span>{' '}
        and services, and along the way, teach the next generation of
        developers. {`Here's`} a summary of my work so far.
      </p>

      <hr />

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Therapedia</h2>
      <p className="text-neutral-400 text-sm mb-4">
        Freelance Full Stack Developer, May 2024 - Jun 2024
      </p>

      <p className="my-5">
        Joined the Therapedia team to help them create the best AI assistant
        tailored for therapists, psychologists, and psychiatrists.
      </p>

      <ul className="list-dark">
        <li>
          I developed a realtime transcription application with built in
          sentence analysis which resulted in precise transcriptions. Created
          AWS infrastructure that ensured low latency connections.
        </li>
        <li>
          Reduced briefing and note taking time by leveraging the power of LLMs
          for smart suggestions and transcription summarisation.
        </li>
        <li>
          Ensured data protection and HIPAA compliance by implementing critical
          network security features and data parsing (redaction, encryption and
          hashing)
        </li>
      </ul>

      <hr />

      <h2 className="font-medium text-xl mb-1 tracking-tighter">
        Crimson Education
      </h2>
      <p className="text-neutral-400 text-sm mb-4">
        Freelance Full Stack Developer, Aug 2023 - Apr 2024
      </p>

      <p className="my-5">
        Crimson, which has been serving students for over a decade, wanted to
        create an affordable way to learn about admissions. I joined to
        facilitate the acquisition of Admityogi and take lead in development.
      </p>

      <ul className="list-dark">
        <li>
          Increased the total traffic by 175% by completing the merger of
          Admityogi and Dr.Ivy platforms in only 2 weeks.
        </li>
        <li>
          Improved security by implementing cross platform authentication and
          API keys.
        </li>
        <li>
          Developed data collection and reporting systems for platform usage,
          spending and trends.
        </li>
        <li>
          Doubled revenue by developing a platform currency and integrating it
          across all already provided services.
        </li>
        <li>
          Developed industry leading technology by implementing OpenAI’s API for
          Essay Revision Tool & ChanceMe.
        </li>
      </ul>

      <hr />

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Genova.ai</h2>
      <p className="text-neutral-400 text-sm mb-4">
        Freelance Full Stack Developer, Jun 2023 - Oct 2023
      </p>

      <p className="my-5">
        Venture studio building products around Generative AI
      </p>

      <ul className="list-dark">
        <li>
          Improved output quality by 10% by developing AI picture filtering &
          detection before upload.
        </li>
        <li>
          Reduced client tickets by over 60% by creating feedback & rewards
          systems.
        </li>
        <li>
          Increased traffic and incentivised users to share the app by
          implementing a referral code feature.
        </li>
        <li>
          Elevated user data collection with a system of prompt selection
          interfaces.
        </li>
        <li>
          Developed time sensitive features for both iOS and Android devices.
        </li>
      </ul>
    </div>
  )
}

export default Work
