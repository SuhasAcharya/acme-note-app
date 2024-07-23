"use client"
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Page = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Page;
