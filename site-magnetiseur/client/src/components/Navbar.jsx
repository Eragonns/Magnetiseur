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
          <NavLink to="/">
            <FaHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Magnétisme ?</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Séance à distance</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Témoignages</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Tarifs</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/">Contact</NavLink>
        </li>
      </ul>
      <BurgerBtn />
    </nav>
  );
}

export default Navbar;
