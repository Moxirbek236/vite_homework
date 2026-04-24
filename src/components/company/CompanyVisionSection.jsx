import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { companyVision } from "./companyData";

function CompanyVisionSection() {
  return (
    <section>
      <SectionContainer>
        <SectionIntro
          eyebrow={companyVision.eyebrow}
          title={companyVision.title}
          description={companyVision.description}
          className="max-w-[701px]"
          titleClassName="text-3xl md:text-[36px] md:leading-[54px]"
          descriptionClassName="max-w-[622px] text-[#232536]/60"
        />

        <div className="mt-12 overflow-hidden">
          <img
            src={companyVision.image}
            alt={companyVision.imageAlt}
            className="h-[260px] w-full object-cover md:h-[369px]"
            loading="lazy"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyVisionSection;
