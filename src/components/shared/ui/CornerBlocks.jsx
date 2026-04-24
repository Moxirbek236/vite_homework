function CornerBlocks({ className = "" }) {
  return (
    <span className={`absolute h-[27px] w-[29px] ${className}`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-[11px] w-[29px] bg-[#666DFF]" />
      <span className="absolute bottom-0 left-0 h-2 w-2 bg-[#666DFF]" />
      <span className="absolute left-0 top-0 h-[19px] w-[19px] bg-[#FFA155]" />
      <span className="absolute left-0 top-0 h-[11px] w-[11px] bg-[#FFD3AF]" />
    </span>
  );
}

export default CornerBlocks;
