import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

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
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/contact',
        element: <Contact />
    },
])
export default routes