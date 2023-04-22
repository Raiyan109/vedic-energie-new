import { createBrowserRouter } from "react-router-dom";
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Services from '../pages/Services'
import EnergyCalculation from '../pages/EnergyCalculation'
import EnergyDemandManagement from '../pages/EnergyDemandManagement'
import EnergySupply from '../pages/EnergySupply'
import RenewableEnergy from '../pages/RenewableEnergy'
import ReduceEnergy from '../pages/ReduceEnergy'
import EnergySaving from '../pages/EnergySaving'

import NotFound from '../pages/NotFound'

import Efficient from '../components/Efficient';
import EnergyResidency from '../components/EnergyResidency';
import Articles from '../components/Articles';
import Header from '../components/Header'


const routes = createBrowserRouter([
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

export default routes;