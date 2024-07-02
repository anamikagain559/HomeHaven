import { useEffect } from "react";
import "./App.css";
import Details_page from "./components/Details_page";
import Footer from "./components/Footer";
import Latest_package from "./components/Latest_package";
import Navbar from "./components/Navbar";
import Neighborhood_properties from "./components/Neighborhood_properties";
import NewNavbar from "./components/NewNavbar";
import Our_service from "./components/Our_service";
import Real_estate from "./components/Real_estate";
import RegisterPage from "./components/RegisterPage";
import SignInPage from "./components/SignInPage";
import Who_we_are from "./components/Who_we_are";

function App() {

  useEffect(()=>{
    document.title="Home Page"
  })
  return (
    <div className="">
 <Navbar></Navbar>
      <main className="md:mt-3">
        <Real_estate></Real_estate>
        <Who_we_are></Who_we_are>
        <Latest_package></Latest_package>
        <Our_service></Our_service>
        <Neighborhood_properties></Neighborhood_properties>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
