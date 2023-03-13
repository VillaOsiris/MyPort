import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import hero from "../assets/hero.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Hero() {
  const images = require.context("../assets/logos", false, /\.(svg)$/);
  const keys = images.keys();
  const imageImports = keys.map((key) => images(key));
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper isBelowMediumScreens={isBelowMediumScreens} id="home">
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
            <img key={id} src={image} alt="Image" width="42px" height="42px" />
          ))}
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 55%;
  margin: auto;
  padding-top: 15%;

  main {
    display: flex;

    & > article {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & > h1 {
        font-size: 4rem;
        letter-spacing: 1px;
        font-weight: bold;
      }
    }

    & > div {
      width: 50%;
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
    gap: 2rem;
    margin-top: 1rem;

    &--link {
      height: 3rem;
      width: 3rem;
      color: black;
    }
  }

  footer {
    display: flex;
    gap: 4rem;
    margin: 8rem 0 15rem;
  }

  .image__grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2.5rem;
    column-gap: 4rem;
  }

  ${({ isBelowMediumScreens }) =>
    isBelowMediumScreens &&
    `
    width: 90%;

  main {
    flex-direction: column;

    & > article {
      width: 90%;
    }

    & > div {
      width: 90%;
    }
  }

  footer {
    flex-direction: column;

  }

  .image__grid {
    grid-template-columns: repeat(4, 1fr);
  }

  `}
`;

export default Hero;
