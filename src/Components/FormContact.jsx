import React from "react";

function FormContact() {
  return (
      <form className="form">
        <div className="form__col">
          <div className="form__group">
            <label>Nom</label>
            <input type="text" />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label>Prénom</label>
            <input type="text" />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label>Téléphone</label>
            <input type="text" />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label>Message</label>
            <textarea></textarea>
          </div>
        </div>

        <div className="form__col button">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
  );
}

export default FormContact;
