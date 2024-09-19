import Hero from "./components/hero";
import ProjectCard from "./components/project-card";
import Skill from "./components/skill";
import { fitBud, bitSpend } from "./project-data";

export default function Home() {
    return (
    <div>
      <Hero />
      <h2 className="md:text-left mb-10 text-4xl font-semibold">Projects</h2>
      <ProjectCard project={fitBud} />
      <ProjectCard project={bitSpend} />
      <Skill />
    </div>
  );
}
