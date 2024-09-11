import Hero from "./components/hero";
import ProjectCard from "./components/project-card";
import Skill from "./components/skill";

export default function Home() {
  const project1 = {
    id: 1,
    title: "FitBud",
    description: "A mobile focused web application which generates gym workout plans for users based on their individual profile to help them achieve their fitness goal.",
    images: [
      { id: 0, src: "/FitBud/Home.png", alt: "Image of FitBud homepage" },
      { id: 1, src: "/FitBud/Profile.png", alt: "Image of FitBud profile page" },
      { id: 2, src: "/FitBud/Plan.png", alt: "Image of FitBud plan page" },
      { id: 3, src: "/FitBud/Workout.png", alt: "Image of FitBud workout page" },
    ]
  }

  const project2 = {
    id: 2,
    title: "BitSpend",
    description: "A mobile focused expense tracking web application which allows users to record and view expenses history to achieve their financial goal.",
    images: [
      { id: 0, src: "/BitSpend/Landing.png", alt: "Image of BitSpend landing page" },
      { id: 1, src: "/BitSpend/Record.png", alt: "Image of BitSpend home page" },
      { id: 2, src: "/BitSpend/Analysis.png", alt: "Image of BitSpend analysis page" },
      { id: 3, src: "/BitSpend/Expenses.png", alt: "Image of BitSpend expenses page" },
    ]
  }

  return (
    <div>
      <Hero />
      <h2 className="text-center md:text-left mb-10 text-4xl font-semibold">Projects</h2>
      <ProjectCard project={project1} />
      <ProjectCard project={project2} />
      <Skill />
    </div>
  );
}
