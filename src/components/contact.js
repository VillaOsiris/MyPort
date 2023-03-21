import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import { GoLocation, GoMailRead } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper
      isBelowMediumScreens={isBelowMediumScreens}
      name="contact"
      id="contact"
    >
      <h2>Let's create great things together!</h2>
      <h3>contacts |</h3>
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
  width: 65%;
  margin: auto;
  padding: 15rem 0 10rem;

  h3 {
    margin: 4rem 0;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style: none;
    font-size: 1.3rem;
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
    height: 2rem;
    width: 2rem;
    color: black;
  }

  ${({ isBelowMediumScreens }) =>
    isBelowMediumScreens &&
    `
    width: 90%;
    
  ul {
    flex-direction: column;
    gap:1rem;
    margin-top: 2rem;
  }
   
  
  `}
`;

export default Contact;
