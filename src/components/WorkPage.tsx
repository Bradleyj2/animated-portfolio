import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './Navigation'
import PageMeta from './PageMeta'

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    // Force white background for Work page, overriding any scroll-based theme
    document.documentElement.style.setProperty('--scroll-bg-color', '#ffffff')
    document.documentElement.style.setProperty('background-color', '#ffffff')
    document.body.style.setProperty('background-color', '#ffffff')
    
    return () => {
      // Cleanup: reset to default when leaving page
      document.documentElement.style.removeProperty('--scroll-bg-color')
      document.documentElement.style.removeProperty('background-color')
      document.body.style.removeProperty('background-color')
    }
  }, [])

  const projects = [
    {
      id: 'ai-marketing-control-center',
      title: 'AI-Assisted Marketing Control Center',
      role: 'Senior Product Designer',
      duration: '2026',
      tools: 'Figma, Prototyping, Design Systems',
      team: 'Product, Engineering, Marketing',
      path: '/case-studies/ai-marketing-control-center'
    },
    {
      id: 'viu-hub',
      title: 'VIU by Hub',
      role: 'Product Design Lead & Design Operations',
      duration: '2022–2024',
      tools: 'Figma, Design Systems, User Research',
      team: 'Product, Engineering, Design',
      path: '/case-studies/viu-hub'
    },
    {
      id: 'hemispheres',
      title: 'Hemispheres',
      role: 'Lead Game Designer',
      duration: '2025–2026',
      tools: 'Unity, Narrative Design, Brain-Computer Interfaces',
      team: 'Game Design, Neuroscience, Engineering',
      path: '/case-studies/hemispheres'
    },
    {
      id: 'second-opinion',
      title: 'Second Opinion',
      role: 'Product Designer & UX Researcher',
      duration: '2021',
      tools: 'Figma, User Interviews, Prototyping',
      team: 'Healthcare, Product, Research',
      path: '/case-studies/second-opinion'
    },
    {
      id: 'service-blueprint',
      title: 'Service Blueprint',
      role: 'Service Design Lead',
      duration: '2024',
      tools: 'Figma, Service Design, Stakeholder Mapping',
      team: 'Design Ops, Cross-functional Teams',
      path: '/case-studies/service-blueprint'
    },
    {
      id: 'omnichannel-strategy',
      title: 'Omnichannel Strategy',
      role: 'Product Design Lead',
      duration: '2025',
      tools: 'Figma, Journey Mapping, Design Systems',
      team: 'Design Ops, Product, Engineering',
      path: '/case-studies/omnichannel-strategy'
    }
  ]

  return (
    <>
      <PageMeta
        title="Work — Mera Bradley"
        description="Portfolio of design work including strategic design leadership, game design, UX research, and service design."
        ogImage="/og/work.png"
      />
      <Navigation scrollProgress={0} />
      <div className="min-h-screen bg-white text-black pt-24" data-work-page="true">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-16 pt-20 pb-32">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={project.id} className="border-t border-gray-200 pt-12 pb-12 first:border-t-0 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-5">
                    <Link to={project.path} className="group block">
                      <h2 className="text-4xl lg:text-5xl font-bold text-black group-hover:opacity-70 transition-opacity leading-tight">
                        {project.title}
                      </h2>
                    </Link>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          ROLE
                        </div>
                        <div className="text-base text-gray-900 leading-relaxed">
                          {project.role}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          DURATION
                        </div>
                        <div className="text-base text-gray-900 leading-relaxed">
                          {project.duration}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          TOOLS
                        </div>
                        <div className="text-base text-gray-900 leading-relaxed">
                          {project.tools}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          TEAM
                        </div>
                        <div className="text-base text-gray-900 leading-relaxed">
                          {project.team}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Link
                          to={project.path}
                          className="inline-block text-base font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
                        >
                          View Project →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage
