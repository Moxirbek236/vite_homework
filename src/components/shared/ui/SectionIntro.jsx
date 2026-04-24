function SectionIntro({
  eyebrow,
  title,
  description,
  as = "h2",
  className = "",
  descriptionClassName = "",
  eyebrowClassName = "",
  titleClassName = "",
}) {
  const headingClassName = `mt-4 text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px] ${titleClassName}`;

  return (
    <div className={className}>
      {eyebrow && (
        <p
          className={`text-sm font-medium uppercase leading-5 tracking-[3px] text-black/90 ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
      )}

      {as === "h1" ? (
        <h1 className={headingClassName}>{title}</h1>
      ) : (
        <h2 className={headingClassName}>{title}</h2>
      )}

      {description && (
        <p
          className={`mt-4 max-w-[642px] text-base leading-6 text-[#5D5F6D] ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionIntro;
