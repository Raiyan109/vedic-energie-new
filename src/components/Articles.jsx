import React from 'react';
import styled from 'styled-components';


const Section = styled.div`
height:100vh;
background-color:#FEFFCD;
scroll-snap-align:center;
`
const Articles = () => {
    return (
        <Section>
            recent articles
        </Section>
    );
};

export default Articles;