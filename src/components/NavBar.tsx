"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {
            <Image
              className="relative"
              src="/assets/images/hs_logo.png"
              alt="Next.js Logo"
              width={80}
              height={50}
              priority
            />
          }
        </motion.div>
        <div className="hidden mdl:inline-flex item-center gap-7">
          <ul className="flex text[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium cursor-pointer duration-100"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#About"
              className="flex items-center gap-1 font-medium cursor-pointer duration-100"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#Experience"
              className="flex items-center gap-1 font-medium cursor-pointer duration-100"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Experience
              </motion.li>
            </Link>
            <Link
              href="#Portfolio"
              className="flex items-center gap-1 font-medium cursor-pointer duration-100"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                Portfolio
              </motion.li>
            </Link>
            <Link
              href="#Technologies"
              className="flex items-center gap-1 font-medium cursor-pointer duration-100"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                Technologies
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/images/logo.png" target="_blank">
          <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 rounded-md text-textGreen text=[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Resume
          </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
