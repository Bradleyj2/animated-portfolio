import React from 'react';

const PortfolioPDF = () => {
  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }
        
        .portfolio-pdf {
          background-color: #ffffff !important;
          color: #000000 !important;
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.6;
          width: 100%;
          max-width: none;
          padding: 0;
          margin: 0;
        }
        
        .portfolio-pdf * {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
        
        .magazine-page {
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          display: flex;
          flex-direction: column;
        }
        
        .magazine-page:last-child {
          page-break-after: avoid;
        }
        
        .magazine-spread {
          width: 420mm;
          height: 297mm;
          padding: 20mm;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          display: flex;
        }
        
        .left-page, .right-page {
          width: 50%;
          padding: 0 15mm;
          box-sizing: border-box;
        }
        
        .magazine-cover {
          width: 210mm;
          height: 297mm;
          padding: 40mm 30mm;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }
        
        .magazine-title {
          font-size: 5rem;
          font-weight: 100;
          line-height: 0.9;
          letter-spacing: -0.08em;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        
        .magazine-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.3;
          color: #666;
          margin-bottom: 40px;
          font-style: italic;
        }
        
        .magazine-meta {
          font-size: 0.9rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 60px;
        }
        
        .magazine-issue {
          position: absolute;
          top: 30mm;
          right: 30mm;
          font-size: 0.8rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .magazine-date {
          position: absolute;
          bottom: 30mm;
          left: 30mm;
          font-size: 0.8rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .editorial-header {
          border-bottom: 2px solid #000;
          padding-bottom: 30px;
          margin-bottom: 40px;
        }
        
        .editorial-title {
          font-size: 3.5rem;
          font-weight: 200;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 15px;
        }
        
        .editorial-subtitle {
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.4;
          color: #666;
          margin-bottom: 30px;
        }
        
        .editorial-meta {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        
        .toc-page {
          width: 210mm;
          height: 297mm;
          padding: 30mm;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
        }
        
        .toc-title {
          font-size: 2.5rem;
          font-weight: 200;
          margin-bottom: 40px;
          text-align: center;
          letter-spacing: -0.02em;
        }
        
        .toc-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .toc-item:last-child {
          border-bottom: none;
        }
        
        .toc-section {
          font-weight: 500;
        }
        
        .toc-page-number {
          color: #666;
          font-weight: 300;
        }
        
        .case-study-spread {
          width: 100%;
          max-width: 1200px;
          min-height: 100vh;
          padding: 20px;
          box-sizing: border-box;
          position: relative;
          page-break-after: always;
          display: flex;
          margin: 0 auto;
        }
        
        .case-study-left {
          width: 45%;
          padding-right: 15px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .case-study-right {
          width: 45%;
          padding-left: 15px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .case-study-title {
          font-size: 2.8rem;
          font-weight: 200;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 15px;
        }
        
        .case-study-subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.4;
          color: #666;
          margin-bottom: 30px;
          font-style: italic;
        }
        
        .section-title {
          font-size: 1.3rem;
          font-weight: 400;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        
        .section-content {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 25px;
        }
        
        .image-caption {
          font-size: 0.8rem;
          color: #666;
          font-style: italic;
          text-align: center;
          margin-top: 15px;
          line-height: 1.3;
        }
        
        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 25px 0;
        }
        
        .grid-3-col {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          margin: 25px 0;
        }
        
        .quote-text {
          font-size: 1.1rem;
          line-height: 1.5;
          font-style: italic;
          color: #333;
          margin: 25px 0;
          padding-left: 15px;
          border-left: 2px solid #000;
        }
        
        .editorial-divider {
          height: 1px;
          background: #000;
          margin: 30px 0;
        }
        
        .pull-quote {
          font-size: 1.4rem;
          line-height: 1.3;
          font-style: italic;
          color: #333;
          margin: 30px 0;
          padding: 20px;
          border-left: 4px solid #000;
          background: #f8f9fa;
        }
        
        .image-full-width {
          width: 100%;
          margin: 10px 0;
        }
        
        .image-half-width {
          width: 50%;
          margin: 8px 0;
        }
        
        .page-number {
          position: absolute;
          bottom: 15mm;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8rem;
          color: #999;
        }
        
        .page-number.left {
          left: 20mm;
          right: auto;
        }
        
        @media print {
          .page-break {
            page-break-before: always;
          }
          .magazine-page, .magazine-spread, .magazine-cover, .toc-page, .case-study-spread {
            page-break-after: always;
          }
        }
      `}</style>
      <div className="portfolio-pdf">
        {/* Magazine Cover */}
        <div className="magazine-cover">
          <div className="magazine-issue">Issue 01</div>
          <h1 className="magazine-title">Mera Bradley</h1>
          <p className="magazine-subtitle">Multidisciplinary Designer & UX Researcher</p>
          <div className="magazine-meta">
            A collection of design work exploring the intersection of user experience, 
            organizational transformation, and human-centered design methodologies.
          </div>
          <div className="magazine-date">2025</div>
        </div>

        {/* Table of Contents */}
        <div className="toc-page">
          <h2 className="toc-title">Contents</h2>
          <div>
            <div className="toc-item">
              <span className="toc-section">About the Designer</span>
              <span className="toc-page-number">3</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Hemispheres: A Storytelling Case Study</span>
              <span className="toc-page-number">4</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Service Blueprint Template</span>
              <span className="toc-page-number">7</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Omnichannel Strategy</span>
              <span className="toc-page-number">10</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">VIU by HUB</span>
              <span className="toc-page-number">13</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Second Opinion Platform</span>
              <span className="toc-page-number">16</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Design Process & Methodology</span>
              <span className="toc-page-number">19</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Skills & Expertise</span>
              <span className="toc-page-number">20</span>
            </div>
            <div className="toc-item">
              <span className="toc-section">Contact Information</span>
              <span className="toc-page-number">21</span>
            </div>
          </div>
          <div className="page-number">2</div>
        </div>

        {/* About Section - Magazine Page */}
        <div className="magazine-page">
          <div className="editorial-header">
            <div className="editorial-meta mb-4">About</div>
            <h2 className="editorial-title">The Designer</h2>
            <p className="editorial-subtitle">
              A multidisciplinary designer with a neuroscience background, exploring the intersection of cognitive patterns and interactive systems.
            </p>
          </div>
          
          <div className="grid-2-col">
            <div>
              <img 
                src="/profile1.png" 
                alt="Mera Bradley" 
                className="image-full-width"
                style={{pointerEvents: 'none'}}
              />
            </div>
            <div>
              <div className="section-content">
                <p>
                  I spend most of my time poking at screens, nudging pixels into place, and thinking about how humans learn, play, and occasionally panic when their Wi-Fi drops. I like to say design is just storytelling for the brain, except with fewer dragons and more dropdown menus.
                </p>
                <p>
                  I'm a multidisciplinary designer with a neuroscience background, which basically means I'm equally obsessed with cognitive patterns, interactive systems, and figuring out why people click certain buttons first.
                </p>
                <p>
                  I design experiences that try to make life a little clearer, a little easier, and hopefully a little more delightful, without ever underestimating the power of a well-timed animation.
                </p>
                <p>
                  I'm an overthinker, an experimenter, and a believer that good design is part science, part empathy, and all about finding that sweet spot between chaos and clarity.
                </p>
              </div>
            </div>
          </div>
          <div className="page-number">3</div>
        </div>

        {/* Hemispheres Case Study - Magazine Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="editorial-meta mb-4">Case Study — 2025</div>
            <h2 className="case-study-title">Hemispheres</h2>
            <p className="case-study-subtitle">How Two Characters Become One Story About Healing</p>
            <div className="editorial-meta mb-8">
              <span>Mera Bradley</span> • Game Design & Storytelling
            </div>
        
            <div className="section-content">
              <h3 className="section-title">Executive Summary</h3>
              <p>
                Hemispheres shows how video games can tell deeply personal stories in new ways. You play as two characters—Logic and Intuition—who represent different parts of your mind. This simple idea turns the invisible struggle of mental healing into something you can actually play.
              </p>
              <p>
                This case study looks at how the game uses its world, puzzles, and characters to tell a story about putting yourself back together.
              </p>
              
              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="/hemispheres10.png"
                  alt="Logic and Intuition characters representing different parts of the mind"
                  className="image-full-width"
                />
                <p className="image-caption">
                  Logic and Intuition characters representing different parts of the mind
                </p>
              </div>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Storytelling Challenge</h3>
              <p>
                How do you turn psychological processes into a game? Challenges like inner distress, recovery from trauma, or questions of identity take place in the mind, invisible to others.
              </p>
            </div>
          </div>

          <div className="case-study-right">
            <div className="section-content">
              <h3 className="section-title">The Solution</h3>
              <p>
                I created two distinct characters that players control simultaneously. Logic approaches problems methodically, while Intuition follows gut feelings. The game mechanics mirror real mental processes—sometimes Logic and Intuition work together, sometimes they conflict, and sometimes one needs to step back while the other takes the lead.
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Characters</h3>
              <div className="grid-2-col">
                <div>
                  <h4 className="section-title">Logic</h4>
                  <p>
                    The analytical, methodical part of your mind. Logic approaches problems step-by-step, looking for patterns and evidence. In the game, Logic moves deliberately and makes decisions based on facts and reasoning.
                  </p>
                </div>
                <div>
                  <h4 className="section-title">Intuition</h4>
                  <p>
                    The emotional, instinctive part of your mind. Intuition follows gut feelings and emotional responses. In the game, Intuition moves more fluidly and makes decisions based on feelings and immediate reactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <h3 className="section-title">Emotional Approach System</h3>
              <p>
                The game features five emotional approaches that affect how Logic and Intuition interact:
              </p>
              <div className="grid-3-col">
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Denial</h4>
                  <p className="text-sm">Avoiding difficult emotions or situations</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Curiosity</h4>
                  <p className="text-sm">Seeking to understand and explore</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Empathy</h4>
                  <p className="text-sm">Connecting with others' experiences</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Clarity</h4>
                  <p className="text-sm">Gaining insight and understanding</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Avoidance</h4>
                  <p className="text-sm">Stepping back from overwhelming situations</p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <h3 className="section-title">Impact</h3>
              <p>
                Hemispheres demonstrates how game mechanics can mirror real psychological processes, making abstract mental health concepts tangible and interactive. The dual-character system helps players understand how different parts of their mind work together (or against each other) during difficult times.
              </p>
            </div>
          </div>
          <div className="page-number">4</div>
        </div>

        {/* Hemispheres Images Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="section-content">
              <img
                src="/hemispheres2.png"
                alt="Hemispheres game interface showing character interactions"
                className="image-full-width"
              />
              <p className="image-caption">
                Game interface showing Logic and Intuition working together
              </p>
            </div>
          </div>
          <div className="case-study-right">
            <div className="section-content">
              <img
                src="/hemispheres1.png"
                alt="Hemispheres game world and environment design"
                className="image-full-width"
              />
              <p className="image-caption">
                Game world design reflecting internal mental landscapes
              </p>
            </div>
          </div>
          <div className="page-number">5</div>
        </div>

        {/* Service Blueprint Case Study - Magazine Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="editorial-meta mb-4">Case Study — 2025</div>
            <h2 className="case-study-title">Service Blueprint Template</h2>
            <p className="case-study-subtitle">Standardizing Service Design Across a Growing Organization</p>
            <div className="editorial-meta mb-8">
              <span>Mera Bradley</span> • Organizational Design & Process Innovation
            </div>
        
            <div className="section-content">
              <h3 className="section-title">The Challenge</h3>
              <p>
                As organizations grow, service design becomes fragmented. Different teams create their own processes, leading to inconsistent customer experiences and operational inefficiencies. How do you create a scalable framework that maintains quality while allowing for team autonomy?
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Solution</h3>
              <p>
                I developed a comprehensive service blueprint template that standardizes the design process while remaining flexible enough for different use cases. The template includes standardized sections, clear guidelines, and collaborative elements that ensure consistency across teams.
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">Key Components</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Standardized sections for consistent documentation</li>
                <li>Clear guidelines for each section</li>
                <li>Collaborative elements for team input</li>
                <li>Flexible framework that adapts to different services</li>
              </ul>
            </div>
          </div>

          <div className="case-study-right">
            <div className="section-content">
              <h3 className="section-title">Testing & Validation</h3>
              <p>
                I ran four testing phases to ensure the template was both usable and effective:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Layout usability with internal users</li>
                <li>Cross-team comprehension testing</li>
                <li>Creation workflow validation</li>
                <li>Readability testing with non-creators</li>
              </ul>
            </div>

            <div className="section-content">
              <h3 className="section-title">Critical Insight</h3>
              <p>
                The critical insight: visual hierarchy mattered more than content completeness. Engineers could parse complex information if visually organized, but simple information in poor layouts caused confusion.
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">Breakthrough Moment</h3>
              <p className="quote-text">
                "This is the first time I've created a service blueprint and felt confident sharing it with other teams."
              </p>
              <p className="text-sm" style={{color: '#666', fontStyle: 'italic'}}>— Product Manager</p>
            </div>

            <div className="section-content">
              <h3 className="section-title">Impact</h3>
              <p>
                The template has been adopted across multiple teams, resulting in more consistent service design practices and improved cross-team collaboration. Teams report feeling more confident in their service design work and better equipped to share their processes with other teams.
              </p>
            </div>
          </div>
          <div className="page-number">7</div>
        </div>

        {/* Service Blueprint Images Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="section-content">
              <img
                src="/sb1.png"
                alt="Service Blueprint Template Overview"
                className="image-full-width"
              />
              <p className="image-caption">
                Service Blueprint Template Overview
              </p>
            </div>
          </div>
          <div className="case-study-right">
            <div className="section-content">
              <img
                src="/sb2.png"
                alt="Service Blueprint Template Sections"
                className="image-full-width"
              />
              <p className="image-caption">
                Service Blueprint Template Sections
              </p>
            </div>
          </div>
          <div className="page-number">8</div>
        </div>

        {/* Service Blueprint Additional Images Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="section-content">
              <img
                src="/sb3.png"
                alt="Service Blueprint Testing Results"
                className="image-full-width"
              />
              <p className="image-caption">
                Service Blueprint Testing Results
              </p>
            </div>
          </div>
          <div className="case-study-right">
            <div className="section-content">
              <img
                src="/sb4.png"
                alt="Service Blueprint Implementation"
                className="image-full-width"
              />
              <p className="image-caption">
                Service Blueprint Implementation
              </p>
            </div>
          </div>
          <div className="page-number">9</div>
        </div>

        {/* Omnichannel Strategy Case Study - Magazine Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="editorial-meta mb-4">Case Study — 2025</div>
            <h2 className="case-study-title">Omnichannel Strategy</h2>
            <p className="case-study-subtitle">Designing seamless experiences that bridge digital and physical touchpoints</p>
            <div className="editorial-meta mb-8">
              <span>Mera Bradley</span> • UX Strategy & Design Systems
            </div>
        
            <div className="section-content">
              <h3 className="section-title">The Challenge</h3>
              <p>
                Creating cohesive customer experiences across multiple channels while maintaining brand consistency and operational efficiency. How do we ensure users have a seamless experience whether they interact digitally or in-person?
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Strategy</h3>
              <p>
                Developed a comprehensive omnichannel strategy that unifies digital and physical touchpoints. Created design systems and processes that ensure consistent experiences while allowing for channel-specific optimizations.
              </p>
            </div>
          </div>

          <div className="case-study-right">
            <div className="section-content">
              <h3 className="section-title">Key Components</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Unified design system across all touchpoints</li>
                <li>Seamless data flow between digital and physical channels</li>
                <li>Consistent user experience regardless of entry point</li>
                <li>Flexible architecture that adapts to different contexts</li>
              </ul>
            </div>

            <div className="section-content">
              <h3 className="section-title">Impact</h3>
              <p>
                The omnichannel strategy has resulted in improved customer satisfaction, increased engagement across channels, and more efficient operations. Users now experience a cohesive brand journey regardless of how they interact with the organization.
              </p>
            </div>
          </div>
          <div className="page-number">10</div>
        </div>

        {/* VIU by HUB Case Study - Magazine Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="editorial-meta mb-4">Case Study — 2025</div>
            <h2 className="case-study-title">VIU by HUB</h2>
            <p className="case-study-subtitle">Redefining digital trust in insurance through design leadership and innovation</p>
            <div className="editorial-meta mb-8">
              <span>Mera Bradley</span> • Design Leadership & Innovation
            </div>
        
            <div className="section-content">
              <h3 className="section-title">The Opportunity</h3>
              <p>
                Insurance is traditionally a complex, intimidating industry. How do we create digital experiences that build trust, simplify processes, and make insurance accessible to everyone?
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Approach</h3>
              <p>
                Led a comprehensive redesign of the insurance experience, focusing on transparency, simplicity, and trust-building. Applied user-centered design principles to transform complex insurance processes into intuitive digital experiences.
              </p>
            </div>
          </div>

          <div className="case-study-right">
            <div className="section-content">
              <h3 className="section-title">Design Principles</h3>
              <div className="grid-3-col">
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Transparency</h4>
                  <p className="text-sm">Clear communication of terms, processes, and outcomes</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Simplicity</h4>
                  <p className="text-sm">Streamlined processes that reduce cognitive load</p>
                </div>
                <div className="p-4 border border-gray-300">
                  <h4 className="section-title">Trust</h4>
                  <p className="text-sm">Building confidence through consistent, reliable experiences</p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <h3 className="section-title">Results</h3>
              <p>
                The redesign has significantly improved user engagement and trust in the insurance process. Users report feeling more confident and informed when making insurance decisions, leading to higher satisfaction and retention rates.
              </p>
            </div>
          </div>
          <div className="page-number">13</div>
        </div>

        {/* Second Opinion Case Study - Magazine Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="editorial-meta mb-4">Case Study — 2025</div>
            <h2 className="case-study-title">Second Opinion Platform</h2>
            <p className="case-study-subtitle">Simplifying caregiver decision-making with insights, prototypes, and tested solutions</p>
            <div className="editorial-meta mb-8">
              <span>Mera Bradley</span> • Healthcare UX & Research
            </div>
        
            <div className="section-content">
              <h3 className="section-title">The Challenge</h3>
              <p>
                Caregivers often face difficult medical decisions without adequate support or information. How do we create a platform that provides reliable second opinions while maintaining trust and accessibility for both patients and medical professionals?
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">The Solution</h3>
              <p>
                Designed a comprehensive second opinion platform that connects patients with qualified medical professionals. The platform prioritizes clarity, trust, and accessibility while ensuring medical professionals can efficiently review cases and provide detailed second opinions.
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">Design Solution</h3>
              <p>
                The solution focused on creating a clean, professional interface that prioritized clarity and trust. I implemented a step-by-step consultation process that guided patients through uploading their medical records and describing their concerns. For medical professionals, I designed an efficient dashboard that allowed them to quickly review cases, access patient information securely, and provide detailed second opinions. The interface used familiar medical terminology while remaining accessible to patients.
              </p>
            </div>
          </div>

          <div className="case-study-right">
            <div className="section-content">
              <h3 className="section-title">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Step-by-step consultation process for patients</li>
                <li>Efficient dashboard for medical professionals</li>
                <li>Secure patient information management</li>
                <li>Familiar medical terminology with accessible design</li>
              </ul>
            </div>

            <div className="section-content">
              <h3 className="section-title">Emotional Design Matters</h3>
              <p>
                Patients seeking second opinions are often dealing with serious health concerns. The design needed to be calming and supportive, using appropriate colors, typography, and imagery to reduce anxiety rather than increase it.
              </p>
            </div>

            <div className="section-content">
              <h3 className="section-title">Impact</h3>
              <p>
                The platform has improved access to second opinions, helping caregivers make more informed decisions while providing medical professionals with an efficient tool for case review and consultation.
              </p>
            </div>
          </div>
          <div className="page-number">16</div>
        </div>

        {/* Second Opinion Images Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="section-content">
              <img
                src="/secondop1.png"
                alt="Second Opinion Platform Interface"
                className="image-full-width"
              />
              <p className="image-caption">
                Second Opinion Platform Interface
              </p>
            </div>
          </div>
          <div className="case-study-right">
            <div className="section-content">
              <img
                src="/secondop8.png"
                alt="Design Solution Overview"
                className="image-full-width"
              />
              <p className="image-caption">
                Design Solution Overview
              </p>
            </div>
          </div>
          <div className="page-number">17</div>
        </div>

        {/* Second Opinion Additional Images Spread */}
        <div className="case-study-spread">
          <div className="case-study-left">
            <div className="section-content">
              <img
                src="/secondop2.png"
                alt="Key themes from affinity mapping"
                className="image-half-width"
              />
              <p className="image-caption">
                Key themes from affinity mapping
              </p>
            </div>
          </div>
          <div className="case-study-right">
            <div className="section-content">
              <img
                src="/secondop3.png"
                alt="Collection of wireframes showcasing the Second Opinion platform"
                className="image-half-width"
              />
              <p className="image-caption">
                Collection of wireframes showcasing the Second Opinion platform
              </p>
            </div>
          </div>
          <div className="page-number">18</div>
        </div>

        {/* Design Process & Methodology - Magazine Page */}
        <div className="magazine-page">
          <div className="editorial-header">
            <div className="editorial-meta mb-4">Methodology</div>
            <h2 className="editorial-title">Design Process</h2>
            <p className="editorial-subtitle">
              A systematic approach to understanding problems, exploring solutions, and creating meaningful experiences.
            </p>
          </div>
          
          <div className="grid-2-col">
            <div>
              <div className="section-content">
                <h3 className="section-title">Research & Discovery</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>User interviews and ethnographic research</li>
                  <li>Stakeholder mapping and journey analysis</li>
                  <li>Competitive analysis and market research</li>
                  <li>Problem definition and opportunity identification</li>
                </ul>
              </div>

              <div className="section-content">
                <h3 className="section-title">Ideation & Prototyping</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Brainstorming and concept development</li>
                  <li>Rapid prototyping and iteration</li>
                  <li>User testing and feedback integration</li>
                  <li>Design system development</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="section-content">
                <h3 className="section-title">Implementation & Testing</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Collaborative development with engineering teams</li>
                  <li>Usability testing and accessibility validation</li>
                  <li>Performance optimization and quality assurance</li>
                  <li>Launch planning and rollout strategy</li>
                </ul>
              </div>

              <div className="section-content">
                <h3 className="section-title">Evaluation & Iteration</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Analytics and user behavior analysis</li>
                  <li>Feedback collection and synthesis</li>
                  <li>Continuous improvement and optimization</li>
                  <li>Knowledge sharing and documentation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page-number">19</div>
        </div>

        {/* Skills & Expertise - Magazine Page */}
        <div className="magazine-page">
          <div className="editorial-header">
            <div className="editorial-meta mb-4">Expertise</div>
            <h2 className="editorial-title">Skills & Capabilities</h2>
            <p className="editorial-subtitle">
              A multidisciplinary approach combining design, research, and strategic thinking.
            </p>
          </div>
          
          <div className="grid-3-col">
            <div>
              <div className="section-content">
                <h3 className="section-title">Design</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>User Experience Design</li>
                  <li>Interface Design</li>
                  <li>Service Design</li>
                  <li>Design Systems</li>
                  <li>Prototyping</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="section-content">
                <h3 className="section-title">Research</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>User Research</li>
                  <li>Usability Testing</li>
                  <li>Ethnographic Research</li>
                  <li>Data Analysis</li>
                  <li>Stakeholder Mapping</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="section-content">
                <h3 className="section-title">Strategy</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Design Strategy</li>
                  <li>Process Innovation</li>
                  <li>Organizational Design</li>
                  <li>Change Management</li>
                  <li>Team Leadership</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="page-number">20</div>
        </div>

        {/* Contact Information - Magazine Page */}
        <div className="magazine-page">
          <div className="text-center" style={{paddingTop: '60px'}}>
            <div className="border-t-2 border-black pt-8 mt-16">
              <h2 className="text-3xl font-bold mb-6" style={{color: '#000000'}}>Contact</h2>
              <div className="text-xl mb-4" style={{color: '#000000'}}>
                <strong>Mera Bradley</strong>
              </div>
              <div className="text-lg mb-2" style={{color: '#000000'}}>
                Multidisciplinary Designer & UX Researcher
              </div>
              <div className="text-lg mb-4" style={{color: '#000000'}}>
                jamera.bradley@gmail.com
              </div>
              <div className="text-sm" style={{color: '#666', fontStyle: 'italic'}}>
                Available for freelance projects and full-time opportunities
              </div>
            </div>
          </div>
          <div className="page-number">21</div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPDF;