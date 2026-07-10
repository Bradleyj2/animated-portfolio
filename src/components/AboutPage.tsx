import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PageMeta from "./PageMeta";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About — Mera Bradley"
        description="Multidisciplinary designer shaping accessible, human-centered digital experiences. Background in neuroscience with expertise in design, research, and interactive systems."
        ogImage="/og/about.png"
      />
      <Navigation />
      
      <main className="bg-[#0a0a0a] text-white min-h-screen about-page">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pt-20 pb-32">
          
          {/* Full Width Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-20 pt-8">
            About me — I'm Mera, a designer who bridges cognitive science and storytelling to create experiences that make complex systems feel simple.
          </h2>
          
          {/* Main Content Section - Left Aligned Body Text, 2/3 width of screen */}
          <div className="about-me-body mb-20 w-2/3 max-w-full">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                I'm a multidisciplinary designer with a neuroscience background, which means I'm a little obsessed with cognitive patterns, interactive systems, and why people focus on certain buttons first. I design experiences that make things clearer, easier, and more delightful, without ever underestimating the power of a well-timed animation.
              </p>
              <p className="text-lg leading-relaxed text-white">
                I believe great design is part science, part empathy, and all about finding the sweet spot between chaos and clarity. I'm currently a Lead Interaction Designer at Rightpoint, working on complex enterprise solutions and design systems.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-20 flex gap-8">
            <a href="/contact" className="text-lg text-white hover:text-purple-400 transition-colors">
              → Let's connect
            </a>
            <a href="/Bradley-Jamera-Senior-Product-Designer-Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-purple-400 transition-colors">
              → My resume
            </a>
            <Link to="/#work" className="text-lg text-white hover:text-purple-400 transition-colors">
              → My work
            </Link>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-gray-400">Years of design experience</div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-gray-400">Projects completed</div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="text-5xl font-bold text-white mb-2">12</div>
              <div className="text-sm text-gray-400">Clients worked with</div>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6">
              <div className="text-5xl font-bold text-white mb-2">6+</div>
              <div className="text-sm text-gray-400">Worked in cities</div>
            </div>
          </div>

          {/* Clients Section */}
          <div className="pt-12 border-t border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left - Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Some of my Clients.</h2>
              </div>
              
              {/* Right - Intro Text */}
              <div>
                <p className="text-lg leading-relaxed text-white max-w-[80ch]">
                  From healthcare platforms to enterprise solutions, I've worked with teams across industries to design experiences that make complex systems feel simple. Each partnership has shaped how I approach design, blending cognitive principles with creative problem-solving.
                </p>
              </div>
            </div>

            {/* Three Column Client List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="space-y-4">
                <div>Rightpoint</div>
                <div>VIU by HUB</div>
                <div>Walmart</div>
                <div>North Agency</div>
                <div>Second Opinion</div>
                <div>Springboard</div>
              </div>
              <div className="space-y-4">
                <div>Primrose</div>
                <div>WellStar</div>
                <div>Clorox</div>
                <div>Advocate Health</div>
                <div>Exelon</div>
                <div>Big Break Foundation</div>
              </div>
              <div className="space-y-4">
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
 