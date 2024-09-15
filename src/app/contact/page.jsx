import ContactForm from "../components/contact-form"

export default function Page() {
  return (
    <section>
      <h1 className="text-center md:text-left text-4xl font-semibold">Contact</h1>
      <p className="text-center md:text-left my-5">Drop me an email and I will get back to you as soon as I can.</p>
      <ContactForm />
    </section>
  )
}
