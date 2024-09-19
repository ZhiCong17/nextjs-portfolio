import ContactForm from "../components/contact-form"

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-semibold">Contact Details</h1>
      <p className="mt-5">Email: zhicong1989@gmail.com</p>
      <p className="">GitHub: ZhiCong17</p>
      <p className="">LinkedIn: Zhi Cong Ore</p>

      <h2 className="text-4xl font-semibold mt-14">Contact Me</h2>
      <p className="my-5">Drop me an email and I will get back to you as soon as I can.</p>
      <ContactForm />
    </section>
  )
}
