"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex items-center justify-between px-6 lg:px-8 pointer-events-auto">
      
      {/* Left: Logo and Brand Name */}
      <a href="#" className="flex items-center gap-3 group">
        <img 
          src="/logo.png" 
          alt="Astrivix Logo" 
          className="h-10 w-10 object-contain rounded-md"
          onError={(e) => {
            // Optional fallback if /logo.png is not found yet
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Fallback box if no image provided yet */}
        <div className="hidden h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-purple-500 to-black text-white font-bold shadow-sm">
          A
        </div>
        {/* Ensure the text is visible by adding styling for its contrast depending on the background */}
        <span className="text-xl font-bold tracking-tight text-white mix-blend-difference bg-black px-2 py-1 rounded-md bg-opacity-10 backdrop-blur-sm">
          Astrivix
        </span>
      </a>

      {/* Center: Framer Nav */}
      <ul
        className="relative flex w-fit rounded-full border-2 border-black bg-white p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} href="#home">Home</Tab>
        <Tab setPosition={setPosition} href="#work">Projects</Tab>
        <Tab setPosition={setPosition} href="#testimonials">Testimonials</Tab>
        <Tab setPosition={setPosition} href="#cta">CTC</Tab>

        <Cursor position={position} />
      </ul>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <a 
          href="/brochure.pdf" 
          download 
          className="hidden md:flex items-center gap-2 text-sm font-semibold hover:bg-black/5 transition-colors bg-white px-5 py-2.5 rounded-full border-2 border-black text-black"
        >
          <Download className="h-4 w-4" />
          Download Brochure
        </a>
        <Button className="hidden sm:flex bg-black hover:bg-black/80 text-white rounded-full px-6 py-5 font-semibold text-sm transition-all" asChild>
          <a href="#cta">Contact</a>
        </Button>
      </div>

    </div>
  );
}

const Tab = ({
    children,
    setPosition,
    href
  }: {
    children: React.ReactNode;
    setPosition: any;
    href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base font-semibold"
    >
      <a href={href} className="absolute inset-0 z-20" aria-label={`Go to ${children}`}></a>
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute top-1 z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
