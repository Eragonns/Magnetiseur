import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [countryCode, setCountryCode] = useState("+33");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };
  const validatePhoneNumber = (phone, countryCode) => {
    const cleanedPhone = phone.replace(/\D/g, "");

    if (countryCode === "+33") {
      if (cleanedPhone.length !== 9) {
        return false;
      }
    }

    if (countryCode === "+32") {
      if (cleanedPhone.length !== 9) {
        return false;
      }
    }

    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(telephone);

    if (!firstName || !lastName || !email || !message) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    const fullPhoneNumber = telephone
      ? `${countryCode}${telephone.replace(/\s+/g, "")}`
      : "";

    console.log("Numéro complet avec code pays :", fullPhoneNumber);
    if (telephone && !validatePhoneNumber(telephone, countryCode)) {
      alert("Numéro de téléphone invalide. Vérifiez le format du numéro.");
      return;
    }
    setIsSubmitting(true);

    const contactData = {
      firstName,
      lastName,
      email,
      number: fullPhoneNumber,
      message
    };

    try {
      const response = await axiosInstance.post("/send-email", contactData);
      console.log("reponse de l'api:", response);

      alert("Votre message a été envoyé avec succès!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };

  const getPhonePlaceholder = () => {
    if (countryCode === "+33") {
      return "Ex: +33612345678";
    } else if (countryCode === "+32") {
      return "Ex: +32478123456";
    }
    return "Entrez votre numéro";
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
              name="number"
              className="contact_form_input"
              value={telephone}
              onChange={handleTelephoneChange}
              placeholder={getPhonePlaceholder()}
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
        <button
          type="submit"
          className="contact_form_btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </>
  );
};
export default Contact;
