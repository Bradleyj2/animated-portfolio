import ThumbnailWrapper from "./ThumbnailWrapper";

const AI_MARKETING_SCREENSHOT = "/ai-marketing/fig-01.png";

export default function AiMarketingThumbnail() {
  return (
    <ThumbnailWrapper
      bgColor="bg-slate-900"
      accentColor="bg-violet-500"
      ghostText="AI"
    >
      <div className="relative h-full w-full">
        <img
          src={AI_MARKETING_SCREENSHOT}
          alt="AI marketing control center dashboard"
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/50" />
      </div>
    </ThumbnailWrapper>
  );
}
