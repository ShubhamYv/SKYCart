import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Shubham Yadav</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Send mail to get updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="Send" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow me</h3>
              <div className="footer-social--icons">
                <div>
                  <a
                    href="https://github.com/ShubhamYv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/shubham-yadav-04a1b0200/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/shubham.yv/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100004831158656"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact Me</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="tel: 9955883779" target="_blank" rel="noreferrer">
                    {" "}
                    <FaPhone className="icons" />{" "}
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:shubhamyadav32100@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <HiOutlineMail className="icons" />{" "}
                  </a>
                </div>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=9955883779"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <ImWhatsapp className="icons" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Shubham Yadav. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>-<p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
