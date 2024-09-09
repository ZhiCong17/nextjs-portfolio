import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="md:hidden text-center my-20">
        <Image
          src="/Me.jpg"
          width={180}
          height={180}
          className="rounded-full aspect-square object-cover mx-auto"
          alt="Image of creator"
        />
        <h1 className="text-5xl my-4 text-2xl font-semibold">Hello, I&apos;m <span className="text-nowrap">Zhi Cong</span></h1>
        <p>A <em><strong>Mechanical Engineer</strong></em> embracing a new chapter in <em><strong>Web Development</strong></em>, excited to leverage problem-solving skills and a keen eye for design to build impactful web solutions.</p>
      </section>
      <div className="hidden md:flex mt-20">
        <section className="mr-10 my-auto">
          <h1 className="mb-4 text-4xl font-semibold">Hello, I&apos;m Zhi Cong</h1>
          <p>A <em><strong>Mechanical Engineer</strong></em> embracing a new chapter in <em><strong>Web Development</strong></em>, excited to leverage problem-solving skills and a keen eye for design to build impactful web solutions.</p>
        </section>
        <Image
          src="/Me.jpg"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover"
          alt="Image of creator"
        />
      </div>
    </>
  )
}
