import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/home/Home";
import Project from "../../pages/Project";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Error from "../../pages/error/Error";



const Routing = () => {
  return <>
      <BrowserRouter>
      {/* <AuthProvider> */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
        {/* </AuthProvider> */}
      </BrowserRouter>
  </>;
};

export default Routing;
