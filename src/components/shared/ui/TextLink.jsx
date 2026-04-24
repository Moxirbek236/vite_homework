import Arrow from "./Arrow";

function TextLink({ children, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 text-base font-medium leading-6 text-[#444CFC] no-underline ${className}`}
    >
      <span>{children}</span>
      <Arrow className="text-black" />
    </a>
  );
}

export default TextLink;
