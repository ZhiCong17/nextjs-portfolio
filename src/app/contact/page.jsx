export default function Page() {
  return (
    <section>
      <h1 className="text-center md:text-left text-4xl font-semibold">Contact</h1>
      <p className="text-center md:text-left my-5">Drop me an email and I will get back to you as soon as I can.</p>
      <form action="">
        <label className="block" htmlFor="name">Name</label>
        <input className="border rounded-md p-1 mb-5 mt-2 w-full" type="text" name="name" required />
        <label className="block" htmlFor="email">Email</label>
        <input className="border rounded-md p-1 mb-5 mt-2 w-full" type="text" name="email" required />
        <label className="block" htmlFor="message">Message</label>
        <textarea className="border rounded-md p-1 mb-5 mt-2 w-full" rows="5" type="text" name="message" required />
      </form>
    </section>
  )
}
