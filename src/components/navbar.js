import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import useMediaQuery from "../hooks/mediaHook";

function Navbar() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <div>Portfolio</div>
      <div className="nav">
        {isAboveMediumScreens ? (
          <ul className="nav--list">
            <a className="nav--link" href="#home">
              Home
            </a>
            <a className="nav--link" href="#about">
              About
            </a>
            <a className="nav--link" href="#projects">
              Projects
            </a>
            <a className="nav--link" href="contact">
              Contact
            </a>
          </ul>
        ) : (
          <FaBars
            className="nav--icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </div>
      {!isAboveMediumScreens && isMenuOpen && (
        <div className="nav__modal">
          <div className="nav__modal--icon--wrapper">
            <IoClose
              className="nav__modal--icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <ul className="nav__modal--list">
            <a className="nav__modal--link" href="#home">
              Home
            </a>
            <a className="nav__modal--link" href="#about">
              About
            </a>
            <a className="nav__modal--link" href="#projects">
              Projects
            </a>
            <a className="nav__modal--link" href="contact">
              Contact
            </a>
          </ul>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  font-weight: bold;
  font-size: 1.3rem;

  .nav {
    &--list {
      display: flex;
      gap: 2rem;
    }
    &--link {
      color: black;
      text-decoration: none;
      transition: 0.35s;
      &:hover {
        color: blue;
      }
    }
    &--icon {
      height: 2rem;
      width: 2rem;
    }
  }

  .nav__modal {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 40;
    height: 100%;
    width: 70%;
    background: lightgray;

    &--icon--wrapper {
      height: 50px;
      padding: 0 10%;
      display: flex;
      justify-content: end;
      align-items: center;
    }

    &--icon {
      height: 3rem;
      width: 3rem;
    }

    &--list {
      width: max-content;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin-top: 20%;
      gap: 5rem;
      text-align: center;
    }
    &--link {
      font-size: 1.5rem;
      color: black;
      text-decoration: none;
      transition: 0.35s;
      &:hover {
        color: blue;
      }
    }
  }
`;

export default Navbar;
