function VerticalStripe({
  className = "",
  darkColor = "bg-[#444CFC]",
  widthClassName = "w-6",
}) {
  return (
    <div className={`relative h-full ${widthClassName} ${className}`} aria-hidden="true">
      <span className={`absolute left-0 top-0 h-[30%] ${widthClassName} bg-[#FFA155]`} />
      <span
        className={`absolute left-0 top-[30%] h-[45%] ${widthClassName} bg-[#FFD3AF]`}
      />
      <span
        className={`absolute bottom-0 left-0 h-[25%] ${widthClassName} ${darkColor}`}
      />
    </div>
  );
}

export default VerticalStripe;
