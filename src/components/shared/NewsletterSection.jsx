import CornerBlocks from "./ui/CornerBlocks";
import SectionContainer from "./ui/SectionContainer";
import SectionIntro from "./ui/SectionIntro";
import VerticalStripe from "./ui/VerticalStripe";

function NewsletterSection() {
  return (
    <section className="w-full bg-white">
      <SectionContainer>
        <div className="relative grid gap-8 bg-[#666DFF] px-8 py-12 text-white md:px-12 xl:grid-cols-[488px_1fr] xl:items-center xl:px-24 xl:py-24">
          <CornerBlocks className="left-0 top-0 scale-[1.35]" />

          <SectionIntro
            eyebrow="Newsletter"
            title="Subscribe to our newsletter and get latest updates"
            className="max-w-[488px]"
            eyebrowClassName="text-white"
            titleClassName="!mt-3 !text-3xl text-white md:!text-[36px] md:!leading-[54px]"
          />

          <form className="flex w-full flex-col gap-4 sm:flex-row xl:justify-end">
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email"
              className="h-16 w-full border-0 bg-white px-8 text-base text-[#232536] outline-none placeholder:text-[#232536]/40 sm:max-w-[454px]"
            />
            <button
              type="submit"
              className="h-16 bg-[#232536] px-8 text-base font-medium text-white"
            >
              Subscribe
            </button>
          </form>

          <VerticalStripe
            className="absolute right-0 top-0 hidden md:block"
            darkColor="bg-[#232536]"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

export default NewsletterSection;
