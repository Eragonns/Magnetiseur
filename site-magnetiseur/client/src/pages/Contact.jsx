import { useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../utils/axiosInstance";
import { BsTelephoneFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

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

    if (!firstName || !lastName || !email || !message) {
      alert("Tous les champs doivent être remplis.");
      return;
    }

    const fullPhoneNumber = telephone
      ? `${countryCode}${telephone.replace(/\s+/g, "")}`
      : "";

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
      await axiosInstance.post("/send-email", contactData);

      await Swal.fire({
        icon: "success",
        title: "Message envoyé avec succès !",
        confirmButtonText: "OK"
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setTelephone("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      await Swal.fire({
        icon: "error",
        title: "Échec de l'envoie du message.",
        text: "Une erreur s'est produite, veuillez réessayer.",
        confirmButtonText: "OK"
      });
      setIsSubmitting(false);
    }
  };

  const getPhonePlaceholder = () => {
    if (countryCode === "+33") {
      return "Ex:+33612345678";
    } else if (countryCode === "+32") {
      return "Ex:+32478123456";
    }
    return "Entrez votre numéro";
  };

  return (
    <section className="contact_container">
      <h1 className="contact_title">Formulaire de Contact</h1>
      <div className="contact_bloc">
        <img
          src="/contact.jfif"
          alt="image de la page de contact"
          className="contact_img"
        />
        <form className="contact_form" onSubmit={handleSubmit}>
          <h2 className="contact_form_title">Laissez moi votre message</h2>
          <div className="contact_form_block">
            <label htmlFor="firstName">Prénom:</label>
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
            <label htmlFor="lastName">Nom:</label>
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
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="telephone">Numero de téléphone:</label>
            <div className="contact_telephone_input">
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
            <label htmlFor="message">Message:</label>
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
      </div>

      <section className="contact_sections">
        <div className="contact_section">
          <BsTelephoneFill size={30} />
          <a href="tel:0675150088" className="contact_section_link">
            <strong>06 75 15 00 88</strong>
          </a>
        </div>
        <div className="contact_section">
          {" "}
          <IoIosMail size={30} />
          <a
            href="mailto:didieralternativemagnetisme@gmail.com"
            className="contact_section_link"
          >
            <strong>
              didieralternativemagnetisme
              <span className="contact_email_domain">@gmail.com</span>
            </strong>
          </a>
        </div>

        <div className="contact_section">
          <BsFillHandThumbsUpFill size={30} />
          <a
            href="https://www.facebook.com/p/didier-alternative-magn%C3%A9tisme-100090829697007/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact_section_link"
          >
            <FaFacebook size={25} />
          </a>
        </div>
      </section>
    </section>
  );
};
export default Contact;
