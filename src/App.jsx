import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import styled from 'styled-components';
import CalcProvider from './context/CalcProvider';
import ReactGA from 'react-ga'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const Container = styled.div`
`;

function App() {
  useEffect(() => {
    ReactGA.initialize('G-0DRLFVFJH1');
    ReactGA.pageview('/');
  }, [])
  return (
    <div className='overflow-x-hidden'>
      <CalcProvider>
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </CalcProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
