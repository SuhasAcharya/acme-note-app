"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

const Hero = () => {
  const { ref } = useSectionInView("Acme", 0.5);

  return (
    <section
      ref={ref}
      id="acme"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="container mx-auto flex flex-col items-center py-16 px-6">
        <div className="flex w-full h-full justify-center">
          <motion.h1
            className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-900"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to{" "}
            <span className="text-green-800 text-6xl character-shadow dark:text-green-300">
              Acme
            </span>{" "}
            <span className="text-6xl text-green-700 character-shadow dark:text-green-400">
              Note
            </span>
          </motion.h1>

          <motion.span
            className="w-8 h-8 text-[50px] relative bottom--10 right-10 sm:relative sm:left-4 sm:bottom-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <motion.p
          className="text-lg text-center mb-8 text-gray-600 dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Ultimate Note-Taking App for Organizing Your Thoughts and Ideas
          <br />
          In today's fast-paced world, staying organized and managing
          information effectively is crucial.
          <br />
          Our note-taking app is designed to be the ultimate solution for
          organizing your thoughts and ideas, offering a range of features that
          cater to all your needs, whether you're a student, professional, or
          creative thinker.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col justify-center items-center text-center ">
            <Link
              href=""
              className="bg-green-500  text-white py-4 px-10 rounded font-bold shadow-md text-[18px] tracking-normal transform hover:scale-110 transition-transform duration-300"
            >
              Get Started for Free
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
