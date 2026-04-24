import TextLink from "./ui/TextLink";

const cardVariant = {
  row: {
    article: "flex h-[140px] items-start gap-4 bg-white px-8 py-8",
    icon: "flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-[#FFE6D2]/50",
    title: "text-base font-semibold leading-7 text-black",
    description: "mt-2 max-w-[303px] text-sm font-medium leading-5 text-[#5D5F6D]",
  },
  stacked: {
    article: "h-[335px] bg-white px-12 py-12",
    icon: "flex h-[47px] w-[47px] items-center justify-center rounded-none bg-[#FFA155]/10",
    title: "mt-4 text-base font-semibold leading-7 text-black",
    description: "mt-2 max-w-[326px] text-base leading-6 text-[#5D5F6D]",
  },
};

function IconCard({
  alt,
  description,
  featured = false,
  href,
  icon,
  linkLabel = "Read more",
  title,
  variant = "stacked",
}) {
  const styles = cardVariant[variant];

  return (
    <article
      className={`${styles.article} ${
        featured ? "shadow-[0_60px_68px_-30px_rgba(255,161,85,0.35)]" : ""
      }`}
    >
      <div className={styles.icon}>
        <img src={icon} alt={alt} />
      </div>

      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {href && (
          <TextLink href={href} className="mt-6">
            {linkLabel}
          </TextLink>
        )}
      </div>
    </article>
  );
}

export default IconCard;
