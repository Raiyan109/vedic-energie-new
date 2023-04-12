import React from 'react';
import styled from 'styled-components';
import bg from '../assets/wave-bg.png'

const Section = styled.div`
height:100vh;
background-image: url(${bg});
scroll-snap-align:center;
`
const Upcoming = () => {
    return (
        <Section>
            <div className='bg-cover bg-center bg-no-repeat'>

            </div>
        </Section>
    );
};

export default Upcoming;