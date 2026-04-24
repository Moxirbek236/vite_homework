import TextLink from "../shared/ui/TextLink";
import SectionContainer from "../shared/ui/SectionContainer";
import { careerInnerHero } from "./careerInnerData";

function CareerInnerHeader() {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="pb-8 xl:px-[160px]">
        <div className="mx-auto grid max-w-[1080px] gap-10 xl:grid-cols-[1fr_480px] xl:items-start">
          <div className="max-w-[430px] pt-3">
            <p className="text-[14px] font-medium uppercase tracking-[3px] text-[#232536]/80">
              {careerInnerHero.eyebrow}
            </p>

            <h1 className="mt-4 text-[40px] font-semibold leading-[1.2] text-[#232536] md:text-[48px] md:leading-[58px]">
              {careerInnerHero.title}
            </h1>

            <p className="mt-4 max-w-[360px] text-sm leading-5 text-[#232536]/75 md:text-base md:leading-6">
              {careerInnerHero.description}
            </p>

            <TextLink className="mt-8" href="#apply-form">
              {careerInnerHero.cta}
            </TextLink>
          </div>

          <div className="relative bg-[#FFE0C7] px-8 py-10 md:px-10">
            <div className="absolute right-0 top-0 flex">
              <span className="h-3 w-3 bg-[#444CFC]" />
              <span className="h-3 w-3 bg-[#FFA155]" />
            </div>
            <div className="absolute right-3 top-3 flex">
              <span className="h-3 w-3 bg-[#FFA155]" />
              <span className="h-3 w-3 bg-[#FFD3AF]" />
            </div>

            <h2 className="text-[28px] font-semibold leading-9 text-[#232536]">
              Job Description
            </h2>

            <ul className="mt-6 space-y-4 text-sm font-medium leading-5 text-[#232536]/85">
              {careerInnerHero.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerInnerHeader;
