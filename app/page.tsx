"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-5xl p-4 text-center font-bold bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
          Learn, Build, Succeed
        </h1>
      </div>
    </>
  );
}
