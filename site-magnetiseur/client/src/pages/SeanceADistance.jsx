import { FaFacebook } from "react-icons/fa";

const SeanceADistance = () => {
  return (
    <section className="seanceADistance_container">
      <video className="seanceADistance_video" autoPlay loop muted>
        <source src="/mer.mp4" type="video/mp4" />
      </video>
      <h1 className="seanceADistance_titre">Séance de magnétisme à distance</h1>
      <p className="seanceADistance_text">
        Pour les séances à distance, le magnétiseur se met dans un état de
        concentration profond, en utilisant la méditation et la visualisation,
        il peut ensuite envoyer de l&apos;énergie vers le client. Celui-ci est
        invité à se détendre confortablement au calme. Pendant la séance , la
        personne peut ressentir des sensations telle que de la chaleur, des
        picotements. Après la séance, il y a une période de suivi pour discuter
        des sensations ressenties et des effets. Pour les séances à distance me
        faire parvenir une photo récente, votre nom et prénom ainsi que la ville
        de votre résidence.
      </p>
      <div className="seanceADistance_contact">
        <img
          src="/citation.webp"
          alt="citation rien dans ce monde n'arrive par hasard"
          className="seanceADistance_img"
        />
        <div className="seanceADistance_liens">
          <p className="seanceADistance_text2">
            {" "}
            <span className="seanceADistance_span">contact:</span>{" "}
            didieralternativemagnetisme@gmail.com facebook messenger : Didier
            Alternative Magnetisme
          </p>
          <a
            href="https://www.facebook.com/p/didier-alternative-magn%C3%A9tisme-100090829697007/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="seanceADistance_icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default SeanceADistance;
