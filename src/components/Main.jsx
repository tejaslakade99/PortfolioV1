export default function Main() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4 selection:bg-teal-400 selection:text-slate-700">
            I got into web development and software engineering during college,
            where I really got into
            <span className="text-slate-200 hover:text-teal-400">
              {" "}
              Python and Django.
            </span>{" "}
            Since then, I&apos;ve built up my skills as a{" "}
            <span className="text-slate-200 hover:text-teal-400">
              Fullstack Developer
            </span>
            , finding a lot of satisfaction in combining technology with
            problem-solving.During my time as an intern at{" "}
            <span className="text-slate-200 hover:text-teal-400">
              Bitlance Tech Hub
            </span>
            , I handled backend tasks for a tourist management project, which
            was a great learning experience.
          </p>

          <p className="mb-4">
            These days, I&apos;m focused on creating{" "}
            <span className="text-slate-200 hover:text-teal-400">
              user-friendly and efficient web experiences
            </span>
            , especially in projects using{" "}
            <span className="text-slate-200 hover:text-teal-400">
              React, CSS, and API integrations
            </span>
            . I enjoy the challenge of making software that not{" "}
            <span className="text-slate-200 hover:text-teal-400">
              only works well but also looks good
            </span>
            .
          </p>
          <p>
            When I&apos;m not working, you&apos;ll find me playing chess,
            keeping up with the latest tech trends, or working on ways to solve
            complex problems more effectively. I&apos;m{" "}
            <span className="text-slate-200 hover:text-teal-400">
              always learning and trying to stay ahead{" "}
            </span>
            in the fast-paced world of software development.
          </p>
        </div>
      </section>
    </main>
  );
}
