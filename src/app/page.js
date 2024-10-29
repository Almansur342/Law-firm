"use client"
import Image from "next/image";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Service/Services";
import Team from "./Components/Team";
import Vision from "./Components/Vision";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const section = document.querySelector(hash);
      if(section){
        section.scrollIntoView({behavior:"smooth"});
      }
    }
  },[]);

  return (
    <main>
      <Banner />
      <section id="about" className="mt-72 mb-10 bg-[#030712]">
        <About/>
      </section>
      <section id="services" className="my-24">
        <Services/>
      </section>
      <section className="my-48">
        <Team/>
      </section>
      <section className="mt-80 mb-20">
        <Vision/>
      </section>
      <section className="my-24">
        <Blogs/>
      </section>
      <section id="contact" className="my-24">
        <Contact/>
      </section>
    </main>
  );
}
