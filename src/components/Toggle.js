import React, { useState } from "react";
//styles and motion
import styled from "styled-components";
import { motion } from "framer-motion";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ children, state }) => {
  const [toggle, setToggle] = useState(state);
  return (
    <ToggleContainer onClick={() => setToggle(!toggle)}>
      {toggle ? (
        <FontAwesomeIcon icon={faAngleDown} />
      ) : (
        <FontAwesomeIcon icon={faAngleUp} />
      )}
      {!toggle ? children : ""}
    </ToggleContainer>
  );
};
const ToggleContainer = styled(motion.div)`
  text-align: center;
  font-size: 4rem;
  &:hover {
    cursor: pointer;
  }
`;
export default Toggle;
