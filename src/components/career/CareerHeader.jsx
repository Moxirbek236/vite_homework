import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { careerHero } from "./careerData";

function CareerHeader() {
  return (
    <section className="overflow-hidden pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative text-center">
        <div className="absolute right-5 top-0 hidden h-[52px] w-12 rotate-180 xl:block xl:right-40">
          <div className="absolute left-0 top-0 h-5 w-[52px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-[34px] top-[14px] h-[14px] w-[14px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-0 top-0 h-[34px] w-[34px] rotate-90 bg-[#FFA155]" />
          <div className="absolute right-0 top-[14px] h-5 w-5 rotate-90 bg-[#FFD3AF]" />
        </div>

        <SectionIntro
          eyebrow={careerHero.eyebrow}
          title={careerHero.title}
          description={careerHero.description}
          as="h1"
          className="mx-auto max-w-[624px]"
          titleClassName="text-center"
          descriptionClassName="text-center text-[#232536]/85"
        />

        <div className="relative mx-auto mt-16 max-w-[1265px]">
          <img
            src="/careers.jpg"
            alt={careerHero.imageAlt}
            className="relative left-1/2 mt-[200px] h-[194.94px] w-[1099.78px] -translate-x-1/2 object-cover object-center"
          />
        </div>

        <a
          href="#open-positions"
          className="mt-16 inline-flex flex-col items-center gap-3 text-center text-[#232536] no-underline"
        >
          <span className="text-lg font-medium leading-7">
            {careerHero.cta}
          </span>
          <span className="text-2xl leading-6">👇</span>
        </a>
      </SectionContainer>
    </section>
  );
}

export default CareerHeader;
