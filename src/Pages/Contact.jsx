import React from "react";

import FormContact from "../Components/FormContact";

function Contact() {
  return (
    <div className="wrapper contact">
      <h1 className="contact__title">Formulaire de contact</h1>
      <FormContact />
      <div className="social">
        <h2 className="social__title">Suivez-moi sur les différentes plateformes</h2>
        <ul className="social__list">
          <li> <a href="https://github.com/DestroyAdenyum" target="_blank" rel="noreferrer" ><span><i className="fa-brands fa-github"></i></span></a></li>
          <li> <a href="https://www.linkedin.com/in/marie-charlotte-levitre" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin-in"></i></span></a></li>
          <li> <a href="mailto:levitre.mariecharlotte@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
