import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActiveSectionContextProvider from "../context/active-section-context";
import "./globals.css";

export const metadata = {
  title: "Acme Note - The Ultimate Note-Taking App",
  description:
    "Sign up for Acme Note and start organizing your thoughts and ideas today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <div className="bg-gradient-to-r from-[#87ceeb] to-[#90ee90] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-[#004d40] dark:to-[#00796b]"></div>
        <div className="bg-gradient-to-r from-[#87ceeb] to-[#90ee90] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-[#004d40] dark:to-[#00796b]"></div>

        <ActiveSectionContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
