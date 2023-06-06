import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import styled from 'styled-components';
import CalcProvider from './context/CalcProvider';


const Container = styled.div`
`;

function App() {
  return (
    <CalcProvider>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </CalcProvider>
  )
}

export default App
