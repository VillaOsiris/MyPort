import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";

function About() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Wrapper isAboveMediumScreens={isAboveMediumScreens}>
      <main>
        <div>
          <img src="#" alt="about image" width="100%" height="200px" />
        </div>
        <article>
          <h2>About me |</h2>
          <h1>Fontend Developer</h1>
          <p>
            A passioned Frontend Development, including, HTML, CSS/Modern CSS
            (Sass, Bootstrap, Tailwind and Styledcomponents), Javascript &
            Typescript, REACT as framework and transitioning to Nextjs, and a
            bit of MERN stack for backend (Mongo, Express, REST, Nodejs). I’m
            very familiar with Git/GitHub, SCRUM and JIRA tools. I also have
            basic know how in Docker, Jest and react-testing, among other
            features and debugging tools.
          </p>
        </article>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;

  main {
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

  ${({ isAboveMediumScreens }) =>
    isAboveMediumScreens &&
    `
    width: 55%;

    main {
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

export default About;
