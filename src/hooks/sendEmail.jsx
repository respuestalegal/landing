"use server";

import { Resend } from "resend";

export default async function sendEmail(formData) {
  const resendKey = "re_dD7RWa9F_GaLXbnpSnw9e9WwtcpFyGuVT"; // Usar la variable de entorno

  if (!resendKey) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const resend = new Resend(resendKey);

  try {
    // Construir el contenido del mensaje dinámicamente
    const messageContent = Object.entries(formData)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["respuestalegalestudio@gmail.com"],
      subject: `Nueva consulta en la página web`,
      react: (
        <div>
          <h1>Detalles del contacto</h1>
          <div dangerouslySetInnerHTML={{ __html: messageContent }} />
        </div>
      ),
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
