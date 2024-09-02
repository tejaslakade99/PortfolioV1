export default function Nav() {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <li>
          <a href="#about" className="active group flex items-center py-3">
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 motion-reduce:transition-none">
              About
            </span>
          </a>
        </li>
        <li>
          <a href="" className="active group flex items-center py-3">
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Education
            </span>
          </a>
        </li>
        <li>
          <a href="#education" className="active group flex items-center py-3">
            <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
