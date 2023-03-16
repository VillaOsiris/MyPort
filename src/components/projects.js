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
import soonImg from "../assets/soonImg.jpg";

function Projects() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper isBelowMediumScreens={isBelowMediumScreens}>
      <h2 id="projects" className="quote">
        "Projects are not just collections of code,
        <br />
        but rather manifestations of human creativity and dedication...""
      </h2>

      <div>
        <article>
          <h3>E-Commerces |</h3>
          <h2>Bgamer</h2>
          <p>
            E-commerce that involves an online store that specializes in selling
            video games. User-friendly interface that allows customers to browse
            and purchase games, sign-in and manage their cart history.
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris/Bgamer" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://villaosiris.github.io/Bgamer/" target="_blank">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
        <div>
          <img src={ecommerce} alt="about image" width="100%" height="300px" />
        </div>
      </div>

      <div className="reverse">
        <div>
          <img src={spa} alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>Websites |</h3>
          <h2>MooV</h2>
          <p>
            Responsive movie streaming platform project involves building a
            website that allows users to watch movies online.Fully responsive
            with Rest API integration and enhanced user experience.
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris/Moov" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="https://villaosiris.github.io/Moov/" target="_blank">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>

      <div>
        <article>
          <h3>Websites |</h3>
          <h2>HealthPoint</h2>
          <p>
            Local gym landing page project involves design and development to
            showcase its facilities, classes, trainers, and membership plans to
            attract potential customers and increase gym membership.
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a
              href="https://github.com/VillaOsiris/HealthPoint"
              target="_blank"
            >
              CODE <BsGithub className="icons--link" />
            </a>
            <a
              href="https://villaosiris.github.io/HealthPoint/"
              target="_blank"
            >
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
          <img src={product} alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>Single Page Apps |</h3>
          <h2>BabyBox</h2>
          <p>
            Project involves offering a subscription-based service for pregnant
            women, providing monthly gift boxes containing spa-related items to
            help them de-stress and feel pampered during their pregnancy.
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris/Babybox" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="#">
              Live Demo <MdOpenInNew className="icons--link" />
            </a>
          </div>
        </article>
      </div>

      <div>
        <article>
          <h3>Portfolios |</h3>
          <h2>MyPortfolio</h2>
          <p>
            Portfolio showcase individual's professional work. Simplistic
            interface with information such as the individual's projects, and
            contacts to potential employers or clients.
          </p>
          <div className="stack">
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris/Ports" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="#">
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
          <img src={soonImg} alt="about image" width="100%" height="300px" />
        </div>
        <article>
          <h3>Category |</h3>
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
            <img src={htmlLogo} alt="html logo" width="30px" height="30px" />
            <img src={cssLogo} alt="css logo" width="30px" height="30px" />
            <img src={jsLogo} alt="js logo" width="30px" height="30px" />
          </div>
          <div className="icons">
            <a href="https://github.com/VillaOsiris" target="_blank">
              CODE <BsGithub className="icons--link" />
            </a>
            <a href="#">
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

      & > p {
        line-height: 2rem;
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
