import SectionContainer from "../shared/ui/SectionContainer";
import TextLink from "../shared/ui/TextLink";
import { careerInnerSections } from "./careerInnerData";

function CareerInnerDetailsSection() {
  return (
    <section>
      <SectionContainer className="xl:px-[272px]">
        <div className="border-b border-[#E6E7EC] pb-6">
          <div className="flex flex-wrap gap-8 text-lg font-semibold leading-7 text-[#232536]">
            {careerInnerSections.map((section, index) => (
              <button
                key={section.title}
                type="button"
                className={index === 0 ? "text-[#232536]" : "text-[#232536]/50"}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {careerInnerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold leading-9 text-[#232536]">{section.title}</h2>
              <ul className="mt-6 space-y-4 text-base leading-6 text-[#5D5F6D]">
                {section.items.map((item) => (
                  <li key={item} className="relative pl-6">
                    <span className="absolute left-0 top-[10px] h-2 w-2 rounded-full bg-[#232536]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <TextLink className="mt-12" href="#apply-form">
          Apply Now
        </TextLink>
      </SectionContainer>
    </section>
  );
}

export default CareerInnerDetailsSection;
