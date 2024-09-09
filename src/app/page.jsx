import Image from "next/image";
import Footer from "./components/footer";

function Hero() {
  return (
    <div className="flex px-60 mt-20">
      <section className="mr-40 my-auto">
        <h1 className="text-5xl mb-10">Hi, I&apos;m Zhi Cong</h1>
        <p>An <em><strong>Engineer</strong></em> embracing a new chapter in <em><strong>Web Development</strong></em>, excited to leverage problem-solving skills and a keen eye for design to build impactful web solutions.</p>
      </section>
      <Image
        src="/Me.jpg"
        width={400}
        height={400}
        className="rounded-full"
        alt="Image of creator"
        style={{objectFit: "contain"}}
      />
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <section className="mx-60 p-10 w-6/12 flex border-2 rounded-xl">
      <Image
          src="/istockphoto-1324356458-2048x2048.jpg"
          alt="Image of project"
          width={400}
          height={400}
        />
      <div className="ms-20">
        <h2 className="mt-14 mb-4">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </section>
  )
}

function Skill() {
  return (
    <section className="flex px-60 items-center my-40">
      <h2 className="mr-40">My Skills</h2>
      <ul className="flex gap-x-4">
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">HTML5</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">CSS3</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">Bootstrap</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">Tailwind CSS</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">JavaScript</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">React</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">Next.js</li>
        <li className="border-2 bg-gray-400 rounded-md py-2 px-6">Rails</li>
      </ul>
    </section>
  )
}

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
      {/* <Hero />
      <ProjectCard project={project1} />
      <div className="flex justify-end mt-10">
        <ProjectCard project={project2} />
      </div>
      <Skill /> */}
      <Footer />
    </div>
  );
}
