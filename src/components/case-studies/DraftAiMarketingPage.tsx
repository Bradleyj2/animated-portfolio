import { motion } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import Navigation from '../Navigation'
import PageMeta from '../PageMeta'
import CaseStudyLayout from '../CaseStudyLayout'

const FIGURE_CAPTION_CLASS =
  'text-sm text-gray-500 text-left mt-4 px-6 md:px-6 lg:px-[98px] xl:px-[98px]'

const FULL_BLEED_CLASS = '-mx-6 md:-mx-6 lg:-mx-[98px] xl:-mx-[98px]'

function CaseStudyFigure({
  figNumber,
  caption,
  children,
  className = '',
}: {
  figNumber: number
  caption: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${FULL_BLEED_CLASS} ${className}`}>
      <div className="relative w-full">{children}</div>
      <p className={FIGURE_CAPTION_CLASS}>
        [fig {figNumber}] {caption}
      </p>
    </div>
  )
}

function aiMarketingImage(figNumber: number) {
  return `/ai-marketing/fig-${String(figNumber).padStart(2, '0')}.png`
}

function CaseStudyImage({
  figNumber,
  alt,
  className = 'h-auto w-full',
}: {
  figNumber: number
  alt: string
  className?: string
}) {
  return (
    <div className="bg-white p-4 md:p-6">
      <img
        src={aiMarketingImage(figNumber)}
        alt={alt}
        className={className}
        loading="lazy"
      />
    </div>
  )
}

const DraftAiMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.setProperty('background-color', '#ffffff', 'important')
    document.body.style.setProperty('background-color', '#ffffff', 'important')
    document.documentElement.style.setProperty('--scroll-bg-color', '#ffffff')

    return () => {
      document.documentElement.style.removeProperty('background-color')
      document.body.style.removeProperty('background-color')
      document.documentElement.style.removeProperty('--scroll-bg-color')
    }
  }, [])

  return (
    <>
      <PageMeta
        title="Designing the Control Center for AI-Assisted Marketing at Scale — Mera Bradley"
        description="A case study on building the campaign activation and editing experience for an enterprise agentic AI marketing platform."
      />
      <Navigation scrollProgress={1} />
      <CaseStudyLayout
        previousCase={{
          title: 'Omnichannel Strategy',
          path: '/case-studies/omnichannel-strategy',
        }}
        nextCase={{
          title: 'VIU by HUB',
          path: '/case-studies/viu-hub',
        }}
      >
        <div className="w-full">
          <motion.div
            className={`mb-20 ${FULL_BLEED_CLASS} px-6 md:px-6 lg:px-[98px] xl:px-[98px]`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Case study —
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-8 leading-tight">
              Designing the control center for AI-assisted marketing at scale
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-full">
              A case study on building the campaign activation and editing experience for an
              enterprise agentic AI marketing platform.
            </p>

            <div className="flex flex-col gap-2 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Mera Bradley</span> • Senior Product Designer
              </div>
              <div className="text-sm text-gray-500">
                Fortune 500 retail enterprise · Agentic AI platform · 2026
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CaseStudyFigure
              figNumber={1}
              caption="Campaign dashboard with AI agent panel."
              className="mb-24"
            >
              <CaseStudyImage
                figNumber={1}
                alt="Campaign dashboard with AI agent panel alongside marketing requests and activity"
              />
            </CaseStudyFigure>
          </motion.div>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <dl className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Company
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">
                  Fortune 500 retail enterprise
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Product
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">
                  An internal agentic AI platform that helps marketers plan, launch, and manage
                  advertising campaigns
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  My focus
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">
                  Activation and management of campaigns, ad sets, asset groups, ads, and global
                  assets
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Partners supported
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">
                  Major paid social and search media platforms
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  My role
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">
                  Lead Product Designer
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Timeline
                </dt>
                <dd className="text-lg leading-relaxed text-gray-700">2026</dd>
              </div>
            </dl>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">The challenge</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 mb-12">
              <p className="max-w-[80ch]">
                Marketers at this scale weren&apos;t just managing one campaign. They were managing
                many, spread across multiple ad platforms and each needing something a little
                different.
              </p>
              <p className="max-w-[80ch]">
                Additionally, marketers weren&apos;t just clicking through forms, they were
                collaborating with an AI agent that could take actions on their behalf. That raised
                the design bar considerably. If an AI agent edits a live ad, changes a budget, or
                swaps a creative asset, the human still needs to feel fully in control, fully
                informed, and fully able to trust what just happened.
              </p>
              <p className="max-w-[80ch]">
                My job was to design the workspace where that trust was built. The screens where
                marketers actually did the work, while an AI agent worked alongside them.
              </p>
            </div>

            <CaseStudyFigure
              figNumber={2}
              caption="Problem context — many platforms, many rules: conflicting platform hierarchies such as asset groups vs. ad groups, or a marketer juggling multiple platform tabs."
            >
              <CaseStudyImage
                figNumber={2}
                alt="Problem context — platform complexity across multiple ad platforms"
              />
            </CaseStudyFigure>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">My role</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              I owned the activation and management experience, the operational core of the platform.
              That meant:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-gray-700 ml-4 mb-8 max-w-[80ch]">
              <li>
                Taking over the initial designs for the create ad, create ad set, and create asset
                group flows, and seeing all three across the finish line ahead of MVP launch
              </li>
              <li>
                Designing the core flows for creating and editing campaigns, ad sets, asset groups,
                and ads
              </li>
              <li>
                Building the global systems underneath those flows, including product sets,
                lookalike audiences, and detailed targeting, that needed to work consistently no
                matter which ad platform a marketer was publishing to
              </li>
              <li>
                Handling the critical layer of error states, confirmations, and
                visual QA that determines whether a complex tool feels trustworthy or chaotic
              </li>
              <li>
                Contributing to platform-wide concerns like unified authentication and delegation,
                where my flows had to plug cleanly into a much bigger system
              </li>
            </ul>
          </motion.section>

          {/* Problem 1 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              One interface, multiple ad platforms
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              The hardest constraint on this project wasn&apos;t visual, it was structural. Major ad
              platforms and other partners don&apos;t just have different terminology, but also
              different rules. An offer list might be required on one platform and irrelevant on
              another. A targeting option might exist in one ecosystem and not in another.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              Early on, I worked a ticket that captured this perfectly: adding a new asset type
              and updating an offer list from required to optional. It sounds small, but it meant
              the underlying flow couldn&apos;t assume a fixed, linear set of required fields; it
              had to adapt based on which asset type and which action the marketer was performing.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              That single ticket became a pattern I carried through the rest of the work. Design
              the flow as a system of conditional states, not a fixed form. Every core flow I
              built after that was designed to flex based on platform and context, while still
              feeling like one coherent product to the marketer using it.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CaseStudyFigure
              figNumber={3}
              caption="Conditional field states — same asset creation screen with offer list required vs. optional or hidden."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={3}
                alt="Conditional field states — offer list required vs. optional or hidden"
              />
            </CaseStudyFigure>
          </motion.div>

          {/* Problem 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <CaseStudyFigure
              figNumber={4}
              caption="Core flow, before and after — inherited create ad set flow vs. final MVP-ready version."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={4}
                alt="Core flow before and after — inherited create ad set flow vs. final MVP-ready version"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={5}
              caption="Walkthrough — create ad set flow: new ad set, budget/targeting, creative selection, confirmation."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={5}
                alt="Prototype walkthrough for create ad set and create ads flows"
              />
            </CaseStudyFigure>
          </motion.div>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">From there, I built out:</p>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-gray-700 ml-4 mb-8 max-w-[80ch]">
              <li>
                <span className="font-semibold">Edit ad</span>, allowing marketers to modify
                creative, destination URLs, and tracking on a live ad without starting over
              </li>
              <li>
                <span className="font-semibold">Edit asset group</span>, the platform-specific equivalent,
                with its own asset and creative logic
              </li>
              <li>
                <span className="font-semibold">Clone campaign, ad set, and ad</span>, because in an
                agency-scale marketing org, almost nothing is built from scratch; it&apos;s
                duplicated, adjusted, and relaunched. Getting cloning right saved marketers from
                re-entering dozens of fields by hand every time they wanted to run a variation of
                an existing campaign
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              I also added support for video creatives within asset groups, a
              small-sounding feature that mattered a lot to marketers who were shifting budget
              toward video-first placements and didn&apos;t want a workaround outside the tool.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              Each of these flows had to hold up under the same test: does this still make sense
              when an AI agent has already pre-filled half of it? Designing for a human working
              alone is one problem. Designing for a human reviewing and adjusting an AI&apos;s work
              is a different one which demanded more clarity at every step.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <CaseStudyFigure
              figNumber={6}
              caption="AI-prefilled state — edit asset group with AI-suggested values visually distinguished from marketer-entered fields."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={6}
                alt="AI-prefilled edit screen with suggested-value treatment"
              />
            </CaseStudyFigure>
          </motion.div>

          {/* Problem 3 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Making the invisible systems visible
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              Some of the most impactful work I did never showed up as a flashy screen. It was
              infrastructure that every other flow depended on.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              <span className="font-semibold">Product sets.</span> I designed the flow for
              creating and managing product sets off the global product list, a shared resource
              used across campaigns and platforms. This wasn&apos;t a one-off form; it was a
              system marketers would return to constantly, so it needed to be fast, predictable,
              and forgiving of scale.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              <span className="font-semibold">Lookalike audiences.</span> I designed a flow that
              let marketers build reusable, global lookalike audiences instead of recreating the
              same audience logic inside every ad set, and then made it possible to edit those
              audiences directly inline, from within the create/edit ad set flow itself. That
              inline editing decision mattered: it meant marketers didn&apos;t have to abandon
              what they were doing, jump to a separate settings area, and lose their place.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              <span className="font-semibold">Detailed targeting.</span> I redesigned how
              marketers browsed, added, and removed targeting criteria, interests, demographics,
              and more, inside the ad set flow. With targeting options numbering in the thousands,
              the design challenge was less about &quot;how do we show this data&quot; and more
              about &quot;how do we keep a marketer from feeling lost inside it.&quot;
            </p>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              <span className="font-semibold">Labels for offers.</span> This one had a real
              business constraint baked into it: listing groups capped out at 1,000 offers per
              asset group. Labels didn&apos;t have that limit, so I designed a flow that let
              marketers apply custom labels to product sets, with the interface being direct
              about why labels existed and nudging marketers over 1,000 offers toward labels
              instead of leaving them to hit a wall and wonder why.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <CaseStudyFigure
              figNumber={7}
              caption="Global product set flow — product list with filtering/search and reusable sets across campaigns."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={7}
                alt="Product set creation and management screen"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={8}
              caption="Inline lookalike audience editing — expanded editor within create/edit ad set without leaving the flow."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={8}
                alt="Inline lookalike audience editor in ad set flow"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={9}
              caption="Labels vs. listing groups — 1,000-offer cap warning vs. successful organization using labels."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={9}
                alt="Labels vs. listing groups comparison for product sets"
              />
            </CaseStudyFigure>
          </motion.div>

          {/* Problem 4 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Trust, failure, and recovery
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              An AI-assisted platform lives or dies on whether people trust it when something goes
              wrong. So a meaningful chunk of my work was designing for the moments outside the
              happy path:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-gray-700 ml-4 mb-8 max-w-[80ch]">
              <li>
                Dynamic error states for the different ways an action could fail, a rejected
                creative, a platform-side validation error, a budget conflict, each needing its
                own clear, specific message rather than a generic &quot;something went wrong&quot;
              </li>
              <li>
                Confirmation screens at key decision points, so marketers always knew exactly what
                action they were about to take and what would happen next, especially when an AI
                agent had proposed the action
              </li>
              <li>
                A full visual QA pass across the platform, auditing every screen against the design
                system and documenting the gaps, inconsistent spacing, mismatched states, components
                drifting from spec, so the product felt like it was built by one team, not stitched
                together from a dozen sprints
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              This is the kind of work that rarely makes a portfolio highlight reel, but it&apos;s
              often the difference between a tool marketers trust with high-stakes, real-money
              campaigns and one they route around.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <CaseStudyFigure
              figNumber={10}
              caption="Error state gallery — rejected creative, budget conflict, and platform validation errors with specific messaging."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={10}
                alt="Error state gallery showing creative rejected, budget conflict, and validation failed notifications"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={11}
              caption="Confirmation screen — key decision point before publishing a cloned campaign or approving an AI-proposed change."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={11}
                alt="Confirmation screen before publishing or approving an AI-proposed change"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={12}
              caption="Visual QA documentation — annotated audit of spacing, states, and off-spec components with found vs. fixed callouts."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={12}
                alt="Visual QA audit documentation"
              />
            </CaseStudyFigure>
          </motion.div>

          {/* Problem 5 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Zooming out to the platform level
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              Two projects pulled me out of my core flows and into platform-wide problems.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              <span className="font-semibold">Unified login.</span> I worked on the login
              experience that had to serve both internal employees and external partners, across
              multiple authentication paths, SSO/Active Directory for internal users, and
              GTP/IAM/PingFed for external ones. The design challenge wasn&apos;t the UI so much as
              the logic: making one clean entry point feel effortless regardless of which
              authentication path was firing behind the scenes, without ever exposing that
              complexity to the person logging in.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              <span className="font-semibold">Delegation.</span> I designed a feature that let
              marketers assign a temporary proxy to handle their approval tasks while they were out
              of office, with admins able to assign delegates on others&apos; behalf and see every
              delegate assigned across the org. In a platform where an AI agent might be waiting
              on a human approval to take action, this feature mattered more than it might
              elsewhere: an approval bottleneck couldn&apos;t just sit there because one person was
              on vacation.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-[80ch]">
              Both projects forced the same discipline: design something one person will barely
              notice, and thousands of people will depend on.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 max-w-[80ch]">
              Alongside all of this, I stayed close to the reporting side of the product,
              updating the UX around forecasting enhancements, and kept a constant eye on
              integration, making sure every flow I shipped felt like part of one seamless platform
              rather than a patchwork of features built by different teams at different times.
            </p>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <CaseStudyFigure
              figNumber={13}
              caption="Unified login flow — single entry point with authentication paths (SSO/AD vs. GTP/IAM/PingFed) branching behind it."
              className="mb-12"
            >
              <CaseStudyImage
                figNumber={13}
                alt="Unified login flow with authentication paths behind a single entry point"
              />
            </CaseStudyFigure>

            <CaseStudyFigure
              figNumber={14}
              caption="Delegation feature — user assigning a proxy/delegate and admin view of org-wide delegate assignments."
              className="mb-20"
            >
              <CaseStudyImage
                figNumber={14}
                alt="Delegation feature — assign proxy and admin delegate overview"
              />
            </CaseStudyFigure>
          </motion.div>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Impact</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-[80ch]">
              This work kept the platform&apos;s most critical marketer workflows on track for
              launch, reduced repetitive campaign setup through reusable global systems, and gave
              teams a consistent, trustworthy surface for collaborating with an AI agent at
              enterprise scale.
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div>
                <div className="mb-2 text-5xl font-bold text-gray-900">3</div>
                <div className="text-lg text-gray-600">
                  Core creation flows shipped MVP-ready for launch
                </div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold text-gray-900">Global</div>
                <div className="text-lg text-gray-600">
                  Reusable product sets, audiences, and cloning that cut redundant setup
                </div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold text-gray-900">Trusted</div>
                <div className="text-lg text-gray-600">
                  Confirmations and specific error states for AI-assisted workflows
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </CaseStudyLayout>
    </>
  )
}

export default DraftAiMarketingPage
