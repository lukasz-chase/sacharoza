import React from "react";
//styling and motion
import styled from "styled-components";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <FooterComponent>
      <ul>
        <li>Podstawy</li>
        <li>Skontaktuj się z nami</li>
        <li>Fora pomocy tech.</li>
        <li>System Status</li>
      </ul>
      <ul>
        <li>zaangazuj sie</li>
        <li>Aplikacje innych firm</li>
        <li>Dodaj nowy film</li>
        <li>Dodaj nowy serial</li>
      </ul>
      <ul>
        <li>Prawne</li>
        <li>Regulamin</li>
        <li>Polityka Prywatnośći</li>
      </ul>
      <ul>
        <li>Spolecznosc</li>
        <li>Wytyczne</li>
        <li>Dyskusje</li>
        <li>Ranking</li>
      </ul>
    </FooterComponent>
  );
};

const FooterComponent = styled(motion.div)`
  min-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  color: black;
  font-size: 1rem;
  margin: 2rem 0rem 0rem 0rem;
  padding: 2rem;
  background-color: #dbc168;
  @media screen and (max-width: 1000px) {
    font-size: 0.6rem;
    margin: 0;
  }
  ul {
    list-style: none;
  li:first-child {
    font-weight: bold;
  }
  li {
    padding: 0.2rem 0rem;
    cursor: pointer;
  }
`;

export default Footer;
