"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email:"", message:"" });
  const [status, setStatus] = useState("");
  let statusClassName;

  if (status === "Message sent successfully!") {
    statusClassName = "text-green-400";
  } else if (status === "Failed to send message.") {
    statusClassName = "text-red-400";
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
        statusClassName = "text-red-400";
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
      statusClassName = "text-red-400";
    }
  };

  return (
    <form action="" className="mb-14" onSubmit={handleSubmit}>
      <label className="block" htmlFor="name">Name</label>
      <input
        className="border rounded-md p-1 mb-5 mt-2 w-full dark:bg-darkFormInput"
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        required />
      <label className="block" htmlFor="email">Email</label>
      <input className="border rounded-md p-1 mb-5 mt-2 w-full dark:bg-darkFormInput"
        type="text"
        name="email"
        id="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required />
      <label className="block" htmlFor="message">Message</label>
      <textarea
        className="border rounded-md p-1 mb-5 mt-2 w-full dark:bg-darkFormInput"
        rows="5"
        type="text"
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
        required />
      <input type="submit" className="bg-neutral-400 py-1 px-4 mb-2 rounded-md"/>
      <p className={statusClassName}>{status}</p>
    </form>
  )
}
