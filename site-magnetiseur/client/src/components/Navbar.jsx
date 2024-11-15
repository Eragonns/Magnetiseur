import { NavLink } from "react-router-dom";
import BurgerBtn from "./BurgerBtn";
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.webp" alt="logo du site" className="navbar_logo" />
      <h1 className="navbar_title">
        {" "}
        DIDIER LEFEBVRE <br />
        Praticien en Magnétisme
      </h1>
      <ul className="navbar_liens">
        <li>
          {" "}
          <NavLink to="/" className="navbar_lien">
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/magnetisme" className="navbar_lien">
            Magnétisme ?
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/seanceADistance" className="navbar_lien">
            Séance à distance
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/temoignages" className="navbar_lien">
            Témoignages
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/tarifs" className="navbar_lien">
            Tarifs
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/contact" className="navbar_lien">
            Contact
          </NavLink>
        </li>
      </ul>
      <BurgerBtn />
    </nav>
  );
}

export default Navbar;
