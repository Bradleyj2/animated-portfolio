export default function FullBleedGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-screen-2xl">
        <div className="border-y border-white/12">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}