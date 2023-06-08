import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
.arrow-up {
    // background-color: #111;
    height: 40px;
    width: 40px;
    display: block;
    border: 1px solid #666;
    position: relative;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
    overflow: hidden;
  }
  
  .arrow-slide {
    left: 0;
    top: -100%;
    width: 100%;
    height: 100%;
    background: #666;
    position: absolute;
    display: block;
    z-index: 0;
  }
  
  .left-arm {
    position: absolute;
    z-index: 1;
    background-color: transparent;
    top: 19px;
    left: 3px;
    width: 20px;
    display: block;
    transform: rotate(-45deg);
    &:after {
      content: "";
      background-color: #666;
      width: 20px;
      height: 1px;
      display: block;
      border-radius: 1px;
      transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
      transform-origin: right center;
      z-index: -1;
    }
  }
  
  .right-arm {
    position: absolute;
    z-index: 1;
    background-color: transparent;
    top: 19px;
    left: 17px;
    width: 20px;
    display: block;
    transform: rotate(45deg);
    border-radius: 2px;
    &:after {
      content: "";
      background-color: #666;
      width: 20px;
      height: 1px;
      display: block;
      border-radius: 1px;
      transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
      transform-origin: left center;
      z-index: -1;
    }
  }
  
  .arrow-up:hover {
    transition: all .1s;
    .left-arm:after {
      transform: rotate(-10deg);
    }
    .right-arm:after {
      transform: rotate(10deg);
    }
    .arrow-slide {
      transition: all .4s ease-in-out;
      transform: translateY(200%);
    }
  }

`

const BackToTopButton = () => {
  const [backToButton, setBackToButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToButton(true)
      }
      else {
        setBackToButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Section>
      {backToButton && (
        <button
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px'
          }}
          onClick={scrollUp}
        >
          <a className="arrow-up">
            <span className="left-arm"></span>
            <span className="right-arm"></span>
            <span className="arrow-slide"></span>
          </a>
        </button>
      )}
    </Section>
  );
};

export default BackToTopButton;