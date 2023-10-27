import React from "react";

function FormContact() {
    return (
        <form id="contact__form">
            <div className="form__group">
                <label htmlFor="name">Nom</label>
                <input type="text" className="form__control" />
            </div>
            <div className="form__group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form__control" aria-describedby="emailHelp" />
            </div>
            <div className="form__group">
                <label htmlFor="message">Message</label>
                <textarea className="form__control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
    )
}

export default FormContact;