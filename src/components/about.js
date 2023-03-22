import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";
import aboutImg from "../assets/about.png";

function About() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper
      isBelowMediumScreens={isBelowMediumScreens}
      name="about"
      id="about"
    >
      <div id="about">
        <img
          src={aboutImg}
          alt="developer working on his stand, backview, cartoon"
          width="100%"
          height="250px"
        />
      </div>
      <article>
        <h3>About me |</h3>
        <h2> More Than a Developer</h2>
        <p>
          I'm a poeple person. To me everything is about building strong
          relations and looking for ways to connect. Whether it's through my
          code, meetups, brainstorming sessions and team-building, or simply
          getting to know each other over a cup of coffee!
          <br /> Passioned for gaming, technology and digital arts. I'm driven
          by the curiosity to understand the different levels of software
          development and new tech.
        </p>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 65%;
  margin: auto;
  padding-top: 15rem;
  display: flex;
  gap: 10%;

  & > article {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > p {
      font-family: "Inconsolata", monospace;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.3;
      letter-spacing: 0.6px;
    }
  }

  & > div {
    width: 40%;
    display: flex;
    justify-content: center;

    & > img {
      border-radius: 10%;
      border: 3px solid black;
    }
  }

  ${({ isBelowMediumScreens }) =>
    isBelowMediumScreens &&
    `
    width: 90%;
    flex-direction: column-reverse;
    gap: 2rem;
    
    & > article {
        width: 90%;
    }
    & > div {
      width: 90%;
    }
  `}
`;

export default About;
