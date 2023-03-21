import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import { BsGithub } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import faneca from "../assets/faneca.png";
import ecommerce from "../assets/ecommerce.png";
import spa from "../assets/spa.png";
import portfolio from "../assets/portfolio.png";
import landing from "../assets/landing.png";
import product from "../assets/product.png";
import soonImg from "../assets/soonImg.jpg";
import * as logos from "../assets/logos";

function Projects() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper
      isBelowMediumScreens={isBelowMediumScreens}
      name="projects"
      id="projects"
    >
      <h2 className="quote">
        "Projects are not just collections of code,
        <br />
        but rather manifestations of human creativity and dedication...""
      </h2>

      {/* PROJECT 1 */}

      <div>
        <article>
          <h3>Playground |</h3>
          <h2>Faneca</h2>
          <p>
            This is my playground! Where I tell my story and my share my dreams.
            It's not perfect and it's not meant to be! Built to showcase and
            test features. So I hope your up for a Story...
          </p>
          <div className="stack">
            <div className="stack">
              <img
                src={logos.htmlLogo}
                alt="html logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.cssLogo}
                alt="css logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.jsLogo}
                alt="js logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.reactLogo}
                alt="react logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.sassLogo}
                alt="react logo"
                width="30px"
                height="30px"
              />
            </div>
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img
            src={faneca}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
      </div>

      {/* PROJECT 2 */}

      <div className="reverse">
        <div>
          <img
            src={ecommerce}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
        <article>
          <h3>E-Commerce |</h3>
          <h2>Bgamer</h2>
          <p>
            E-commerce store that specializes in selling video games.
            User-friendly interface that allows customers to browse and purchase
            games. Inludes login-in, data sort/filtering and cart history
            managment features.
          </p>
          <div className="stack">
            <img
              src={logos.htmlLogo}
              alt="html logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.cssLogo}
              alt="css logo"
              width="30px"
              height="30px"
            />
            <img src={logos.jsLogo} alt="js logo" width="30px" height="30px" />
            <img
              src={logos.reactLogo}
              alt="react logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.styledLogo}
              alt="styled-components logo"
              width="30px"
              height="30px"
            />
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/Moov"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/Moov/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>

      {/* PROJECT 3 */}

      <div>
        <article>
          <h3>Website |</h3>
          <h2>MooV</h2>
          <p>
            Responsive streaming platform project that allows users to watch
            movies online. Includes Rest API integration and enhanced user
            experience.
          </p>
          <div className="stack">
            <img
              src={logos.htmlLogo}
              alt="html logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.cssLogo}
              alt="css logo"
              width="30px"
              height="30px"
            />
            <img src={logos.jsLogo} alt="js logo" width="30px" height="30px" />
            <img
              src={logos.reactLogo}
              alt="react logo"
              width="30px"
              height="30px"
            />
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/Moov"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/Moov/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img
            src={spa}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
      </div>

      {/* PROJECT 4 */}

      <div className="reverse">
        <div>
          <img
            src={landing}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
        <article>
          <h3>Website |</h3>
          <h2>HealthPoint</h2>
          <p>
            Local gym landing page project involves design and development to
            showcase its facilities, classes, trainers, and membership plans to
            attract potential customers and increase gym membership.
          </p>
          <div className="stack">
            <div className="stack">
              <img
                src={logos.htmlLogo}
                alt="html logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.cssLogo}
                alt="css logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.jsLogo}
                alt="js logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.reactLogo}
                alt="react logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.sassLogo}
                alt="Sass css logo"
                width="30px"
                height="30px"
              />
            </div>
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/HealthPoint"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/HealthPoint/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>

      {/* PROJECT 5 */}
      <div>
        <article>
          <h3>Portfolio |</h3>
          <h2>MyPort</h2>
          <p>
            Portfolio showcase individual's professional work. Simplistic
            interface with information such as the individual's projects, and
            contacts to potential employers or clients.
          </p>
          <div className="stack">
            <img
              src={logos.htmlLogo}
              alt="html logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.cssLogo}
              alt="css logo"
              width="30px"
              height="30px"
            />
            <img src={logos.jsLogo} alt="js logo" width="30px" height="30px" />
            <img
              src={logos.reactLogo}
              alt="reactjs logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.styledLogo}
              alt="styled-components logo"
              width="30px"
              height="30px"
            />
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/Ports"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/Ports"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img
            src={portfolio}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
      </div>

      {/* PROJECT 6 */}

      <div className="reverse">
        <div>
          <img
            src={product}
            alt="screenshot of this website"
            width="100%"
            height="300px"
          />
        </div>
        <article>
          <h3>Single Page App |</h3>
          <h2>BabyBox</h2>
          <p>
            Project involves offering a subscription-based service for pregnant
            women, providing monthly gift boxes containing spa-related items to
            help them de-stress and feel pampered during their pregnancy.
          </p>
          <div className="stack">
            <div className="stack">
              <img
                src={logos.htmlLogo}
                alt="html logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.cssLogo}
                alt="css logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.tsLogo}
                alt="js logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.nextLogo}
                alt="nextjs logo"
                width="30px"
                height="30px"
              />
              <img
                src={logos.tailwindLogo}
                alt="tailwind css logo"
                width="30px"
                height="30px"
              />
            </div>
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/Babybox"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/babybox"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>

      {/* PROJECT 7 */}

      <div>
        <article>
          <h3>E-Commerce |</h3>
          <h2>Comming Soon</h2>
          <p>
            "Well, what if there is no description? <br /> &nbsp;There wasn't
            one today."
            <br />
            <span style={{ color: "lightgray" }}>
              &nbsp;Phil Connors, Groundhog Day (1993)
            </span>
          </p>
          <div className="stack">
            <img
              src={logos.htmlLogo}
              alt="html logo"
              width="30px"
              height="30px"
            />
            <img
              src={logos.cssLogo}
              alt="css logo"
              width="30px"
              height="30px"
            />
            <img src={logos.jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris"
              target="_blank"
              rel="noreferrer"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src={soonImg} alt="comming soon" width="100%" height="300px" />
        </div>
      </div>

      {/* PROJECT 8 */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15rem;

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

      & > p {
        font-family: "Inconsolata", monospace;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.3;
        letter-spacing: 0.6px;
      }

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

        box-shadow: 0 0 5px 5px lightgray;
      }
    }
  }

  .icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    & > a {
      height: 3rem;
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
      height: 2rem;
      width: 2rem;
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
