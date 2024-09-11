export default function ProjectCard() {
  return (
    <>
      <li className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <img
            className="z-10 rounded border-2 border-slate-200/10 group-hover:border-slate-200/30 sm:col-span-2"
            src="../src/assets/project-pic.jpg"
            alt=""
            width="200"
          />
          <div className="z-10 sm:col-span-6">
            <h1 className="font-medium leading-snug text-slate-200">
              <div>
                <a
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href=""
                >
                  Build a Spotify Connected App
                </a>
              </div>
            </h1>
            <p className="mt-2 text-sm leading-normal">
              Build and maintain critical components used to construct
              Klaviyo&apos;s frontend, across the whole product. Work closely
              with cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>
            <ul className="mt-4 flex flex-row text-xs">
              <li className="mr-1.5 mt-2">
                <div className="rounded-full bg-teal-400/10 px-2 py-2 leading-5 text-teal-300">
                  Javascript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="rounded-full bg-teal-400/10 px-2 py-2 leading-5 text-teal-300">
                  Typescript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="rounded-full bg-teal-400/10 px-2 py-2 leading-5 text-teal-300">
                  React
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="rounded-full bg-teal-400/10 px-2 py-2 leading-5 text-teal-300">
                  Storybook
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
