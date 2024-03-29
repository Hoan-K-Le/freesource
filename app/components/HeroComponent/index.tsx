"use client";
import React, { useEffect } from "react";
import { githubLogo } from "@/app/components/svg";
import Link from "next/link";

export const HeroComponent = () => {
  return (
    <div className="py-12 flex justify-center">
      <div className="flex justify-center w-2/3 items-center gap-2">
        <div className="flex flex-col w-2/3 items-center">
          <h1 className="text-6xl p-4 font-bold bg-gradient-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent tracking-wide">
            Learn,Grow,Excel!
          </h1>
          <p className="text-center text-xl  text-gray-200 tracking-wide leading-7">
            Effortlessly start your journey into front-end web development with
            all the essential tools and guidance in one place. No more endless
            searching for information - everything you need is right here!
          </p>
          <div className="mt-4 flex flex-col justify-center items-center gap-6">
            <p className="font-semibold text-gray-300 text-sm">
              Open source project, more than welcome to contribute!
            </p>
            <button>
              <Link
                href="https://github.com/Hoan-K-Le/freesource"
                target="_blank"
              >
                {githubLogo()}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
