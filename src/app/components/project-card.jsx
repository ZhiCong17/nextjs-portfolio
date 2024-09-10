"use client";

import Image from "next/image"

export default function ProjectCard({ project }) {
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
