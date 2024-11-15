// import axiosInstance from "../utils/axiosInstance.js";
import axiosRender from "../utils/axiosRender.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useCarousel } from "../utils/carousel.util.js";

const Home = () => {
  const [temoignages, setTemoignages] = useState([]);

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
    <div className="home_container">
      <div>
        <img src="/photo.webp" alt="photo de Didier Lefebvre" />
      </div>
      <p className="home_text">
        Je vous accompagne afin de retrouver un équilibre du corps et de
        l&apos;esprit. Dans le domaine du &quot;bien être et du développement
        personnel&quot;. Après 20 ans en entreprise, j&apos;ai changé mon
        approche du monde du travail, et je me suis formé pour intervenir auprès
        des personnes agées et celles en situation d&apos; handicap. J&apos;ai
        acquis beaucoup d&apos;expérience auprès des plus fragilisés. J&apos;ai
        toujours été intéressé par la médecine alternative et les soins
        complémentaires aux traitements médicaux. C&apos;est donc naturellement
        que je me suis formé aux soins en magnétisme.
      </p>
      <Carousel
        key={temoignages.length}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        infiniteLoop
        autoPlay={autoPlayEnabled}
        interval={10000}
        transitionTime={600}
        stopOnHover={false}
        onClickItem={toggleAutoPlay}
        className="carousel"
      >
        {temoignages.map((temoignage, index) => (
          <div key={temoignage._id} className="carousel_container">
            <h2>{temoignage.firstName},</h2>
            <h3 translate="no">{temoignage.city}</h3>
            <p
              ref={(message) => (messageRef.current[index] = message)}
              className={`carousel_text carousel_text ${
                scrollableMessages[index] ? "scrollable" : ""
              }`}
            >
              &quot;{temoignage.message}&quot;
            </p>{" "}
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
    </div>
  );
};
export default Home;
