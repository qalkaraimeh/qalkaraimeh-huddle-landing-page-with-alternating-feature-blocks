import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const date = new Date();
  return (
    <StyledFooter>
      <Container style={{ paddingTop: "5em" }}>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              <span>
                <FaMapMarkerAlt />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              <span>
                <FaPhoneAlt />
              </span>
              +1-543-123-4567
            </li>
            <li>
              {" "}
              <span>
                <FaEnvelope />
              </span>{" "}
              example@huddle.com
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">What We Do</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>

          <SocialIcons />
        </Flex>
        <p style={{ textAlign: "right" }}>
          &copy; {date.getFullYear()} Huddle. All rights reserved
        </p>
        <p style={{ padding: "1em 0" }}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/qutaibah-alkaraimeh-58aba0199">
            Qutaibah Alkaraimeh
          </a>
          .
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
