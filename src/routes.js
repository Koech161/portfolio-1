import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
const Home = lazy(() => import('./components/Home'))
const Resume = lazy(() => import('./components/Resume'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(()=> import('./components/Contact'))
const routes = createBrowserRouter([
    {
        path: '/',
        element:(<Suspense fallback={<div>Loading...</div>}>
             <Home />
             </Suspense> 
        ),
    },
    
    {
        path: '/resume',
        element:  (<Suspense fallback={<div>Loading...</div>}>
            <Resume />
            </Suspense> 
       ),
    },
    {
        path: '/projects',
        element: (<Suspense fallback={<div>Loading...</div>}>
            <Projects />
            </Suspense> 
       ),
    },
    {
        path: '/contact',
        element: (<Suspense fallback={<div>Loading...</div>}>
            <Contact />
            </Suspense> 
       ),
    },
])
export default routes