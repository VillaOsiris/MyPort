import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import hero from "../assets/hero.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Hero() {
  const images = require.context("../assets/logos", false, /\.(svg)$/);
  const keys = images.keys();
  const imageImports = keys.map((key) => images(key));
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Wrapper isAboveMediumScreens={isAboveMediumScreens}>
      <main>
        <article>
          <h1>Front-end React Developer</h1>
          <p>
            Hi! I'm Sérgio. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laboriosam eius reprehenderit consectetur iste odio laudantium
            excepturi temporibus asperiores, fuga a.{" "}
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              <BsLinkedin className="icons--link" />
            </a>
            <a href="https://github.com/VillaOsiris" target="_blank">
              <BsGithub className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img
            src={hero}
            alt="portfolio owner hero image"
            width="200px"
            height="200px"
          />
        </div>
      </main>
      <footer>
        <h3>Tech Stack |</h3>
        <div className="image__grid">
          {imageImports.map((image, id) => (
            <img key={id} src={image} alt="Image" width="32px" height="32px" />
          ))}
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 15% 5px 5%;
  gap: 4rem;

  main {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 2rem;

    & > article {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & > h1 {
        font-size: 3rem;
        font-weight: bold;
      }
    }

    & > div {
      width: 90%;
      display: flex;
      justify-content: center;

      & > img {
        border-radius: 50%;
        border: 3px solid black;
      }
    }
  }

  .icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    &--link {
      height: 2.2rem;
      width: 2.2rem;
      color: black;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    padding: 5%;
    gap: 2rem;
    font-size: 1.2rem;
    color: blue;
  }

  .image__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    column-gap: 3rem;
  }

  ${({ isAboveMediumScreens }) =>
    isAboveMediumScreens &&
    `
    width: 55%;

    main {
      flex-direction: row;
      gap: 0;
    
      & > article {
        width: 50%;
    }

    & > div {
      width: 50%;
    }
  }

  footer {
    flex-direction: row;

  }

  .image__grid {
    grid-template-columns: repeat(7, 1fr);
  }

  `}
`;

export default Hero;
