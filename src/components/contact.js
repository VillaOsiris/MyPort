import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import { GoLocation, GoMailRead } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Wrapper isAboveMediumScreens={isAboveMediumScreens}>
      <h1>Let's create great things together!</h1>
      <h2>contacts |</h2>

      <ul>
        <li>
          <GoLocation className="icons" /> <span>Barcelona,Spain.</span>
        </li>
        <li>
          <BsWhatsapp className="icons" /> <span>(+34) 612 225 757</span>
        </li>
        <li>
          <a href="mailto:sergio20128@hotmail.com">
            <GoMailRead className="icons" /> <p>sergio20128@hotmail.com</p>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  height: 30vh;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 6rem;
    margin-bottom: 4rem;
  }

  h2 {
    color: blue;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  li {
    list-style: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    & > a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .icons {
    height: 2.2rem;
    width: 2.2rem;
    color: black;
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

export default Contact;
