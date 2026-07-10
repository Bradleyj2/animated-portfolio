import React from "react";

export default function About() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      {/* Subtle background sparkles/gradient dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#c084fc] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-[#c084fc] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-[#c084fc] rounded-full animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-[#c084fc] rounded-full animate-pulse delay-4000"></div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-12 xl:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column - Main Bio Text (Two-thirds) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Mera Bradley</h1>
              
              <p className="text-lg leading-relaxed text-white">
                Mera Bradley is a multidisciplinary designer shaping{" "}
                <span className="font-bold text-[#4ade80] hover:text-[#5ef08a] transition-colors">accessible, human-centered digital experiences</span> that bring clarity to complex systems and help people connect with ease. With a background in{" "}
                <span className="font-bold text-[#4ade80] hover:text-[#5ef08a] transition-colors">neuroscience</span>, she explores how people think, learn, and play, and how design can meaningfully support those behaviors.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                Her work sits at the crossroads of{" "}
                <span className="font-bold text-[#4ade80] hover:text-[#5ef08a] transition-colors">science and storytelling</span>, where cognitive patterns, interactive systems, and creative expression converge. Whether designing product experiences or investigating the psychology of game mechanics, she grounds her process in{" "}
                <span className="font-bold text-[#4ade80] hover:text-[#5ef08a] transition-colors">empathy, experimentation, and a constant drive to learn</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar (One-third) */}
          <div className="space-y-8">
            {/* Experience Section */}
            <div>
              <h3 className="font-bold text-white text-xl mb-4">Experience</h3>
              <div className="space-y-2 text-white">
                <div>Rightpoint, Lead Interaction Designer</div>
                <div>Springboard, Peer Mentor</div>
                <div>North, Product Designer</div>
                <div>Second Opinion, Product Designer</div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="font-bold text-white text-xl mb-4">Certifications</h3>
              <div className="space-y-2 text-white">
                <div>MITx Science of Learning and Memory</div>
                <div>Project Management Certificate</div>
              </div>
            </div>

            {/* Volunteering Section */}
            <div>
              <h3 className="font-bold text-white text-xl mb-4">Volunteering</h3>
              <div className="space-y-2 text-white">
                <div>Big Break Foundation, Accessibility Specialist</div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-bold text-white text-xl mb-4">Contact</h3>
              <div className="space-y-3 text-white">
                <div>
                  <a 
                    href="mailto:jamera.bradley@gmail.com"
                    className="text-[#c084fc] hover:text-white hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] transition-all duration-300"
                  >
                    jamera.bradley@gmail.com
                  </a>
                </div>
                <div>
                  <a 
                    href="https://www.linkedin.com/in/jamerabradley/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#c084fc] hover:text-white hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] transition-all duration-300"
                  >
                    https://www.linkedin.com/in/jamerabradley/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}