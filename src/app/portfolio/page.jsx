import { fitBud, bitSpend } from "../project-data";
import Carousel from "../components/carousel";

export default function Page() {
  return (
    <section>
      <h1 className="text-center md:text-left text-4xl font-semibold mb-5">My Projects</h1>
      <h2 className="md:hidden mb-5 text-xl font-semibold text-center md:text-center">FitBud</h2>
      <div className="md:float-right md:ml-20 md:mb-5 md:mt-10">
        <Carousel images={fitBud.images} />
      </div>
      <h2 className="hidden md:block mb-5 text-xl font-semibold text-center md:text-center">FitBud</h2>
      <p>GitHub: </p>
      <p>Demo: </p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <h2 className="md:hidden mb-5 mt-14 text-xl font-semibold text-center md:text-center">BitSpend</h2>
      <div className="md:float-right md:ml-20 md:mb-5 md:mt-24">
        <Carousel images={bitSpend.images} />
      </div>
      <h2 className="hidden md:block mb-5 mt-14 text-xl font-semibold text-center md:text-center">BitSpend</h2>
      <p>GitHub: </p>
      <p>Demo: </p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
      <p className="mt-5 mb-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nobis dignissimos placeat sapiente hic necessitatibus! Sequi quos tenetur dolorum obcaecati nobis corporis omnis recusandae illum, inventore vero. Nostrum, exercitationem ipsum!</p>
    </section>
  )
}
