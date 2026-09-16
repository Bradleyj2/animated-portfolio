import React from "react";

type ThumbnailWrapperProps = {
  children: React.ReactNode;
  accentColor: string;
  bgColor: string;
  ghostText?: string;
};

/** Map Tailwind bg-* used by thumbnails → hex (survives homepage !important wipes) */
const BG_HEX: Record<string, string> = {
  "bg-neutral-900": "#171717",
  "bg-slate-900": "#0f172a",
  "bg-teal-950": "#042f2e",
  "bg-stone-900": "#1c1917",
};

const ACCENT_HEX: Record<string, string> = {
  "bg-amber-400": "#fbbf24",
  "bg-amber-500": "#f59e0b",
  "bg-violet-400": "#a78bfa",
  "bg-violet-500": "#8b5cf6",
  "bg-teal-400": "#2dd4bf",
  "bg-teal-500": "#14b8a6",
  "bg-sky-400": "#38bdf8",
  "bg-rose-400": "#fb7185",
  "bg-emerald-400": "#34d399",
  "bg-stone-400": "#a8a29e",
};

export default function ThumbnailWrapper({
  children,
  accentColor,
  bgColor,
  ghostText,
}: ThumbnailWrapperProps) {
  const bg = BG_HEX[bgColor] ?? "#171717";
  const accent = ACCENT_HEX[accentColor] ?? "#fbbf24";

  return (
    <div
      className="custom-project-thumbnail relative h-full w-full overflow-hidden"
      data-thumb-root
      style={
        {
          ["--thumb-bg" as string]: bg,
          backgroundColor: bg,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0"
        data-thumb-bg
        style={{ backgroundColor: bg }}
        aria-hidden="true"
      />

      {ghostText ? (
        <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center">
          <span className="text-[180px] font-black leading-none text-white/[0.04]">
            {ghostText}
          </span>
        </div>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>

      <div
        className="absolute left-0 right-0 top-0 z-20 h-[3px]"
        data-thumb-accent
        style={
          {
            ["--thumb-accent" as string]: accent,
            backgroundColor: accent,
          } as React.CSSProperties
        }
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-20"
        data-thumb-fade
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(255,255,255,0.08), transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
