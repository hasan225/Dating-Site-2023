import React,{useState} from "react";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  console.log(scrollHeight)
  window.addEventListener("scroll", () => {
    setScrollHeight(window.pageYOffset);
  });
  return (
    <>
    <Navbar/>
      <main className="Main lg:pt-28">{children}</main>
      {
        scrollHeight > 400 && <BackToTop/>
      }
      <Footer/>
    </>
  );
};

export default Layout;
