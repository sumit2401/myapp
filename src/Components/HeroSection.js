import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = ({ name, image, customStyles }) => {
  const imageStyle =
    customStyles && customStyles.imageStyle ? customStyles.imageStyle : {};

  //thats means if customstyles and customstyles.imagestyles exist then imagestyle will set to customstyles.imagestyles else the style is empty(means the globle style will be set here)

  const firstName = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-data-hero">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {firstName}, I am a graduated Btech student who have the full
            knowlege of full stacl developer, a video editor and animator.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">HIRE ME</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img
              src={image}
              alt="heroimage"
              style={imageStyle}
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-data-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  picture {
    text-align: center;
  }

  .hero-imag {
    max-width: 80%;
  }
`;

export default HeroSection;
