import SectionContainer from "../shared/ui/SectionContainer";
import { companyStory, companyStoryStats } from "./companyData";

function StatCard({ value, label }) {
  return (
    <div>
      <p className="text-[32px] font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
        {value}
      </p>
      <div className="relative mt-2 h-[6px] w-[72px] bg-[#444CFC]">
        <span className="absolute left-[10px] top-0 h-[6px] w-[62px] bg-[#FFA155]" />
        <span className="absolute left-[10px] top-0 h-[6px] w-[45px] bg-[#FFD3AF]" />
      </div>
      <p className="mt-3 text-base font-semibold leading-7 text-[#232536]/90">{label}</p>
    </div>
  );
}

function CompanyStorySection() {
  return (
    <section>
      <SectionContainer className="grid gap-12 xl:grid-cols-[550px_624px] xl:items-start xl:justify-between">
        <div>
          <div className="mb-8 h-4 w-4 bg-[#666DFF]" />
          <p className="text-base font-semibold leading-7 text-[#232536]">{companyStory.eyebrow}</p>
          <h2 className="mt-4 max-w-[549px] text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
            {companyStory.title}
          </h2>
          <p className="mt-6 max-w-[550px] text-base leading-6 text-[#232536]/85">
            {companyStory.description}
          </p>
        </div>

        <div className="bg-[#FFD3AF]/60 p-8 md:p-12">
          <div className="grid grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12">
            {companyStoryStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyStorySection;
