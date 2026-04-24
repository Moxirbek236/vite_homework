import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { careerCultureIntro, careerCultureItems } from "./careerData";

function CultureCard({ item }) {
  return (
    <article className="bg-white p-8 shadow-[0_16px_32px_rgba(35,37,54,0.05)]">
      <div className="flex h-10 w-10 items-center justify-center bg-[#FFD3AF]/50 text-[11px] font-semibold tracking-[0.5px]">
        {item.icon}
      </div>
      <h3 className="mt-8 text-xl font-semibold leading-7 text-[#232536]">{item.title}</h3>
      <p className="mt-2 text-sm leading-5 text-[#232536]/60">{item.description}</p>
    </article>
  );
}

function CareerCultureSection() {
  return (
    <section className="mt-16 bg-[#FAFAFC]">
      <SectionContainer>
        <SectionIntro
          eyebrow={careerCultureIntro.eyebrow}
          title={careerCultureIntro.title}
          description={careerCultureIntro.description}
          className="max-w-[624px]"
          titleClassName="text-3xl md:text-[36px] md:leading-[54px]"
          descriptionClassName="max-w-[622px] text-[#232536]/60"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {careerCultureItems.map((item) => (
            <CultureCard key={item.title} item={item} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerCultureSection;
