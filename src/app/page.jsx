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
      <ProjectCard project={project1} />
      {/* <div className="flex justify-end mt-10">
        <ProjectCard project={project2} />
      </div> */}
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quos adipisci asperiores ut accusamus molestiae saepe exercitationem expedita natus cum quibusdam et pariatur enim, ipsa, voluptate sed nisi tenetur perferendis architecto sint provident. Quas voluptas maxime laudantium ullam amet, tempore rem natus in totam aperiam omnis inventore blanditiis quae earum qui architecto ipsa sequi minus fugit dolorem illum expedita aut! Ex aliquid delectus praesentium rem? Nihil nostrum, perferendis, officiis facilis adipisci maiores quisquam aliquid, ratione dolores voluptatem obcaecati. Quasi velit fuga aut possimus aliquam hic? Possimus porro officiis similique, cum dolorum illum. Similique adipisci possimus, laudantium aut repudiandae quae saepe.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quos adipisci asperiores ut accusamus molestiae saepe exercitationem expedita natus cum quibusdam et pariatur enim, ipsa, voluptate sed nisi tenetur perferendis architecto sint provident. Quas voluptas maxime laudantium ullam amet, tempore rem natus in totam aperiam omnis inventore blanditiis quae earum qui architecto ipsa sequi minus fugit dolorem illum expedita aut! Ex aliquid delectus praesentium rem? Nihil nostrum, perferendis, officiis facilis adipisci maiores quisquam aliquid, ratione dolores voluptatem obcaecati. Quasi velit fuga aut possimus aliquam hic? Possimus porro officiis similique, cum dolorum illum. Similique adipisci possimus, laudantium aut repudiandae quae saepe.</p>
      <Skill />
    </div>
  );
}
