import SectionContainer from "../shared/ui/SectionContainer";
import { privacyHeader } from "./privacyData";

function PrivacyHeroSection() {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative pb-8">
        <div className="absolute right-5 top-0 hidden h-[52px] w-12 rotate-180 xl:block xl:right-40">
          <div className="absolute left-0 top-0 h-5 w-[52px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-[34px] top-[14px] h-[14px] w-[14px] rotate-90 bg-[#8389FF]" />
          <div className="absolute right-0 top-0 h-[34px] w-[34px] rotate-90 bg-[#FFA155]" />
          <div className="absolute right-0 top-[14px] h-5 w-5 rotate-90 bg-[#FFD3AF]" />
        </div>

        <div className="h-6 w-6 -rotate-90 bg-[#FFD3AF]" />
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
          {privacyHeader.title}
        </h1>
        <p className="mt-2 text-base leading-6 text-[#232536]/60">
          {privacyHeader.updatedAt}
        </p>
      </SectionContainer>
    </section>
  );
}

export default PrivacyHeroSection;
