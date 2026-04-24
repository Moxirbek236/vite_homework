import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { companyHero } from "./companyData";

function CompanyHeader() {
  return (
    <section className="overflow-hidden pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative pb-0 xl:pb-24">
        <div className="absolute right-5 top-0 hidden h-[52px] w-12 rotate-180 xl:block xl:right-[160px]">
          <div className="absolute left-0 top-0 h-5 w-[52px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-[34px] top-[14px] h-[14px] w-[14px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-0 top-0 h-[34px] w-[34px] rotate-90 bg-[#FFA155]" />
          <div className="absolute right-0 top-[14px] h-5 w-5 rotate-90 bg-[#FFD3AF]" />
        </div>

        <div className="grid gap-12 xl:grid-cols-[1fr_1fr]">
          <div className="max-w-[719px]">
            <div className="mb-10 h-7 w-7 -rotate-90 bg-[#FFD3AF]" />
            <SectionIntro
              eyebrow={companyHero.eyebrow}
              title={companyHero.title}
              description={companyHero.description}
              as="h1"
              className="max-w-[719px]"
              titleClassName="max-w-[664px]"
              descriptionClassName="max-w-[719px] text-[#232536]/80"
            />
          </div>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-[422px_423px_407px] xl:gap-3">
          {companyHero.images.slice(0, 2).map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className="h-[320px] w-full object-cover md:h-[446px]"
            />
          ))}

          <div className="relative">
            <div className="absolute right-0 top-0 hidden h-[222px] w-[346px] xl:block">
              <div className="absolute inset-0 bg-[#444CFC]" />
              <div className="absolute right-0 top-0 h-full w-[296px] bg-[#FFA155]" />
              <div className="absolute right-0 top-0 h-full w-[215px] bg-[#FFD3AF]" />
            </div>
            <img
              src={companyHero.images[2].src}
              alt={companyHero.images[2].alt}
              className="relative h-[320px] w-full object-cover md:h-[446px]"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyHeader;
