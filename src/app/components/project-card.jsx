import Image from "next/image";

export default function ProjectCard({ project }) {
  let cardClass;
  let divClass;
  const displayPic = project.images.find(image => image.alt.includes("homepage"));

  project.id % 2 === 0 ? cardClass = "md:flex md:flex-row-reverse justify-between mt-5 mb-14 text-center md:text-left" : cardClass = "md:flex justify-between mt-5 mb-14 text-center md:text-left";
  project.id % 2 === 0 ? divClass = "md:ml-20 mb-5 md:w-3/5" : divClass = "md:mr-20 mb-5 md:w-3/5";

  return (
    <section className={cardClass}>
      <div className={divClass}>
        <h2 className="mt-5 mb-5 text-xl font-semibold">{project.id}) {project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="w-44 h-80 md:w-52 md:h-96 relative mx-auto">
        <Image
          src={displayPic.src}
          alt={displayPic.alt}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{objectFit: "cover"}}
        />
      </div>
    </section>
  )
}
