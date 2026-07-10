export default function DropCap({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl leading-8 md:leading-9">
      <span className="float-left mr-3 -mt-1 font-serif text-5xl md:text-6xl leading-none text-white">
        {String(children).slice(0,1)}
      </span>
      {String(children).slice(1)}
    </p>
  );
}