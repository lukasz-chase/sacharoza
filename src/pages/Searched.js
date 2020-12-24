import React, { useState, useEffect } from "react";
//import comnponents
import Card from "../components/Card";
//import styles and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Searched = ({ searched }) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    {
      searched && setResult(searched.data.results);
    }
  });

  return (
    <div>
      {result && (
        <ResultList>
          {result.map((item) => (
            <Card
              key={item.id}
              movieTitle={item.title}
              tvTitle={item.name}
              movieImage={item.poster_path}

              // personImage={getPersonsImage(item.id)}
            />
          ))}
        </ResultList>
      )}
    </div>
  );
};

const ResultList = styled(motion.div)`
  min-height: 80vh;
  padding: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Searched;
