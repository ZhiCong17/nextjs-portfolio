import Carousel from "./carousel";

export default function ProjectCard({ project }) {
  let cardClass;
  let divClass;

  project.id % 2 === 0 ? cardClass = "md:flex md:flex-row-reverse justify-between mt-5 mb-14 text-center md:text-left" : cardClass = "md:flex justify-between mt-5 mb-14 text-center md:text-left";
  project.id % 2 === 0 ? divClass = "md:ml-20 mb-5" : divClass = "md:mr-20 mb-5";

  return (
    <section className={cardClass}>
      <div className={divClass}>
        <h2 className="mt-5 mb-5 text-xl font-semibold">{project.id}) {project.title}</h2>
        <p>{project.description}</p>
      </div>
      <Carousel images={project.images}/>
    </section>
  )
}
