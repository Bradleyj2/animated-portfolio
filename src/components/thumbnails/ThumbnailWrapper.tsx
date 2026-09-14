import React from "react";

type ThumbnailWrapperProps = {
  children: React.ReactNode;
  accentColor: string;
  bgColor: string;
  ghostText?: string;
};

export default function ThumbnailWrapper({
  children,
  accentColor,
  bgColor,
  ghostText,
}: ThumbnailWrapperProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className={`absolute inset-0 ${bgColor}`} />

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
        className={`absolute left-0 right-0 top-0 z-20 h-[3px] ${accentColor}`}
      />

      <div className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-white/[0.08] to-transparent" />
    </div>
  );
}
