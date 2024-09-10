"use client";

import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <section className="md:flex justify-between mt-20">
      <div className="w-32 h-80 md:w-48 md:h-96 relative mx-auto md:mx-0">
        <Image
          src="/istockphoto-1324356458-2048x2048.jpg"
          alt="Image of project"
          fill={true}
        />
      </div>
      <div className="md:w-3/5">
        <h2 className="my-4 text-xl font-semibold">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </section>
  )
}
