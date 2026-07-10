export default function CalloutBand({
  children,
  ctaHref,
  ctaLabel = "Learn more",
}: { children: React.ReactNode; ctaHref: string; ctaLabel?: string }) {
  return (
    <section className="mx-auto max-w-screen-xl px-6 md:px-10 lg:px-12 xl:px-16 py-10 md:py-14">
      <div className="relative rounded-2xl bg-neutral-900/60 border border-white/10 p-6 md:p-8">
        <div className="prose prose-invert max-w-none text-neutral-200">{children}</div>
        <div className="mt-6 md:mt-8 -mx-6 md:-mx-8">
          <a
            href={ctaHref}
            className="block w-full text-center bg-[#52ffa8] text-black font-semibold py-3 md:py-3.5 rounded-b-2xl hover:brightness-105 transition"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}