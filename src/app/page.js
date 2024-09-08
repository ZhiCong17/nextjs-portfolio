import Image from "next/image";

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

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
