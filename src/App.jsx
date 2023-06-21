import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import styled from 'styled-components';
import CalcProvider from './context/CalcProvider';
import ReactGA from 'react-ga'
import { useEffect } from 'react';

const Container = styled.div`
`;

function App() {
  useEffect(() => {
    ReactGA.initialize('G-EERQNM32EJ');
    ReactGA.pageview('/');
  }, [])
  return (
    <CalcProvider>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </CalcProvider>
  )
}

export default App
