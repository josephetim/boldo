import React from "react";
import Header from "./components/Header";
import BlogSection from "./components/Blog";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import NewsSection from "./components/News";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <BlogSection />
      <NewsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
