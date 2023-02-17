import React, { useRef } from "react";
import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("send emailjs");
    emailjs
      .sendForm(
        "service_6d04z3a",
        "template_bwsqtec",
        form.current,
        "pyhdTp8Vi2Mjmp1so"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅✅✅your form has been submitted 👍👍👍");
          setSuccess(true);
          setEmail("");
          setMessage("");
          setName("");
          setSub("");
          setPhone("");

        },
        (error) => {
          console.log(error.text);
          alert("❌❌❌your form has been failed submit again");
          setSuccess(false);
          setEmail("");
          setMessage("");
          setSub("");
          setPhone("");
          setName("");
        }
      );
  };

  const form = useRef();

  return (
    <>
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>

                <ul className="contact-ul ">
                  <li className="my-4">
                    <i className="fa fa-location-dot">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </i>{" "}
                    91, Ram Nagar, Ram Mandir, Delhi
                  </li>

                  <li className="my-4">
                    <i className="fa fa-phone">
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                    <a href="tel:08510004495">
                      <b>0255000XXXX</b>
                    </a>
                    ,
                    <a href="tel:08510005495">
                      <b>0251600XXXX</b>
                    </a>
                  </li>

                  <li className="my-4">
                    <i className="fa-solid fa-envelope">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> demounknown@gmail.com</b>
                    </a>
                  </li>
                </ul>

                <span>
                  <a href="#" className="fb">
                    <i className="fa-brands fa-facebook">
                      <FontAwesomeIcon icon={faFacebook} />
                    </i>
                  </a>
                  <a href="#" className="insta">
                    <i className="fa-brands fa-instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </i>
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <form
                action="#"
                ref={form}
                onSubmit={sendEmail}
                className="contFrm"
                method="POST"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      required
                      aria-label="First name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      required
                      value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      value={sub}
                    onChange={(e) => {
                      setSub(e.target.value);
                    }}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      name="message"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      className="inptBtn"
                    />
                  </div>
                </div>
                <div
                className={`SucessBox primary-green ${
                  success ? "" : "displayNONE"
                }`}
              >
                <p>You have sucessfully submitted the form,Thank you </p>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
