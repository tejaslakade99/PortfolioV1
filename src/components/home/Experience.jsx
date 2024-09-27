import ExperienceCard from "./ExperienceCard";
import { useEffect } from "react";
import { usePortfolioContext } from "../../hooks/usePortfolioContext";
const api_url = import.meta.env.VITE_API_URL

export default function Experience() {
  const { experiences, dispatch } = usePortfolioContext();

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`${api_url}/user/get-experiences`);
        const json = await response.json();
        console.log("API Response Ex: ", json);
        if (response.ok) {
          dispatch({ type: "GET_EXPERIENCES", payload: json }); // Assuming `data` is an array of projects
          console.log(json);
        }
        console.log(json);
      } catch (error) {
        console.error("Error Occurred in: ", error);
      }
    };

    fetchExperiences();
  }, [dispatch]);

  return (
    <>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div className="mb-4 w-screen py-5 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ul className="group/list">
            {experiences.length > 0 ? (
              experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />
              ))
            ) : (
              <p>No Experiences found</p>
            )}
            {/* <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard /> */}
          </ul>
        </div>
      </section>
    </>
  );
}
