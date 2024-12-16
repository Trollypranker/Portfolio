import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
   <>
   <header>
    <Navbar/>
   </header>
   <div>
    <Outlet/>
   </div>
   <footer>
    <Footer/>
   </footer>
   
   </>
  )
}

export default MainLayout