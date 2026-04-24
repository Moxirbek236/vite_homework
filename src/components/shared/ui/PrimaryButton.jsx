import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import CornerBlocks from "./CornerBlocks";

function PrimaryButton({ children, href = "#contact" }) {
  const classes =
    "group relative inline-flex h-16 min-w-[182px] items-center justify-center gap-4 bg-[#444CFC] px-8 text-base font-medium leading-6 text-white no-underline";
  const content = (
    <>
      <CornerBlocks className="left-0 top-0" />
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
    >
      {content}
    </a>
  );
}

export default PrimaryButton;
