import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componants/Home/Home";
import Footer from "./componants/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./componants/Navbar/Header";
import Login from "./componants/Login/Login";
import ForgotPassword from "./componants/Login/ForgotPassword/ForgotPassword";
import Hero from "./componants/Hero/Hero";
import ContactRoute from "./componants/Contact/ContactRoute";
import ProductRoute from "./componants/Products/ProductRoute";
import CatagoryRoute from "./componants/Catagory/CatagoryRoute";
import View from "./componants/View/View";
import Book from "./componants/View/Book";


function App() {
  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductRoute />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/login/:name" element={<Login />} />
        <Route path="/forgotpassword/:name" element={<ForgotPassword />} />

        <Route path="/catagory/:name" element={<CatagoryRoute />} />
        <Route path="/view/:id" element={ <View/>} />
        <Route path="/book/:id" element={ <Book/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
