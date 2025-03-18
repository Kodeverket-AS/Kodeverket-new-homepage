"use client";
import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Wiadomość wysłana pomyślnie!");
      } else {
        const errorData = await response.json(); 
        alert(errorData.error || "Noe gikk galt. Prøv igjen.");
      }
    } catch (error) {
      console.error("Feil ved sending:", error);
      alert("Noe gikk galt. Prøv igjen.");
    }
  };

  return (
    <div className="text-white bg-cyan-950 flex flex-col items-center justify-center rounded-xl md:w-1/2">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 w-full mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Kontakt oss</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 mb-2 w-4/5 md:w-3/4 self-center"
        >
          <label htmlFor="name" className="font-medium">
            Personlig informasjon
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Navn"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 rounded bg-cyan-950 text-white border border-white font-medium focus:outline-none focus:bg-white focus:text-cyan-950"
          />
          <input
            type="email"
            name="email"
            placeholder="E-post"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-2 rounded bg-cyan-950 text-white border border-white font-medium focus:outline-none focus:bg-white focus:text-cyan-950"
          />
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefonnummer"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-2 rounded bg-cyan-950 text-white border border-white font-medium focus:outline-none focus:bg-white focus:text-cyan-950"
          />
          <label htmlFor="message" className="font-medium">
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Skriv din melding her..."
            value={formData.message}
            onChange={handleChange}
            required
            className="p-2 rounded bg-cyan-950 text-white border border-white h-44 md:h-32 font-medium focus:outline-none focus:bg-white focus:text-cyan-950"
          ></textarea>

          <button
            type="submit"
            className="mx-auto text-white bg-sky-700 rounded h-10 px-12 cursor-pointer mb-8 hover:border-2 hover:border-white hover:bg-cyan-950"
          >
            Send melding
          </button>
        </form>
      </div>
    </div>
  );
}
