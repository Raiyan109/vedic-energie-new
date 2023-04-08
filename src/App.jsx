import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'

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
      path: '*',
      element: <div>Not Found </div>
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
