import React from "react";
import * as emailjs from "emailjs-com";
import StyledContactForm from "./ContactForm.css";
import { Form, Field } from "react-final-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

function Contact() {
  function sendEmail() {
    emailjs
      .sendForm("gmail", "portfolio", ".form", process.env.REACT_APP_EMAILJS)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const notify = () =>
    toast.dark("Email został wysłany", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const required = (value) => (value ? undefined : "To pole jest wymagane.");
  return (
    <StyledContactForm>
      <Form
        onSubmit={(() => sendEmail, notify)}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form
            className="form"
            onSubmit={async (event) => {
              await handleSubmit(event);
              form.reset();
            }}
          >
            <Field name="firstName">
              {({ input, meta }) => (
                <div>
                  <label>Twoje imię:</label>
                  <input {...input} type="text" placeholder="Imię" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Email:</label>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="message" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Wiadomość:</label>
                  <textarea
                    {...input}
                    rows="10"
                    cols="45"
                    placeholder="Wiadomość"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Wyślij
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <div className="contact-icons">
              <a
                href="https://github.com/witoldandreasik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="fab fa-github"></em>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/witold-andreasik-21bb421aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="fab fa-linkedin"></em>
              </a>
              <a
                href="https://drive.google.com/file/d/16KB4wNfSgLycw774KNNPOXgrfjD0WEv0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <em className="fas fa-file-pdf">
                  <span>CV</span>
                </em>
              </a>
              <em className="fas fa-envelope">
                <span>witoldandreasik@gmail.com</span>
              </em>
            </div>
          </form>
        )}
      />
      <ToastContainer />
    </StyledContactForm>
  );
}

export default Contact;
