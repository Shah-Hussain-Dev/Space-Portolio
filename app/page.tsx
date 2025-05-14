"use client"


import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";

import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/sub/About";
import { Works } from "../components/sub/";
import Experience from "../components/sub/Experience";
import Image from "next/image";
import { Tech } from "@/components/sub";


export default function Home() {

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Encryption />
        <Works />

      </div>
    </main>
  );
}
