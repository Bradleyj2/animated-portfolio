import React from "react";

type Props = {
  mediaSrc?: string;      // optional poster image/video frame
  mediaAlt?: string;
  kicker?: string;        // small line above headline
  headline?: string;      // main stacked headline
  subcopy?: string;       // optional short subcopy
  ctaHref?: string;
  ctaLabel?: string;
};

export default function Hero({
  mediaSrc = "/images/hero-poster.jpg",
  mediaAlt = "Portfolio hero",
  kicker = "Grand Theft Auto Online", // example format of the style only
  headline = "ARCHIVIST OF\nJOURNEYS",
  subcopy = "",
  ctaHref,
  ctaLabel,
}: Props) {
  return (
    <section
      className="
        relative w-full
        mx-auto max-w-screen-2xl
        px-6 md:px-10 lg:px-12 xl:px-16
        min-h-[95vh] md:min-h-[90vh]
        grid grid-cols-1 lg:grid-cols-12 gap-10 items-center
      "
      aria-label="Hero"
    >
      {/* Left: media */}
      <div className="lg:col-span-8">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-900">
          <img
            src={mediaSrc}
            alt={mediaAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Right: Rockstar-style text block */}
      <div className="lg:col-span-4">
        {/* kicker */}
        <div className="text-sm md:text-base text-neutral-400 font-medium leading-none tracking-wide mb-4">
          {kicker}
        </div>

        {/* stacked heavy headline */}
        <h1
          className="
            text-white font-sans font-extrabold tracking-tight
            leading-[0.95] text-[clamp(1.5rem,3vw+0.6rem,3rem)]
            whitespace-pre-line
          "
        >
          {headline}
        </h1>

        {subcopy && (
          <p className="mt-5 text-neutral-300 text-lg md:text-xl max-w-prose">
            {subcopy}
          </p>
        )}

        {ctaHref && ctaLabel && (
          <div className="mt-8">
            <a
              href={ctaHref}
              className="
                inline-flex items-center justify-center
                rounded-full px-6 py-3
                bg-white text-black font-semibold
                transition-transform duration-150 hover:-translate-y-0.5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
              "
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
} 