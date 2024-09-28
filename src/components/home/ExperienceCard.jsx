import PropTypes from "prop-types";
export default function ExperienceCard(props) {
  const fromDate = new Date(props.experience.duration.from);
  const toDate = new Date(props.experience.duration.to);
  const fromYear = fromDate.getFullYear();
  const toYear = toDate.getFullYear();

  return (
    <>
      <li className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            <h1>
              {fromYear} - {toYear}
            </h1>
          </header>
          <div className="z-10 sm:col-span-6">
            <h1 className="font-medium leading-snug text-slate-200">
              <div>
                <a
                  className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href=""
                >
                  {props.experience.position} -
                  <span>&nbsp;{" " + props.experience.company}</span>
                </a>
              </div>
            </h1>
            <p className="mt-2 text-sm leading-normal">
              {props.experience.description}
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

ExperienceCard.propTypes = {
  experience: PropTypes.object,
};
