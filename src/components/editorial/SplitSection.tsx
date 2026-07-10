import React from "react";

export default function SplitSection({
  media,
  children,
  reverse = false,
}: {
  media: React.ReactNode;          // <img/> or <figure/>
  children: React.ReactNode;       // right column prose
  reverse?: boolean;               // optionally flip
}) {
  return (
    <section className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16 py-12 md:py-16">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow">
            {media}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="prose prose-invert max-w-none leading-relaxed text-neutral-200 prose-a:text-[#b388ff] hover:prose-a:opacity-90 prose-strong:text-white">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}