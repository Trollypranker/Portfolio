
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import ContactMe from './components/ContactMe'

function App() {
 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
      {
        path:"/aboutme",
        element:<AboutMe/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/skills",
        element:<Skills/>
      },
      {
        path:"/service",
        element:<Services/>
      },
      {
        path:"/contact",
        element:<ContactMe/>
      }
    ]
  }
])
  return (
    <>
    

    <RouterProvider router={appRouter}>

</RouterProvider>

   
    
  
    </>
  )
}

export default App
