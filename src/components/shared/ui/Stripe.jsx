function Stripe({ position = "bottom" }) {
  const placement = position === "top" ? "top-0" : "bottom-0";

  return (
    <div className={`absolute left-0 ${placement} h-2 w-full`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-2 w-[22%] bg-[#FFA155]" />
      <span className="absolute left-[22%] top-0 h-2 w-[55%] bg-[#FFD3AF]" />
      <span className="absolute right-0 top-0 h-2 w-[23%] bg-[#444CFC]" />
    </div>
  );
}

export default Stripe;
