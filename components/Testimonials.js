"use client";

import { useSectionInView } from "@/lib/hooks";

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials");

  const testimonialsData = [
    {
      text: "Acme Note has revolutionized the way I take notes! 😍",
      author: "Suhas Acharya",
    },
    {
      text: "A must-have tool for anyone who loves to stay organized.👌",
      author: "Yashas Shetty",
    },
    {
      text: "Simple, intuitive, and highly effective.💚",
      author: "Varshal Bangera",
    },
  ];

  return (
    <section id="testimonials" className="bg-green-100 dark:bg-green-600 py-16 w-full">
      <div className="container mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-600 dark:text-green-300">
          What Our Users Say! 🎤
        </h2>
        <div className="flex overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 hide-scrollbar">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="px-4 sm:px-6 mb-8 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer w-[20rem] sm:w-[30rem]  "
              >
                <div className="dark:bg-gray-800 p-4 sm:p-6 bg-white shadow-md rounded transition-transform duration-300 ease-in-out hover:scale-105 h-[10rem] sm:h-[10rem]">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base dark:text-white ">{testimonial.text}</p>
                  <p className="font-semibold text-sm sm:text-base dark:text-white ">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
