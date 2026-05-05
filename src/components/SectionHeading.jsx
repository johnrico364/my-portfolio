function SectionHeading({ title }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="hidden h-[2px] flex-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent md:block" />
    </div>
  );
}

export default SectionHeading;

