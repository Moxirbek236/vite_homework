import SectionContainer from "../shared/ui/SectionContainer";
import { privacyContent } from "./privacyData";

function PrivacyContentSection() {
  return (
    <section className="pb-8 pt-6 md:pb-12 xl:pb-16">
      <SectionContainer className="pt-4">
        <div className="bg-[#ECF8F9] px-6 py-12 md:px-12 md:py-16 xl:px-[151px] xl:py-24">
          <div className="mx-auto max-w-[841px]">
            <h2 className="text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
              {privacyContent.title}
            </h2>

            <div className="mt-8 space-y-8 text-base leading-6 text-[#232536]">
              {privacyContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-semibold leading-9 text-[#232536] md:text-[24px] md:leading-[36px]">
              {privacyContent.disclosureTitle}
            </h3>

            <div className="mt-6 space-y-6 text-base leading-6 text-[#232536]">
              {privacyContent.disclosures.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-6 w-[296px] overflow-hidden">
          <span className="h-full w-[35px] bg-[#3A41DC]" />
          <span className="h-full w-[149px] bg-[#FFD3AF]" />
          <span className="h-full flex-1 bg-[#FFA155]" />
        </div>
      </SectionContainer>
    </section>
  );
}

export default PrivacyContentSection;
