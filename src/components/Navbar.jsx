import { Link, NavLink } from "react-router-dom";

const links = ["Home", "Service", "Company", "Career", "Blog", "Contact us"];

function Navbar() {
  return (
    <header className="absolute left-0 top-0 h-20 w-full border-b border-white/5 bg-[#232536]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center gap-10 px-5 md:px-10 lg:px-16 xl:px-[160px]">
        <Link
          className="text-2xl font-semibold leading-none tracking-[0.2px] text-white no-underline"
          to="/"
        >
          {"{Finsweet"}
        </Link>

        <nav
          className="ml-auto hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <NavLink  
              key={index}
              to={
                link === "Home"
                  ? "/"
                  : `/${link.toLowerCase().replace(/\s+/g, "-")}`
              }
              className={({ isActive }) =>
                `text-base font-medium leading-6 no-underline transition-all duration-400 ${
                  isActive
                    ? "text-amber-400 border-t-2 border-amber-400 pt-2 mb-2"
                    : "text-white/70 hover:text-amber-400"
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </nav>
        <a
          className="ml-auto inline-flex items-center gap-[10px] text-base font-medium leading-6 text-[#FFD3AF] no-underline md:ml-0"
          href="#"
        >
          Clone project
          <span
            className="inline-flex h-[18px] w-[18px] items-center justify-center text-[11px] leading-none text-white"
            aria-hidden="true"
          >
            {"-->"}
          </span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
