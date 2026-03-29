import React from "react";

export default function DividerLabel({
  label = "SOME OF MY LATEST WORK",
}: { label?: string }) {
  return (
    <div className="w-full mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-12 xl:px-16 my-2 md:my-4 mb-8 md:mb-12 divider-label-container">
      <div className="flex items-center justify-center gap-4">
        <div 
          className="flex-1 border-t divider-line transition-colors duration-300"
          style={{ borderColor: 'var(--scroll-text-color-lighter, rgba(255, 255, 255, 0.2))' }}
        />
        <span
          className="
            px-1 md:px-2 py-0.5
            text-xs md:text-sm tracking-widest
            uppercase font-semibold
            divider-label-text transition-colors duration-300
          "
          style={{ 
            letterSpacing: "0.14em",
            color: 'var(--scroll-text-color-light, rgba(255, 255, 255, 0.9))',
            backgroundColor: 'var(--scroll-bg-color, #000000)'
          }}
        >
          {label}
        </span>
        <div 
          className="flex-1 border-t divider-line transition-colors duration-300"
          style={{ borderColor: 'var(--scroll-text-color-lighter, rgba(255, 255, 255, 0.2))' }}
        />
      </div>
    </div>
  );
} 