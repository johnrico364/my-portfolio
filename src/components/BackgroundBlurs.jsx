function BackgroundBlurs() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-80 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
    </div>
  );
}

export default BackgroundBlurs;

