import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import PageMeta from "./PageMeta";

export default function AboutPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#contact') {
      // Wait a tick for layout, then smooth-scroll past the fixed nav
      requestAnimationFrame(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash])

  return (
    <>
      <PageMeta
        title="About — Mera Bradley"
        description="Multidisciplinary designer shaping accessible, human-centered digital experiences. Background in neuroscience with expertise in design, research, and interactive systems."
        ogImage="/og/about.png"
      />
      <Navigation />
      
      <main className="bg-[#0a0a0a] text-white min-h-screen about-page pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 pb-32">
          
          {/* Full Width Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-20">
            About me — I'm Mera, a designer who bridges cognitive science and storytelling to create experiences that make complex systems feel simple.
          </h2>
          
          {/* Main Content Section - Left Aligned Body Text, 2/3 width of screen */}
          <div className="about-me-body mb-20 w-2/3 max-w-full">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                I'm a multidisciplinary designer with a neuroscience background, which means I'm a little obsessed with cognitive patterns, interactive systems, and why people focus on certain things first. My work spans insurtech, healthcare systems, and agentic AI products: regulated, high-stakes environments where making complexity feel trustworthy is the whole job.
              </p>
              <p className="text-lg leading-relaxed text-white">
                I believe great design is part science, part empathy, and all about finding the sweet spot between chaos and clarity. I'm currently a Lead Product Designer at Rightpoint, working on complex enterprise solutions, design systems, and AI-native product experiences.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-20 flex gap-8">
            <a href="#contact" className="text-lg text-white hover:text-purple-400 transition-colors">
              → Let's connect
            </a>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
          </div>

          {/* Clients Section */}
          <div className="pt-12 border-t border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left - Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Some of my clients.</h2>
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
                <div>WellStar</div>
                <div>Advocate Health</div>
                <div>Second Opinion</div>
                <div>VIU by HUB</div>
                <div>Rightpoint</div>
                <div>Primrose</div>
              </div>
              <div className="space-y-4">
                <div>Springboard</div>
                <div>Walmart</div>
                <div>Clorox</div>
                <div>North Agency</div>
                <div>Exelon</div>
                <div>Big Break Foundation</div>
              </div>
              <div className="space-y-4">
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section
            id="contact"
            className="mt-20 pt-12 border-t border-gray-700 scroll-mt-24"
          >
            <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                Get in touch
              </h2>
              <p className="mb-8 max-w-md text-sm text-gray-400">
                Open to founding designer and senior product design roles in healthcare and AI. Always happy to talk about the work.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:jamera.bradley@gmail.com"
                  className="block font-medium text-white underline-offset-4 transition-colors duration-200 hover:text-purple-400 hover:underline"
                >
                  jamera.bradley@gmail.com
                </a>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <a
                    href="https://www.linkedin.com/in/jamerabradley/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white transition-colors duration-200 hover:text-purple-400"
                  >
                    LinkedIn{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="/Bradley-Jamera-Senior-Product-Designer-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white transition-colors duration-200 hover:text-purple-400"
                  >
                    Resume{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
