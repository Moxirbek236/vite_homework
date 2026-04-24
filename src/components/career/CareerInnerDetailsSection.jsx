import { useState } from "react";
import SectionContainer from "../shared/ui/SectionContainer";
import TextLink from "../shared/ui/TextLink";
import { careerInnerSections } from "./careerInnerData";

function CareerInnerDetailsSection() {
  const [activeTab, setActiveTab] = useState(careerInnerSections[0].title);
  const activeSection =
    careerInnerSections.find((section) => section.title === activeTab) ??
    careerInnerSections[0];

  return (
    <section>
      <SectionContainer className="pt-8 xl:px-[160px]">
        <div className="mx-auto max-w-[1040px] bg-[#ECF8F9]/75">
          <div className="border-b border-[#D6E7EB] px-6 pt-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {careerInnerSections.map((section) => {
                const isActive = section.title === activeTab;

                return (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => setActiveTab(section.title)}
                    className={`border-b-2 pb-5 text-lg font-semibold leading-7 transition ${
                      isActive
                        ? "border-[#444CFC] text-[#444CFC]"
                        : "border-transparent text-[#232536]"
                    }`}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-6 py-10 md:px-12 md:py-12">
            <ul className="space-y-5 text-sm leading-6 text-[#5D5F6D] md:text-base">
              {activeSection.items.map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 top-[10px] h-[6px] w-[6px] rounded-full bg-[#232536]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-[1040px]">
          <TextLink className="mt-10" href="#apply-form">
            Apply Now
          </TextLink>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerInnerDetailsSection;
