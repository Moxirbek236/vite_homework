import Arrow from "./Arrow";
import CornerBlocks from "./CornerBlocks";

function PrimaryButton({ children, href = "#contact" }) {
  return (
    <a
      href={href}
      className="group relative inline-flex h-16 min-w-[182px] items-center justify-center gap-4 bg-[#444CFC] px-8 text-base font-medium leading-6 text-white no-underline"
    >
      <CornerBlocks className="left-0 top-0" />
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export default PrimaryButton;
