import React, { useRef } from "react";
import Navbar from "../navbar/Navbar";
import Centertext from "../Heading/Centertext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Home = ({ menuOpen, setmenuOpen }) => {
  const home = useRef();

  useGSAP(() => {
    gsap.to(home.current, {
      y: -1000,
      duration: 1.6,
      delay: 1.8,
      // ease: "sine.in",
      ease: "power2.in",
    });
  });

  return (
    <div className="h-screen">
      <div ref={home} className="h-screen bg-zinc-900 w-full z-10 fixed"></div>
      <div className="w-full h-screen bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] text-white">
        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Centertext />
      </div>
    </div>
  );
};

export default Home;
