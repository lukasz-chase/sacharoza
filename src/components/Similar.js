import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//import axios
import axios from "axios";
//import url
import { getSimilarMedia, getImageURL } from "../api";
//import link
import { Link } from "react-router-dom";
const Similar = ({ id }) => {
  //state
  const [similar, setSimilar] = useState(null);
  //use Effect
  useEffect(() => {
    axios
      .get(getSimilarMedia("movie", id))
      .then((res) => setSimilar(res))
      .catch((err) => `${console.log(err)} video`);
  }, [id]);
  return (
    <SimilarComponent>
      <Media>
        <h1>Similar Movies</h1>
        {similar ? (
          <ItemsComponent>
            {similar.data.results.map((item) => (
              <Link
                to={`/movie/${item.id}`}
                key={item.id}
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card key={item.id}>
                  <img
                    src={
                      item.poster_path
                        ? getImageURL(500, item.poster_path)
                        : "https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                    }
                    alt=""
                  />
                  <p>{item.title}</p>
                </Card>
              </Link>
            ))}
          </ItemsComponent>
        ) : (
          <iframe
            title="gihpy-embed"
            src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        )}
      </Media>
    </SimilarComponent>
  );
};

const SimilarComponent = styled(motion.div)`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;
const Media = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h1 {
    position: absolute;
    left: 50%;
    margin-left: -7rem;
  }
`;
const ItemsComponent = styled(motion.div)`
  min-height: 35vh;
  display: flex;
  padding: 3rem 1rem;
`;
const Card = styled(motion.div)`
  min-height: 20vh;
  width: 20vh;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: 0.5s ease-in;
  margin-right: 1rem;
  margin-top: 1rem;
  p {
    color: black;
  }
  img {
    height: 30vh;
    width: 20vh;
    object-fit: cover;
  }
`;

export default Similar;
