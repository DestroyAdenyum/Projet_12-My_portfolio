import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function FormContact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    lastname: "",
    firstname:"",
    email: "",
    phone:"",
    message: ""
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gdul39s',
      'template_ajd25hh',
      e.currentTarget,
      'umaZrQMTPrjMHJTGI'
    )
      .then((result) => {
          setForm({
            lastname: "",
            firstname:"",
            email: "",
            phone:"",
            message: ""
          });
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <form className="form" onSubmit={sendEmail} ref={formRef}>
        <div className="form__col">
          <div className="form__group">
            <label htmlFor="lastname">Nom</label>
            <input 
              type="text" 
              name="lastname"
              id="lastname"
              value={form.lastname}
              onChange={handleChange}
              required
              />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label htmlFor="firstname">Prénom</label>
            <input 
              type="text" 
              name="firstname"
              id="firstname"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label htmlFor="phone">Téléphone</label>
            <input 
              type="text" 
              name="phone"
              id="phone"
              value={form.phone}
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className="form__col">
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea 
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required 
            >
            </textarea>
          </div>
        </div>

        <div className="form__col button">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
  );
}

export default FormContact;
