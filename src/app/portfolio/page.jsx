import { fitBud, bitSpend } from "../project-data";
import Carousel from "../components/carousel";

export default function Page() {
  return (
    <section>
      <h1 className="text-center md:text-left text-4xl font-semibold">My Projects</h1>
      <h2 className="mt-5 mb-5 text-xl font-semibold text-center">FitBud</h2>
      <Carousel images={fitBud.images} />
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <h2 className="mt-10 mb-5 text-xl font-semibold text-center">BitSpend</h2>
      <Carousel images={fitBud.images} />
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5 mb-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
    </section>
  )
}
