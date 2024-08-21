import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

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
])
export default routes