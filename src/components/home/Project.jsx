import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { usePortfolioContext } from "../../hooks/usePortfolioContext";
const api_url = import.meta.env.VITE_API_URL;

export default function Project() {
  const { projects, dispatch } = usePortfolioContext();

  // Fetch projects when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${api_url}/user/get-projects`);
        const json = await response.json();
        console.log("API Response: ", json);
        if (response.ok) {
          dispatch({ type: "GET_PROJECTS", payload: json }); // Assuming `data` is an array of projects
          console.log(json);
        }
        console.log(json);
      } catch (error) {
        console.error("Error Occurred: ", error);
      }
    };

    fetchProjects();
  }, [dispatch]); // Empty dependency array means this runs once on mount

  return (
    <>
      <section
        id="project"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <div>
          <ul className="group/list">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <p>Projects not found</p>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
