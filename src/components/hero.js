import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import hero from "../assets/hero.jpeg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";

function Hero() {
  const images = require.context(
    "../assets/logos/map",
    false,
    /logo_[a-zA-Z]\.svg/
  );
  const keys = images.keys();
  const imageImports = keys.map((key) => images(key));
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper isBelowMediumScreens={isBelowMediumScreens} name="home" id="home">
      <main>
        <article>
          <h1>Front-end React Developer</h1>
          <p>
            Hi! I'm Sérgio. I make your dreams come true through my code.
            Specialized in creation and maintenance of pixel-perfect
            applications to deliver the best user experience. <br />
            Let's talk about how I can help you achieve your goals!
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/sergiocscosta/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icons--link" />
            </a>
            <a
              href="https://github.com/VillaOsiris"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="icons--link" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&amp;id=17wy2-8JjxLAvVG3lJdz1EnI83icA2W8n"
              download=""
            >
              <FaFileDownload className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src={hero} alt="portfolio owner" width="200px" height="200px" />
        </div>
      </main>
      <footer>
        <h3>Tech Stack |</h3>
        <div className="image__grid">
          {imageImports.map((image, id) => (
            <img
              key={id}
              src={image}
              alt="some tech skill"
              width="38px"
              height="38px"
            />
          ))}
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 65%;
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

      & > p {
        font-family: "Inconsolata", monospace;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.3;
        letter-spacing: 0.6px;
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
    margin-top: 8rem;
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

        & > h1 {
        font-size: 3rem;
      }

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
