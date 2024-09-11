import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="text-center my-20">
        <Image
          src="/Me.jpg"
          width={180}
          height={180}
          className="rounded-full aspect-square object-cover mx-auto"
          alt="Image of creator"
        />
        <h1 className="text-5xl mt-10 mb-5 text-2xl font-semibold">Hello, I&apos;m <span className="text-nowrap">Zhi Cong</span></h1>
        <p>A <em><strong>Mechanical Engineer</strong></em> embracing a new chapter in <em><strong>Web Development</strong></em>, excited to leverage problem-solving skills and a keen eye for design to build impactful web solutions.</p>
      </section>
    </>
  )
}
