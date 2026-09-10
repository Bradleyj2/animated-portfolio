import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import PageMeta from './PageMeta'
import CaseStudyCard from './CaseStudyCard'
import DividerLabel from './DividerLabel'
import { getSideProjectItems } from '../data/homeArchiveItems'

const SideProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.setProperty('--scroll-bg-color', '#ffffff')
    document.documentElement.style.setProperty('background-color', '#ffffff')
    document.body.style.setProperty('background-color', '#ffffff')

    return () => {
      document.documentElement.style.removeProperty('--scroll-bg-color')
      document.documentElement.style.removeProperty('background-color')
      document.body.style.removeProperty('background-color')
    }
  }, [])

  const sideProjects = getSideProjectItems()

  return (
    <>
      <PageMeta
        title="Side Projects — Mera Bradley"
        description="Personal and experimental work spanning game design, interactive storytelling, and exploratory product experiments."
        ogImage="/og/work.png"
      />
      <Navigation scrollProgress={0} />
      <div className="min-h-screen bg-white text-black pt-24" data-side-projects-page="true">
        <div className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16 pt-16 pb-32">
          <div className="mb-10 md:mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-500 mb-3">
              Side Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
              Experiments outside the client brief
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Personal and exploratory work — game design, interactive systems, and other projects that sit alongside the primary case studies.
            </p>
          </div>

          <DividerLabel label="Side Projects" />

          {sideProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:auto-rows-fr md:gap-10 lg:gap-12">
              {sideProjects.map((item) => (
                <div key={item.id} className="min-w-0 h-full">
                  {item.draft ? (
                    <div className="relative h-full rounded-[10px] ring-2 ring-amber-300 ring-offset-2">
                      <span className="absolute right-3 top-3 z-10 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950">
                        Draft
                      </span>
                      <CaseStudyCard
                        href={item.path}
                        title={item.title}
                        cardHeading={item.cardHeading}
                        companyName={item.companyName}
                        subtitle={item.subtitle}
                        description={item.description}
                        imageSrc={item.image}
                        imageAlt={item.title}
                        role={item.role}
                        year={item.year}
                        imageAspectClass="aspect-[16/9]"
                      />
                    </div>
                  ) : (
                    <CaseStudyCard
                      href={item.path}
                      title={item.title}
                      cardHeading={item.cardHeading}
                      companyName={item.companyName}
                      subtitle={item.subtitle}
                      description={item.description}
                      imageSrc={item.image}
                      imageAlt={item.title}
                      role={item.role}
                      year={item.year}
                      imageAspectClass="aspect-[16/9]"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No side projects published yet.</p>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/#work"
              className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors underline underline-offset-4"
            >
              ← Back to primary work
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideProjectsPage
