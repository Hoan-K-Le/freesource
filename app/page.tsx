"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { HeroComponent } from "./components/HeroComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroComponent />
    </>
  );
}
