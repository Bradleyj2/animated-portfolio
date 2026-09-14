import ThumbnailWrapper from "./ThumbnailWrapper";

const LEFT_LABELS = ["Self Service", "Web", "App"] as const;
const RIGHT_LABELS = ["Live Agent", "Phone", "Chat"] as const;

export default function OmnichannelThumbnail() {
  return (
    <ThumbnailWrapper
      bgColor="bg-stone-900"
      accentColor="bg-stone-400"
      ghostText="1"
    >
      <div className="relative h-32 w-64">
        {/* Left column — digital channels */}
        <div className="absolute left-0 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          {LEFT_LABELS.map((label) => (
            <div
              key={label}
              className="flex h-7 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[9px] uppercase tracking-widest text-white/30"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/[0.12]">
          <span className="text-xs font-bold text-white/50">1</span>
        </div>

        {/* Right column — human channels */}
        <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-2">
          {RIGHT_LABELS.map((label) => (
            <div
              key={label}
              className="flex h-7 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-[9px] uppercase tracking-widest text-white/30"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Connector lines */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 256 128"
          fill="none"
          aria-hidden="true"
        >
          {/* Left pills → center */}
          <line x1="96" y1="28" x2="108" y2="64" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          <line x1="96" y1="64" x2="108" y2="64" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          <line x1="96" y1="100" x2="108" y2="64" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          {/* Center → right pills */}
          <line x1="148" y1="64" x2="160" y2="28" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          <line x1="148" y1="64" x2="160" y2="64" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
          <line x1="148" y1="64" x2="160" y2="100" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
        </svg>
      </div>
    </ThumbnailWrapper>
  );
}
