import React from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom/dist";

function NavbarModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Menu Modal"
      className="modal"
      overlayClassName="Overlay"
    >
      <ul className="modal__menu">
        <li>
          <NavLink to="/" onClick={closeModal}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutMe" onClick={closeModal}>
            Fiche personnage
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" onClick={closeModal}>
            Haut faits
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" onClick={closeModal}>
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="modal__social">
        <li>
          {" "}
          <a
            href="https://github.com/DestroyAdenyum"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="fa-brands fa-github"></i>
            </span>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/marie-charlotte-levitre"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </a>
        </li>
        <li>
          <a
            href="mailto:levitre.mariecharlotte@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="close-modal" onClick={closeModal}>
        <span>Fermer le menu</span>
      </div>
    </Modal>
  );
}

export default NavbarModal;
