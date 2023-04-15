import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import EnergyCalculation from './pages/EnergyCalculation'
import EnergyDemandManagement from './pages/EnergyDemandManagement'
import EnergySupply from './pages/EnergySupply'
import RenewableEnergy from './pages/RenewableEnergy'
import ReduceEnergy from './pages/ReduceEnergy'
import EnergySaving from './pages/EnergySaving'
import styled from 'styled-components'
import NotFound from './pages/NotFound'
import './App.css';
const Container = styled.div`
scroll-snap-type:y mandatory;
scroll-behavior:smooth;
overflow-y:auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  display:none;
}
`;

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/getAQuote',
      element: <div>Get A Quote</div>
    },
    {
      path: '/energyCalc',
      element: <EnergyCalculation />
    },
    {
      path: '/energyDemand',
      element: <EnergyDemandManagement />
    },
    {
      path: '/energySupply',
      element: <EnergySupply />
    },
    {
      path: '/renewable',
      element: <RenewableEnergy />
    },
    {
      path: '/reduce',
      element: <ReduceEnergy />
    },
    {
      path: '/energySaving',
      element: <EnergySaving />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ])

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
