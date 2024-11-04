import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
function BurgerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`burgerBtn_menu ${isOpen ? "open" : ""}`}>
        <div
          className={`burgerBtn_icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <FaBars className="burgerBtn_reactIcon" />
        </div>
        <div className={`burgerBtn_links ${isOpen ? "open" : ""}`}>
          <div className="burgerBtn_close" onClick={toggleMenu}>
            <ImCross className="burgerBtn_close_icon" onClick={toggleMenu} />{" "}
          </div>
          <div className="burgerBtn_container">
            <h1 className="burgerBtn_title">
              DIDIER LEFEBVRE <br />
              Praticien en Magnétisme
            </h1>
            <ul className="burgerBtn_liens">
              <li>
                <NavLink to="/" className="burgerBtn_lien" onClick={toggleMenu}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/magnetisme"
                  className="BurgerBtn_lien"
                  onClick={toggleMenu}
                >
                  Magnétisme ?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/seanceADistance"
                  className="BurgerBtn_lien"
                  onClick={toggleMenu}
                >
                  Séance à distance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/temoignages"
                  className="BurgerBtn_lien"
                  onClick={toggleMenu}
                >
                  Témoignages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tarifs"
                  className="BurgerBtn_lien"
                  onClick={toggleMenu}
                >
                  Tarifs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="BurgerBtn_lien"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default BurgerBtn;
