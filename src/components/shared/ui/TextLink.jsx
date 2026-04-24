import { Link } from "react-router-dom";
import Arrow from "./Arrow";

function TextLink({ children, className = "", href = "#" }) {
  const classes = `group inline-flex items-center gap-3 text-base font-medium leading-6 text-[#444CFC] no-underline ${className}`;
  const isInternalRoute = href.startsWith("/");

  if (isInternalRoute) {
    return (
      <Link to={href} className={classes}>
        <span>{children}</span>
        <Arrow className="text-black" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
    >
      <span>{children}</span>
      <Arrow className="text-black" />
    </a>
  );
}

export default TextLink;
