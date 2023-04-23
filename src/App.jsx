import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import styled from 'styled-components';


const Container = styled.div`

`;

function App() {
  return (
    <Container>
      <RouterProvider router={routes} />
    </Container>
  )
}

export default App
