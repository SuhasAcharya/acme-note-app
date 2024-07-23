import React from "react";
import Link from "next/link";

const CallToAction = () => (
  <section
    id="signup"
    className="bg-gradient-to-b from-green-100 to-green-600 text-white py-16 w-full h-auto"
  >
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-700 sm:text-4xl">
        Ready to Get Started? 👀
      </h2>
      <p className="text-lg mb-8 font-bold text-white tracking-wide character-shadow sm:text-xl">
        Sign up now and start organizing your notes like never before!
      </p>

      <div className="flex flex-col justify-center items-center text-center mb-6">
        <Link
          href=""
          className="bg-green-200 text-green-800 hover:text-white hover:bg-green-700 py-3 px-6 rounded font-bold cursor-pointer transform hover:scale-110 transition-transform duration-300 text-lg sm:text-xl"
        >
          Sign Up for Free
        </Link>
      </div>
      <div className="w-full flex justify-center mt-6 px-4">
        <p className="text-lg mb-8 w-full sm:w-[50%] font-semibold character-shadow sm:text-xl text-center">
          Join thousands of satisfied users who have transformed their
          note-taking experience. Don't miss out on the opportunity to elevate
          your productivity and keep your ideas organized.
        </p>
      </div>
    </div>
  </section>
);

export default CallToAction;
