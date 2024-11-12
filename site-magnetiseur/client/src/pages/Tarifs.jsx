import { IoMan } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
const Tarifs = () => {
  return (
    <section className="tarifs_container">
      <div className="tarifs_service_container">
        <p className="tarifs_service">
          Pour toute intervention, je me déplace à domicile, ou séance à
          distance.
        </p>
      </div>
      <h1 className="tarifs_title">Tarifs</h1>
      <article className="tarifs_article">
        <IoMan className="tarifs_icon" />
        <h2 className="tarifs_articleTitle">ADULTE</h2>
        <p className="tarifs_articleText">
          1 séance d&apos;une heure 60&#8364;
        </p>
      </article>
      <article className="tarifs_article">
        <FaChildren className="tarifs_icon" />
        <h2 className="tarifs_articleTitle">
          ENFANT <br />
          MOINS DE 12 ANS
        </h2>
        <p className="tarifs_articleText">
          1 séance d&apos;une heure 35&#8364;
        </p>
      </article>
      <article className="tarifs_article">
        <GiPathDistance className="tarifs_icon" />
        <h2 className="tarifs_articleTitle">
          Séance magnétisme <br />à distance
        </h2>
        <p className="tarifs_articleText">
          1 séance d&apos;une heure 50&#8364;
        </p>
      </article>
    </section>
  );
};
export default Tarifs;
