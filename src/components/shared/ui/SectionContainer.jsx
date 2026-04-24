const baseClassName =
  "mx-auto w-full max-w-[1600px] px-5 py-16 md:px-10 lg:px-16 xl:px-[160px] xl:py-24";

function SectionContainer({ children, className = "" }) {
  return <div className={`${baseClassName} ${className}`}>{children}</div>;
}

export default SectionContainer;
