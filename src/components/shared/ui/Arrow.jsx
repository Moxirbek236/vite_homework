function Arrow({ className = "" }) {
  return (
    <span
      className={`text-sm leading-none transition-transform group-hover:translate-x-1 ${className}`}
    >
      -&gt;
    </span>
  );
}

export default Arrow;
