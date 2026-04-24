import SectionContainer from "../shared/ui/SectionContainer";
import TextLink from "../shared/ui/TextLink";
import { careerInnerHero } from "./careerInnerData";

function CareerInnerHeader() {
  return (
    <section className="overflow-hidden pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative">
        <div className="grid gap-8 xl:grid-cols-[1fr_515px] xl:items-start">
          <div className="max-w-[640px]">
            <p className="text-sm font-medium uppercase tracking-[3px] text-[#232536]/90">
              {careerInnerHero.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
              {careerInnerHero.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-6 text-[#232536]/80">
              {careerInnerHero.description}
            </p>
          </div>

          <div className="bg-[#FFE0C7] p-8 md:p-10 xl:min-h-[324px]">
            <h2 className="text-2xl font-semibold leading-9 text-[#232536]">Job Description</h2>
            <ul className="mt-6 space-y-3 text-base leading-6 text-[#232536]/80">
              {careerInnerHero.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TextLink className="mt-8" href="#apply-form">
              {careerInnerHero.cta}
            </TextLink>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1265px]">
          <div className="absolute inset-x-[7%] bottom-0 h-[195px] bg-[#232536]" />
          <img
            src={careerInnerHero.image}
            alt={careerInnerHero.imageAlt}
            className="relative z-10 h-[260px] w-full object-cover md:h-[552px]"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerInnerHeader;
