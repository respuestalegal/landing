"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { FadeIn } from "../components/FadeIn";
import { Offices } from "../components/Offices";
import { PageIntro } from "../components/PageIntro";
import { SocialMedia } from "../components/SocialMedia";
import sendEmail from "../../hooks/sendEmail"
import { Toaster, toast } from "sonner";

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      await sendEmail(formData);
      toast.success("¡Correo enviado con éxito!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Error al enviar el correo. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" value={formData.name} autoComplete="name" onChange={handleInputChange} />
          <TextInput label="Email" type="email" name="email" value={formData.email} autoComplete="email" onChange={handleInputChange} />
          <TextInput label="Teléfono" type="tel" name="phone" value={formData.phone} autoComplete="tel" onChange={handleInputChange} />
          <TextInput label="Consulta" name="message" value={formData.message} onChange={handleInputChange} />
        </div>
        <Button type="submit" className="mt-10">Enviar</Button>
      </form>
      <Toaster />
    </FadeIn>
  );
}

export default ContactForm;
