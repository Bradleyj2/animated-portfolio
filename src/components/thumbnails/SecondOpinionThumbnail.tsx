import ThumbnailWrapper from "./ThumbnailWrapper";

export default function SecondOpinionThumbnail() {
  return (
    <ThumbnailWrapper
      bgColor="bg-teal-950"
      accentColor="bg-teal-500"
      ghostText="18+"
    >
      <div className="relative">
        {/* Ghost document — farthest back */}
        <div
          className="absolute -z-20 h-36 w-56 rounded-xl border border-white/[0.06] bg-white/[0.02]"
          style={{ transform: "translate(16px, 16px)" }}
          aria-hidden="true"
        />

        {/* Ghost document — middle */}
        <div
          className="absolute -z-10 h-36 w-56 rounded-xl border border-white/[0.06] bg-white/[0.03]"
          style={{ transform: "translate(8px, 8px)" }}
          aria-hidden="true"
        />

        {/* Front document */}
        <div className="relative h-36 w-56 rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <div className="h-2 w-20 rounded bg-white/20" />
          <div className="mt-1.5 h-1.5 w-14 rounded bg-white/10" />
          <div className="mt-3 h-px w-full bg-white/10" />
          <div className="mt-2 h-1.5 w-full rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-full rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-3/5 rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-full rounded bg-white/10" />
          <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/10" />
          <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-400/60" />
        </div>
      </div>
    </ThumbnailWrapper>
  );
}
