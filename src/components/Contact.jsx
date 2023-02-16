import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firestore from "../firebase";

import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "./Tooltip";

const Contact = ({ classicHeader, darkTheme }) => {
  const [sendingMail, setSendingMail] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const db = getFirestore();

  const sendEmail = async e => {
    e.preventDefault();

    setSendingMail(true);

    try {
      addDoc(collection(db, 'contact'), contact);

      document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkTheme ? "dark" : "light",
          })

      setSendingMail(false);

    } catch (e) {
      setSendingMail(false);

      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkTheme ? "dark" : "light",
      });

      console.error('Error adding document: ', e);
    }
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setContact(prevData => ({
      ...prevData, 
      [name]: value}));
  }

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Contact
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* contact details */}
          <div className="col-md-12 col-xl-12 order-1 order-md-0 text-center text-md-start">
            <p className={"text-3 mb-1 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <a href="tel:1.604.442.4464"><i className="fas fa-phone" /></a>
              </span>
              (604) 442 4464
            </p>
            <p className={"text-3 mb-4 " + (darkTheme ? "text-light" : "")}>
              <span className="text-primary text-4 me-2">
                <a href="mailto:joshua@cyrenian.me"><i className="fas fa-envelope" /></a>
              </span>
              joshua@cyenian.me
            </p>
            <h2
              className={
                "mb-3 text-5 text-uppercase " + (darkTheme ? "text-white" : "")
              }
            >
              Follow Me
            </h2>
            <ul
              className={
                "social-icons justify-content-center justify-content-md-center " +
                (darkTheme ? "social-icons-muted" : "")
              }
            >
              <li className="social-icons-twitter">
                <Tooltip text="Twitter" placement="top">
                  <a
                    href="https://twitter.com/thetipsyhacker/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-stackoverflow">
                <Tooltip text="Stackoverflow" placement="top">
                  <a
                    href="https://stackoverflow.com/users/2524771/thetipsyhacker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-stack-overflow" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-reddit">
                <Tooltip text="Reddit" placement="top">
                  <a
                    href="https://www.reddit.com/user/thetipsyhacker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-reddit" />
                  </a>
                </Tooltip>
              </li>
              <li className="social-icons-github">
                <Tooltip text="Github" placement="top">
                  <a
                    href="http://www.github.com/thetipsyhacker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
          {/* contact form */}
          {/* <div className="col-md-8 col-xl-9 order-0 order-md-1">
            <h2
              className={
                "mb-3 text-5 text-uppercase text-center text-md-start " +
                (darkTheme ? "text-white" : "")
              }
            >
              Send me a note
            </h2>
            <form
              className={darkTheme ? "form-dark" : ""}
              id="contact-form"
              onChange={handleChange}
              onSubmit={sendEmail}
            >
              <div className="row g-4">
                <div className="col-xl-6">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="col-xl-6">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    required
                    placeholder="Tell me what you need..."
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary rounded-pill d-inline-flex"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        className="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </p>
              <ToastContainer />
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
