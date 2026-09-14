import ThumbnailWrapper from "./ThumbnailWrapper";

function Connector() {
  return (
    <div className="relative flex h-px w-8 items-center bg-white/20">
      <span className="absolute -right-1 text-xs leading-none text-white/20">
        ›
      </span>
    </div>
  );
}

export default function ServiceBlueprintThumbnail() {
  return (
    <ThumbnailWrapper
      bgColor="bg-slate-900"
      accentColor="bg-amber-500"
      ghostText="93%"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-0">
          <div className="flex h-10 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08]">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Input
            </span>
          </div>

          <Connector />

          <div className="flex h-12 w-24 items-center justify-center rounded-lg border border-white/30 bg-white/[0.12] shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <span className="text-[10px] uppercase tracking-widest text-white/60">
              System
            </span>
          </div>

          <Connector />

          <div className="flex h-10 w-20 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08]">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Output
            </span>
          </div>
        </div>

        <div className="mt-3 h-6 w-px bg-white/10" />

        <div className="flex items-center justify-center gap-3 self-end pr-6">
          <div className="flex h-8 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]" />
          <div className="flex h-8 w-14 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]" />
        </div>
      </div>
    </ThumbnailWrapper>
  );
}
