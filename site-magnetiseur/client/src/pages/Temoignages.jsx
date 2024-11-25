import { useEffect, useState } from "react";
import axiosRender from "../utils/axiosRender.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaPlay, FaPause } from "react-icons/fa";
import { useCarousel } from "../utils/carousel.util.js";
import Swal from "sweetalert2";

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
      await axiosRender.post("/temoignages", temoignagesData);
      await Swal.fire({
        icon: "success",
        title: "Témoignage ajouté avec succès !",
        confirmButtonText: "OK"
      });
      setFirstName("");
      setCity("");
      setMessage("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Erreur lors de l'envoie du temoignages :", error);
      await Swal.fire({
        icon: "error",
        title: "Échec de l'ajout du témoignage.",
        text: "Une erreur s'est produite, veuillez réessayer.",
        confirmButtonText: "OK"
      });
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const loadTemoignages = async () => {
      try {
        const response = await axiosRender.get("/temoignages");

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
    <section className="temoignages_container">
      <h1 className="temoignages_title">Partagez votre expérience</h1>
      <div className="temoignages_bloc">
        <img
          src="/temoignages.jfif"
          alt="image d'une femme méditant dans une forêt "
          className="temoignages_img"
        />

        <form className="temoignages_form" onSubmit={handleSubmit}>
          <h2 className="temoignages_form_title">Laissez votre Témoignage</h2>
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
      </div>
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
        className="carousel"
      >
        {temoignages.map((temoignage, index) => (
          <div key={temoignage._id}>
            <h2 className="carousel_title">{temoignage.firstName},</h2>
            <h3 translate="no" className="carousel_title">
              {temoignage.city}
            </h3>
            <p
              ref={(message) => (messageRef.current[index] = message)}
              className={`carousel_text carousel_text ${
                scrollableMessages[index] ? "scrollable" : ""
              }`}
            >
              &quot;{temoignage.message}&quot;
            </p>
            <div
              className={`carousel_icon ${showIcon === "play" ? "show" : ""}`}
              onClick={handlePlay}
            >
              <FaPlay size={40} />
            </div>
            <div
              className={`carousel_icon ${showIcon === "pause" ? "show" : ""}`}
              onClick={handlePause}
            >
              <FaPause size={40} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
export default Temoignages;
