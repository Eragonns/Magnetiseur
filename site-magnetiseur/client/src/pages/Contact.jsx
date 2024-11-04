import { useState } from "react";

const Contact = () => {
  const [telephone, setTelephone] = useState("");

  const handleTelephoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) setTelephone(value);
  };

  return (
    <>
      <h1 className="contact_title">Formulaire de Contact</h1>
      <form className="contact_form">
        <div className="contact_form_block">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="lastName"
            className="contact_form_input"
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="contact_form_input"
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact_form_input"
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="telephone">Numero de téléphone</label>
          <input
            type="number"
            id="telephone"
            name="telephone"
            className="contact_form_input"
            value={telephone}
            onChange={handleTelephoneChange}
            placeholder="10 chiffres"
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="contact_form_text"
          ></textarea>
        </div>
        <button type="submit" className="contact_form_btn">
          Envoyer
        </button>
      </form>
    </>
  );
};
export default Contact;
