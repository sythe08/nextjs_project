import Navbar from "./NavBar"
import Footer from "./Footer"


export default function Layout({children}){
  
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
    )
}