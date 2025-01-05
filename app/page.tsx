import Header from "./components/header"
import Clientdata from "./components/clientdata"
import Serverside from "./components/serverside"
import Footer from "./components/footer"
import Link from "next/link"


const Homepage = () => {
  return (
    <div>
     <Header/>
     <Clientdata/>
     <Serverside/>
     <Footer/>
     
    </div>
  )
}

export default Homepage
