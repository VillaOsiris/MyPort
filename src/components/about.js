import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";

function About() {
  const isBelowMediumScreens = useMediaQuery("(max-width: 1060px)");

  return (
    <Wrapper isBelowMediumScreens={isBelowMediumScreens} id="about">
      <div>
        <img src="#" alt="about image" width="100%" height="250px" />
      </div>
      <article>
        <h3>About me |</h3>
        <h2>Fontend Developer</h2>
        <p>
          A passioned Frontend Development, including, HTML, CSS/Modern CSS
          (Sass, Bootstrap, Tailwind and Styledcomponents), Javascript &
          Typescript, REACT as framework and transitioning to Nextjs, and a bit
          of MERN stack for backend (Mongo, Express, REST, Nodejs). I’m very
          familiar with Git/GitHub, SCRUM and JIRA tools. I also have basic know
          how in Docker, Jest and react-testing, among other features and
          debugging tools.
        </p>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 55%;
  margin: auto;
  display: flex;
  gap: 10%;

  & > article {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
