import React from "react";
import { Link } from "react-router-dom";

type Props = {
  href: string;
  /** Accessible / legacy label */
  title: string;
  imageSrc: string;
  imageAlt?: string;
  /** Main line: "Company / Project" */
  cardHeading?: string;
  companyName?: string;
  /** Shown in heading after company when `cardHeading` omitted */
  projectLabel?: string;
  /** Supporting paragraph (medium gray) */
  subtitle?: string;
  description?: string;
  role?: string;
  year?: string;
  imageAspectClass?: string;
  subtitleMaxWidth?: number;
  children?: React.ReactNode;
};

export default function CaseStudyCard({
  href,
  title,
  imageSrc,
  imageAlt = "",
  cardHeading,
  companyName,
  projectLabel,
  subtitle,
  description,
  role,
  year,
  imageAspectClass = "aspect-[4/3]",
  subtitleMaxWidth,
  children,
}: Props) {
  const heading =
    cardHeading ||
    (companyName && projectLabel
      ? `${companyName} / ${projectLabel}`
      : companyName || title);

  const body =
    subtitle ||
    description ||
    (typeof children === "string" ? children : "");

  const roleText = role?.trim() || "—";
  const yearText = year?.trim() || "—";

  return (
    <div className="flex h-full w-full min-w-0 flex-col">
      <Link
        to={href}
        className="home-case-card group flex h-full w-full min-w-0 flex-col overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white shadow-none transition-colors hover:border-[#8a8a8a] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800 focus-visible:ring-offset-2"
      >
        <div
          className={`relative w-full min-w-0 ${imageAspectClass} overflow-hidden bg-neutral-100`}
        >
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="case-study-card-text flex w-full min-w-0 flex-1 flex-col px-5 py-5 md:px-6 md:py-6">
          {heading && (
            <h3
              className="mb-2.5 max-w-none text-[1.125rem] font-semibold leading-snug tracking-[-0.01em] text-neutral-900 md:text-[1.25rem]"
              style={subtitleMaxWidth ? { maxWidth: `${subtitleMaxWidth}px` } : undefined}
            >
              {heading}
            </h3>
          )}

          {body && (
            <p className="mb-5 max-w-none text-[0.875rem] font-normal leading-[1.55] text-[#555555] md:text-[0.9375rem]">
              {body.includes("\n")
                ? body.split("\n").map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))
                : body}
            </p>
          )}

          <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-0.5">
            <div className="min-w-0">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Role
              </p>
              <p className="mt-1 text-[0.8125rem] font-normal leading-snug text-neutral-700 md:text-[0.875rem]">
                {roleText}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Year
              </p>
              <p className="mt-1 text-[0.8125rem] font-normal leading-snug text-neutral-700 md:text-[0.875rem]">
                {yearText}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
