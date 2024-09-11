"use client";

import { useState, useEffect } from "react";
import Image from "next/image"

function Carousel({ images }) {
  const [currentImageId, setCurrentImageId] = useState(0);

  let image = images.find(image => image.id === currentImageId);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      currentImageId === images[images.length - 1].id ?
      setCurrentImageId(0) : setCurrentImageId(currentImageId + 1)
    }, 2500);

    return () => clearTimeout(timeOutId);
  }, [currentImageId, images]);

  function handleLeftArrowClick() {
    currentImageId === 0 ?
    setCurrentImageId(images.length - 1) : setCurrentImageId(currentImageId - 1)
  }

  function handleRightArrowClick() {
    currentImageId === images.length - 1 ?
    setCurrentImageId(0) : setCurrentImageId(currentImageId + 1);
  }

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="text-2xl text-neutral-500 h-max my-auto"
          onClick={handleLeftArrowClick}
        >
          &lt;
        </button>
        <div className="w-44 h-80 md:w-52 md:h-96 relative mx-4">
          <Image
            src={image.src}
            alt={image.alt}
            fill={true}
            style={{objectFit: "cover"}}
          />
        </div>
        <button
          className="text-2xl text-neutral-500 h-max my-auto"
          onClick={handleRightArrowClick}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center gap-x-3 mt-1 text-xl">
        {images.map(image => image.id === currentImageId ?
          <p key={image.id} className="text-blue-500">●</p> :
          <p key={image.id} className="text-neutral-200">●</p>
        )}
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <section className="md:flex justify-between mt-5 text-center md:text-left">
      <Carousel images={project.images}/>
      <div className="md:ml-20">
        <h2 className="my-4 text-xl font-semibold">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </section>
  )
}
