import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [countryCode, setCountryCode] = useState("+33");
  const [message, setMessage] = useState("");
  const phoneRegex =
    /^(?:\+32\s?|0)[4-9]\d{1}(\s?\d{2}){4}$|^(?:\+33\s?|0)[67]\d{1}(\s?\d{2}){4}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !telephone || !message) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    const fullPhoneNumber = `${countryCode} ${telephone}`;
    if (!phoneRegex.test(fullPhoneNumber)) {
      alert(
        "Numéro de téléphone invalide. Format attendu : +32 478 12 34 56 (Belgique) ou +33 6 12 34 56 78 (France)"
      );
      return;
    }

    const contactData = {
      firstName,
      lastName,
      email,
      number: fullPhoneNumber,
      message
    };

    try {
      await axios.post("http://localhost:5000/api/v1/send-email", contactData);
      alert("Votre message a été envoyé avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <>
      <h1 className="contact_title">Formulaire de Contact</h1>
      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="contact_form_block">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="contact_form_input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="contact_form_input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact_form_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact_form_block">
          <label htmlFor="telephone">Numero de téléphone</label>
          <div className="telephone_input_container">
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="country_code_select"
            >
              <option value="+33">+33 (France)</option>
              <option value="+32">+32 (Belgique)</option>
            </select>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="contact_form_input"
              value={telephone}
              onChange={handleTelephoneChange}
              placeholder="Entrez votre numéro"
              required
            />
          </div>
        </div>
        <div className="contact_form_block">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="contact_form_text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
