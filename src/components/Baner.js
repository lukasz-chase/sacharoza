import React from "react";
//styles and motion
import styled from "styled-components";
import { motion } from "framer-motion";

const Baner = () => {
  return (
    <BanerComponent>
      <BanerStyled>
        <h1>
          Welcome to <span>sacharoza</span>.
        </h1>
        <h2>
          Milions of movies and Tv shows to discover. <p>Explore now</p>
        </h2>
      </BanerStyled>
    </BanerComponent>
  );
};

const BanerComponent = styled(motion.div)`
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: upperCase;
  padding: 2rem 0rem;
  margin-bottom: 2vh;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(89, 89, 179, 1) 36%,
    rgba(156, 153, 191, 1) 100%
  );
`;
const BanerStyled = styled(motion.div)`
  height: 100%;
  width: 50%;
  text-align: left;
  color: white;
  font-size: 2rem;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
    width: 100%;
  }
  span {
    color: #fd980d;
  }
  p {
    color: #e3c607;
  }
  h1,
  h2 {
    padding: 1rem 0rem;
    @media screen and (max-width: 1000px) {
      padding: 0.5rem 0;
    }
  }
`;
export default Baner;
