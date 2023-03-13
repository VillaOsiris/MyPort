import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import htmlLogo from "../assets/logos/logo_a.svg";
import cssLogo from "../assets/logos/logo_b.svg";
import jsLogo from "../assets/logos/logo_c.svg";
import ecommerce from "../assets/ecommerce.png";
import spa from "../assets/spa.png";
import portfolio from "../assets/portfolio.png";
import landing from "../assets/landing.png";
import product from "../assets/product.png";

function Projects() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper isBelowMediumScreens={isBelowMediumScreens} id="projects">
      <h2 className="quote">
        "Projects are not just collections of code,
        <br />
        but rather manifestations of human creativity and dedication...""
      </h2>
      <div>
        <article>
          <h3>Portfolios |</h3>
          <h2>Project Name</h2>
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
          <img src={portfolio} alt="about image" width="100%" height="300px" />
        </div>
      </div>
      <div className="reverse">
        <div>
          <img src={spa} alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>Single Page Apps |</h3>
          <h2>Project Name</h2>
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
          <h3>Websites |</h3>
          <h2>Project Name</h2>
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
          <img src={landing} alt="about image" width="100%" height="300px" />
        </div>
      </div>
      <div className="reverse">
        <div>
          <img src={ecommerce} alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>E-Commerces |</h3>
          <h2>Project Name</h2>
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
          <h3>Produtcs Landings |</h3>
          <h2>Project Name</h2>
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
          <img src={product} alt="about image" width="100%" height="300px" />
        </div>
      </div>
      <div className="reverse">
        <div>
          <img src="#" alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>Blog Websites |</h3>
          <h2>Project Name</h2>
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
  width: 55%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  .quote {
    color: blue;
    line-height: 1.5;
    padding-top: 10rem;
    font-size: 2.2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10%;

    & > article {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .stack {
        display: flex;
        gap: 1rem;
      }
    }

    & > div {
      width: 50%;
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
    margin-top: 1rem;
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

  ${({ isBelowMediumScreens }) =>
    isBelowMediumScreens &&
    `
    width: 90%;
    gap: 6rem;
    padding-top: 8rem;


  .quote {
   display: none
  }

  & > div {
    flex-direction: column;
    gap: 2rem;

    &.reverse{
      flex-direction: column-reverse;
    }

    & > article {
      width: 90%;
    }

    & > div {
      width: 90%;
    }
  }
  `}
`;

export default Projects;
