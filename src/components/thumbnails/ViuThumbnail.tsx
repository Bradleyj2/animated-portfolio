import ThumbnailWrapper from "./ThumbnailWrapper";

export default function ViuThumbnail() {
  return (
    <ThumbnailWrapper
      bgColor="bg-neutral-900"
      accentColor="bg-amber-400"
      ghostText="25%"
    >
      <div className="relative mx-auto h-28 w-48">
        {/* Card 1 — back */}
        <div
          className="absolute h-28 w-48 rounded-xl border border-white/10 bg-white/[0.04]"
          style={{ transform: "translate(-8px, -12px) rotate(-2deg)" }}
          aria-hidden="true"
        />

        {/* Card 2 — middle */}
        <div
          className="absolute h-28 w-48 rounded-xl border border-white/10 bg-white/[0.06]"
          style={{ transform: "translate(-4px, -6px) rotate(-1deg)" }}
          aria-hidden="true"
        />

        {/* Card 3 — front */}
        <div
          className="absolute flex h-28 w-48 flex-col rounded-xl border border-white/20 bg-white/10 p-3"
          style={{ transform: "translate(0px, 0px) rotate(0deg)" }}
        >
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-white/20" />
            <div className="h-2 w-8 rounded bg-amber-400/60" />
          </div>
          <div className="mt-3 h-2 w-24 rounded bg-white/10" />
          <div className="mt-2 h-2 w-32 rounded bg-white/10" />
          <div className="mt-auto self-end rounded-full bg-amber-400/20 px-3 py-1 text-[10px] text-amber-300">
            Select →
          </div>
        </div>
      </div>
    </ThumbnailWrapper>
  );
}
