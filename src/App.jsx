import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Customization from "./pages/Customization"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Aos from "aos"
import Loading from "./components/Loading"
import Vision from "./SubPages/Vision"
import Mission from "./SubPages/Mission"
import CoreValues from "./SubPages/CoreValues"
import Msg from "./SubPages/Msg"
import KitchenCabinet from "./ProductsItem/KitchenCabinet"
import Wardrobe from "./ProductsItem/Wardrobe"
import BookcaseCabinet from "./ProductsItem/BookcaseCabinet"
import PartitionWall from "./ProductsItem/PartitionWall"
import MosquitoNet from "./ProductsItem/MosquitoNet"
import BathroomCabinet from "./ProductsItem/BathroomCabinet"
import StairRailingGlass from "./ProductsItem/StairRailingGlass"
import RooftopGlass from "./ProductsItem/RooftopGlass"
import BuildingRailing from "./ProductsItem/BuildingRailing"
import MobileHouse from "./ProductsItem/MobileHouse"
import Service from "./SubPages/Service"
import WhyUs from "./SubPages/WhyUs"
import Registration from "./SubPages/Registration"
import RoomCustomizationPage from "./pages/RoomCustomizationPage"
import "./i18n";

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 10,
    })
  }, [])

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);

      return () => clearTimeout(timer);
    }, 2000)
  }, [location.pathname]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <main>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/*" element={<About />}>
          <Route index element={<Navigate to="vision" replace />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
          <Route path="core-values" element={<CoreValues />} />
          <Route path="msg" element={<Msg />} />
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/kitchen-cabinet" element={<KitchenCabinet />}></Route>
        <Route path="/products/wardrobe" element={<Wardrobe />}></Route>
        <Route path="/products/bookcase-cabinet" element={<BookcaseCabinet />}></Route>
        <Route path="/products/partition-wall" element={<PartitionWall />}></Route>
        <Route path="/products/mosquito-net" element={<MosquitoNet />}></Route>
        <Route path="/products/bathroom-cabinet" element={<BathroomCabinet />}></Route>
        <Route path="/products/stair-railing-glass" element={<StairRailingGlass />}></Route>
        <Route path="/products/rooftop-glass" element={<RooftopGlass />}></Route>
        <Route path="/products/building-railing" element={<BuildingRailing />}></Route>
        <Route path="/products/mobile-house" element={<MobileHouse />}></Route>

        {/* <Route path="/services" element={<Services />}>Services</Route> */}
        <Route path="/services/*" element={<Services />}>
          <Route index element={<Navigate to="service" replace />} />
          <Route path="service" element={<Service />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/customization" element={<Customization />} />
        <Route path="/customization/:roomType/:roomId" element={<RoomCustomizationPage />} />
        <Route path="/contact" element={<Contact />}>Contact Us</Route>
      </Routes>

      <Footer />
    </main>
  )
}

export default App
