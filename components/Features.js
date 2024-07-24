"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

const featureData = [
  {
    title: "Organizational Tools",
    description: (
      <>
        Organize notes into folders or tag them for easier search and
        categorization.
        <br />
        Pin important notes for quick access.
        <br />
        Search across notes, tags, and folders with filters for dates, tags,
        etc.
      </>
    ),
    imageUrl: "/feature1.jpeg",
    imageWidth: 450,
    imageHeight: 300,
  },
  {
    title: "Multimedia Support",
    description: (
      <>
        Add images, files, and links to notes.
        <br />
        Record and attach audio notes.
        <br />
      </>
    ),
    imageUrl: "/feature2.jpeg",
    imageWidth: 450,
    imageHeight: 300,
  },
  {
    title: "Note Sharing and Collaboration",
    description: (
      <>
        Share notes with others and collaborate in real-time.
        <br />
        Set permissions for view or edit access.
        <br />
      </>
    ),
    imageUrl: "/feature3.jpeg",
    imageWidth: 450,
    imageHeight: 300,
  },
];

const Features = () => {
  const { ref } = useSectionInView("Features");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      id="features"
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group sm:mb-8 last:mb-0 scroll-mt-28 h-auto"
    >
       <h2 className="text-4xl font-bold text-center character-shadow mb-12 text-green-600 dark:text-green-400">
       📌 What Makes Acme Note Unique?
        </h2>
      {featureData.map((feature, index) => (
        <motion.section
          key={index}
          className="dark:bg-green-400 cursor-pointer group mb-8 bg-green-500 max-w-[42rem] rounded-lg overflow-hidden relative transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 h-auto sm:flex sm:flex-row flex-col"
        >
          <motion.div
            className="w-full sm:w-1/2 flex justify-center items-center p-4 sm:pr-0"
            whileHover={{
              scale: 1.05,
              translateX: 0,
              translateY: 0,
              rotate: 5,
            }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              width={feature.imageWidth}
              height={feature.imageHeight}
              quality={95}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center bg-green-400 dark:bg-green-600" >
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 font-semibold">
              {feature.description}
            </p>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default Features;
