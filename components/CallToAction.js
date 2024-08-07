import React from "react";
import Link from "next/link";

const CallToAction = () => (
  <section
    id="signup"
    className="bg-gradient-to-b from-green-100 to-green-600 dark:from-gray-800 dark:to-green-800 text-white dark:text-gray-200 py-16 w-full h-auto"
  >
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">
        Ready to Get Started? 👀
      </h2>
      <p className="text-lg mb-8 font-bold text-white dark:text-gray-100 tracking-wide character-shadow">
        Sign up now and start organizing your notes like never before!
      </p>

      <div className="flex flex-col justify-center items-center text-center">
        <Link
          href=""
          className="bg-green-200 text-green-800 hover:text-white hover:bg-green-700 dark:bg-green-400 dark:text-gray-800 dark:hover:bg-green-600 dark:hover:text-white py-4 px-8 rounded font-bold cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          Sign Up for Free
        </Link>
      </div>
      <div className="w-full flex justify-center mt-6">
        <p className="text-lg mb-8 w-full sm:w-[50%] font-semibold dark:text-gray-300 character-shadow">
          Join thousands of satisfied users who have transformed their
          note-taking experience. Don't miss out on the opportunity to elevate
          your productivity and keep your ideas organized.
        </p>
      </div>
    </div>
  </section>
);

export default CallToAction;
