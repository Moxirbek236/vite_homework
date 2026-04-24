import SectionContainer from "../shared/ui/SectionContainer";
import { companyLogos } from "./companyData";

function CompanyLogoBar() {
  return (
    <section>
      <SectionContainer className="py-0">
        <div className="grid gap-8 bg-[#FAFAFC] px-8 py-10 md:grid-cols-3 xl:grid-cols-5 xl:px-14">
          {companyLogos.map((logo) => (
            <div key={logo.alt} className="flex min-h-[66px] items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-[56px] w-auto object-contain opacity-85"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyLogoBar;
