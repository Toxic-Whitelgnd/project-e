import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook,faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
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
                    <i className="fa fa-location-dot"><FontAwesomeIcon icon={faLocationDot} /></i> 91, Ram Nagar, Ram
                    Mandir, Delhi
                  </li>

                  <li className="my-4">
                    <i className="fa fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
                    <a href="tel:08510004495">
                      <b>0255000XXXX</b>
                    </a>
                    ,
                    <a href="tel:08510005495">
                      <b>0251600XXXX</b>
                    </a>
                  </li>

                  <li className="my-4">
                    <i className="fa-solid fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> demounknown@gmail.com</b>
                    </a>
                  </li>
                </ul>

                <span>
                  <a href="#" className="fb">
                    <i className="fa-brands fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i>
                  </a>
                  <a href="#" className="insta">
                    <i className="fa-brands fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fa-brands fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
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
              </form>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Contact;
