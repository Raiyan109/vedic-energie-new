import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
.scroll-up {
    height: 40px;
    width: 40px;
    display: block;
    outline: 1px solid rgba(666,666,666,.08);
    position: relative;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
    svg line {
        stroke-width: 1;
        stroke: #aaa;
        fill: none;
        stroke-dasharray: 20;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
    }
    &:hover svg line {
        &.top {
            -webkit-transform: translateX(-40px);
            transform: translateX(-40px);
        }
        &.bottom {
            -webkit-transform: translateX(40px);
            transform: translateX(40px);
        }
        &.left {
            -webkit-transform: translateY(40px);
            transform: translateY(40px);
        }
        &.right {
            -webkit-transform: translateY(-40px);
            transform: translateY(-40px);
        }
    }
}

.scroll-up {
    .left-bar {
        position: absolute;
        z-index: 1;
        background-color: transparent;
        top: 19px;
        left: 5px;
        width: 18px;
        display: block;
        transform: rotate(-45deg);
        &:after {
            content: "";
            background-color: #666;
            width: 18px;
            height: 1px;
            display: block;
            border-radius: 1px;
            transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
            transform-origin: right center;
            z-index: -1;
        }
    }
    .right-bar {
        position: absolute;
        z-index: 1;
        background-color: transparent;
        top: 19px;
        left: 17px;
        width: 18px;
        display: block;
        transform: rotate(45deg);
        border-radius: 2px;
        &:after {
            content: "";
            background-color: #666;
            width: 18px;
            height: 1px;
            display: block;
            border-radius: 1px;
            transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 1.5);
            transform-origin: left center;
            z-index: -1;
        }
    }
    &:hover {
        transition: all .1s;
        .left-bar:after {
            transform: rotate(-10deg);
        }
        .right-bar:after {
            transform: rotate(10deg);
        }
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
                    <a className="scroll-up">
                        <span className="left-bar"></span>
                        <span className="right-bar"></span>
                        <svg width="40" height="40">
                            <line className="top" x1="0" y1="0" x2="120" y2="0" />
                            <line className="left" x1="0" y1="40" x2="0" y2="-80" />
                            <line className="bottom" x1="40" y1="40" x2="-80" y2="40" />
                            <line className="right" x1="40" y1="0" x2="40" y2="1200" />
                        </svg>
                    </a>
                </button>
            )}
        </Section>
    );
};

export default BackToTopButton;