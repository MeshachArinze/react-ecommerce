import React from "react";
import "./dist/output.css";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./pages/Cart/Context";

// const Navbar = lazy(() => import("./components/pages/Navbar"))
// const Home = lazy(() => import("./components/pages/Home"));
// const Contact = lazy(() => import("./components/pages/Contact"));
// const Product = lazy(() => import("./components/pages/Product"));
// const About = lazy(() => import("./components/pages/About"));
// const Service = lazy(() => import("./components/pages/Service"));
// const Blog = lazy(() => import("./components/pages/Blog"));

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Map from "./pages/Map";

const App = ({ children }) => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Routes>
        {/*  <Route path='/' element={}> */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<Map />} />
        {/* <Route path='/' element={<CartContainer />} /> */}
      </Routes>
      {/* <CartContainer /> */}
      <Footer />
    </>
  );
};

export default App;
