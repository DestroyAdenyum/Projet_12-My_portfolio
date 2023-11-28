import React, { useState } from "react";
import Modal from "react-modal";

function AchievementModal({ picture, title, text, site }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function openSiteLink() {
    window.open(site, "_blank");
  }

  function renderParagraphs(text) {
    const paragraphs = text.split('\n');
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

    return (
        <div>
            <button onClick={openModal} className="simple">
                En savoir <i className="fa-solid fa-plus"></i>
            </button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="achievementmodal"
            >
                <button className="achievementmodal__button close" onClick={closeModal}>Fermer</button>
                <div className="achievementmodal__text">{renderParagraphs(text)}</div>
                {site && (
                  <button className="achievementmodal__button openSite" onClick={openSiteLink}>
                    Site
                  </button>
                )}
                <img className="achievementmodal__picture" src={picture} alt={title}></img>
            </Modal>
        </div>
    );
}

export default AchievementModal;
