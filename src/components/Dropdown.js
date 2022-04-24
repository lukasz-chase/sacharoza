import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Dropdown = ({ title, list }) => {
  const [hover, setHover] = useState(false);
  return (
    <DropdownWrapper>
      <div className="header">
        <div
          className="title"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {title}
        </div>
      </div>
      {hover && (
        <div
          className="list"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {list.map((item) => (
            <Link
              to={item.link}
              style={{ padding: 0 }}
              onClick={item.onClick}
              key={item.label}
            >
              <div className="list-item">{item.label}</div>
            </Link>
          ))}
        </div>
      )}
    </DropdownWrapper>
  );
};
const DropdownWrapper = styled(motion.div)`
  padding: 0rem 3rem;
  .list {
    color: #e3ca0b;
    position: absolute;
    background-color: white;
    padding-top: 1rem;
    border-radius: 0.5rem;
    .list-item {
      display: flex;
      height: 2rem;
      min-width: 12rem;
      padding: 1.2rem;
      align-items: center;
      color: black;
      &:hover {
        background-color: rgb(152, 152, 152, 0.3);
      }
    }
  }
`;
export default Dropdown;
