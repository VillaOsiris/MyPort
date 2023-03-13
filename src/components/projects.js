import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import htmlLogo from "../assets/logos/logo_a.svg";
import cssLogo from "../assets/logos/logo_b.svg";
import jsLogo from "../assets/logos/logo_c.svg";

function Projects() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Wrapper isAboveMediumScreens={isAboveMediumScreens}>
      <h2 className="quote">
        "Projects are not just collections of code,
        <br />
        but rather manifestations of human creativity and dedication...""
      </h2>
      <div>
        <article>
          <h2>Portfolios |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
      </div>
      <div>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
        <article>
          <h2>Single Page Apps |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>
      <div>
        <article>
          <h2>Websites |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
      </div>
      <div>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
        <article>
          <h2>E-Commerces |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>
      <div>
        <article>
          <h2>Produtcs Landings |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
      </div>
      <div>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
        <article>
          <h2>Blog Websites |</h2>
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            assumenda dolorem quisquam debitis sapiente! Facilis repudiandae
            cupiditate sed corrupti? Laboriosam neque iusto cum error ullam,
            architecto qui sunt. Dolores, perspiciatis!
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="20px" height="20px" />
            <img src={cssLogo} alt="css logo" width="20px" height="20px" />
            <img src={jsLogo} alt="js logo" width="20px" height="20px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://www.linkedin.com/in/sergiocscosta/">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 4rem 0;

  .quote {
    margin: 4rem 0 0 0;
    color: blue;
    line-height: 1.5;
  }

  & > div {
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
        font-size: 2rem;
        font-weight: bold;
      }

      & > h2 {
        color: blue;
      }
    }

    & > div {
      width: 90%;
      display: flex;
      justify-content: center;

      & > img {
        border-radius: 10%;
        border: 3px solid black;
      }
    }
  }

  .icons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    & > a {
      height: 2rem;
      text-decoration: none;
      font-weight: 900;
      color: black;
      font-size: 1rem;
      heigh: 3rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &--link {
      height: 1.5rem;
      width: 1.5rem;
      color: black;
    }
  }

  ${({ isAboveMediumScreens }) =>
    isAboveMediumScreens &&
    `
    width: 55%;

    & > div {
      flex-direction: row;
      gap: 8rem;
    
      & > article {
        width: 60%;
    }

    & > div {
      width: 40%;
    }
  }

  `}
`;

export default Projects;
