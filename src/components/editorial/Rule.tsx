export default function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-white/12 ${className}`} />;
}