import Hero from "./components/hero";
import ProjectCard from "./components/project-card";
import Skill from "./components/skill";

export default function Home() {
  const project1 = {
    title: "FitBud",
    description: "Fitbud is a mobile focused web application which is able to generate a gym workout plan for fitness enthusiast."
  }

  const project2 = {
    title: "BitSpend",
    description: "BitSpend is a mobile focused expense tracking web application which allows users to save and view expenses history."
  }

  return (
    <div>
      <Hero />
      <h2 className="text-center md:text-left mb-5 text-2xl font-semibold">Projects</h2>
      <ProjectCard project={project1} />
      {/* <div className="flex justify-end mt-10">
        <ProjectCard project={project2} />
      </div> */}
      <Skill />
    </div>
  );
}
