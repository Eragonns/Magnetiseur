import { NavLink } from "react-router-dom";
import { FaHome, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_liens">
        <li>
          {" "}
          <NavLink to="/" className="footer_lien">
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/magnetisme" className="footer_lien">
            Magnétisme ?
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/seanceADistance" className="footer_lien">
            Séance à distance
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/temoignages" className="footer_lien">
            Témoignages
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/tarifs" className="footer_lien">
            Tarifs
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact" className="footer_lien">
            Contact
          </NavLink>
        </li>
      </ul>
      <a
        href="https://www.facebook.com/p/didier-alternative-magn%C3%A9tisme-100090829697007/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer_icon"
      >
        <FaFacebook />
      </a>
      <p>
        Copyright &#169; 2025 Didier Lefebvre Praticien en Magnétisme. Tous
        droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
