import React, { useEffect, useRef, useState } from "react";

import Toast from "./Toast";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";

// ?=============== EMAILJS
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1m7ivz",
        "template_1qy5sjm",
        form.current,
        "PPJQQJggp876IHSrC"
      )
      .then(
        (result) => {
          handleShowToast();
        },
        (error) => {
          console.log(error);
        }
      );

    e.target.reset();
  };

  const [toastState, setToastState] = useState(false);

  function handleShowToast() {
    setToastState(true);

    setTimeout(() => {
      setToastState(false);
    }, 5000);
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Dejame un mensaje</h2>
      <span className="section__subtitle">Te respondere en breves</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Contactame</h3>

          <div className="contact__info">
            <div className="contact__card">
              <IoLogoWhatsapp className="contact__card-icon" />

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-888-777</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="contact__button"
              >
                Escribeme
                <AiOutlineArrowRight className="contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <MdOutgoingMail className="contact__card-icon" />

              <h3 className="contact__card-title">E-mail</h3>
              <span className="contact__card-data">eameza1302@gmail.com</span>

              <a href="mailto:eameza1302@gmail.com" className="contact__button">
                Escribeme
                <AiOutlineArrowRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">o escribeme sobre tu proyecto</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Escribe tu nombre..."
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Correo</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Escribe tu correo..."
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Proyecto</label>
              <textarea
                name="project"
                className="contact__form-input"
                placeholder="Escribe tu proyecto..."
              ></textarea>
            </div>

            <button className="button button--flex">
              Enviar mensaje
              <RiSendPlaneFill className="button__icon" />
            </button>
          </form>
        </div>
      </div>

      <Toast _state={toastState} _title="Mensaje enviado" />
    </section>
  );
}

export default Contact;
