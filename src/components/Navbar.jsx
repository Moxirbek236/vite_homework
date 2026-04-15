const links = [
  'Home',
  'Service',
  'Company',
  'Career',
  'Blog',
  'Contact us',
]

function Navbar() {
  return (
    <header className="absolute left-0 top-0 h-20 w-full border-b border-white/5 bg-[#232536]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center gap-10 px-5 md:px-10 lg:px-16 xl:px-[160px]">
        <a
          className="text-2xl font-semibold leading-none tracking-[0.2px] text-white no-underline"
          href="#"
        >
          {'{Finsweet'}
        </a>

        <nav
          className="ml-auto hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <a
              key={link}
              className={
                index === 0
                  ? "relative text-base font-medium leading-6 text-white no-underline before:absolute before:left-0 before:top-[-27px] before:w-full before:border-t-[3px] before:border-[#FFA155]"
                  : 'text-base font-medium leading-6 text-white/60 no-underline transition-opacity hover:text-white'
              }
              href="#"
            >
              {link}
            </a>
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
  )
}

export default Navbar
