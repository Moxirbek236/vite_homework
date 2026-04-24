import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { companyExpertiseIntro, companyExpertiseItems } from "./companyData";

function ExpertiseCard({ item, highlighted = false }) {
  return (
    <article className="relative bg-white p-8 shadow-[0_24px_54px_rgba(35,37,54,0.08)]">
      {highlighted && (
        <div className="absolute left-0 top-0 flex h-2 w-full overflow-hidden">
          <span className="h-full w-[46%] bg-[#444CFC]" />
          <span className="h-full w-[28%] bg-[#FFA155]" />
          <span className="h-full flex-1 bg-[#FFD3AF]" />
        </div>
      )}

      <div className="flex items-start gap-4 pt-2">
        <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-[#FFE6D2]/60">
          <img src={item.icon} alt={item.alt} className="h-6 w-6 object-contain" loading="lazy" />
        </div>
        <div>
          <h3 className="text-xl font-semibold leading-7 text-black">{item.title}</h3>
          <p className="mt-2 max-w-[303px] text-sm font-medium leading-5 text-[#5D5F6D]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function CompanyExpertiseSection() {
  return (
    <section className="mt-16 bg-[#ECF8F9]">
      <SectionContainer className="grid gap-12 xl:grid-cols-[624px_515px] xl:items-center xl:justify-between">
        <SectionIntro
          eyebrow={companyExpertiseIntro.eyebrow}
          title={companyExpertiseIntro.title}
          description={companyExpertiseIntro.description}
          className="max-w-[624px]"
        />

        <div className="relative space-y-3">
          <div className="absolute left-0 top-0 h-4 w-4 bg-[#444CFC]" />
          {companyExpertiseItems.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              item={item}
              highlighted={index === companyExpertiseItems.length - 1}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyExpertiseSection;
