import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaPlay, FaPause } from "react-icons/fa";
import { useCarousel } from "../utils/carousel.util.js";

const Temoignages = () => {
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [temoignages, setTemoignages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const temoignagesData = {
    firstName,
    city,
    message
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosInstance.post("/temoignages", temoignagesData);
      alert("Votre temoignage a été envoyé avec succès!");
      setFirstName("");
      setCity("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Erreur lors de l'envoie du temoignages :", error);
      alert("Une erreur s'est produite. Veuillez réessayer. ");
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const loadTemoignages = async () => {
      try {
        const response = await axiosInstance.get("/temoignages");

        setTemoignages(response.data.temoignages);
      } catch (error) {
        console.error("Échec de la récupération des témoignages", error);
      }
    };
    loadTemoignages();
  }, []);

  const {
    messageRef,
    scrollableMessages,
    autoPlayEnabled,
    showIcon,
    toggleAutoPlay,
    handlePlay,
    handlePause
  } = useCarousel(temoignages);

  return (
    <>
      <h1 className="temoignages_title">Partagez votre expérience</h1>
      <form className="temoignages_form" onSubmit={handleSubmit}>
        <div className="temoignages_form_block">
          <label htmlFor="firstName">Votre Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="temoignages_form_input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="temoignages_form_block">
          <label htmlFor="city">Votre Ville:</label>
          <input
            type="text"
            id="city"
            name="city"
            autoCorrect="off"
            className="temoignages_form_input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="temoignages_form_block">
          <label htmlFor="message">Votre Témoignages:</label>
          <textarea
            id="message"
            name="message"
            className="temoignages_form_text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="temoignages_form_btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>
      </form>
      <Carousel
        key={temoignages.length}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        infiniteLoop
        autoPlay={autoPlayEnabled}
        interval={5000}
        transitionTime={600}
        stopOnHover={false}
        onClickItem={toggleAutoPlay}
        className="temoignages_carousel"
      >
        {temoignages.map((temoignage, index) => (
          <div key={temoignage._id}>
            <h2>{temoignage.firstName},</h2>
            <h3>{temoignage.city}</h3>
            <p
              ref={(message) => (messageRef.current[index] = message)}
              className={`carousel_text ${
                scrollableMessages[index] ? "scrollable" : ""
              }`}
            >
              &quot;{temoignage.message}&quot;
            </p>
            <div
              className={`home_carousel_icon ${
                showIcon === "play" ? "show" : ""
              }`}
              onClick={handlePlay}
            >
              <FaPlay size={40} />
            </div>
            <div
              className={`home_carousel_icon ${
                showIcon === "pause" ? "show" : ""
              }`}
              onClick={handlePause}
            >
              <FaPause size={40} />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};
export default Temoignages;
