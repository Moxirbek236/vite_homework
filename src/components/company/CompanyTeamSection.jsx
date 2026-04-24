import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import {
  companySocialIcons,
  companyTeamIntro,
  companyTeamMembers,
} from "./companyData";

function TeamCard({ member }) {
  return (
    <article className="group relative h-[320px] overflow-hidden bg-[#232536]">
      <img
        src={member.image}
        alt={member.name}
        className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${
          member.featured ? "grayscale" : ""
        }`}
        loading="lazy"
      />

      <div
        className={`absolute inset-0 flex flex-col justify-end p-8 text-white transition duration-300 ${
          member.featured
            ? "bg-[#232536]/90"
            : "bg-gradient-to-t from-[#232536]/85 via-[#232536]/10 to-transparent"
        }`}
      >
        <h3 className="text-2xl font-semibold leading-9">{member.name}</h3>
        <p className="mt-1 text-sm font-medium leading-5 text-white/70">{member.role}</p>
        <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-[2px] text-white">
          {companySocialIcons.map((icon) => (
            <a key={`${member.name}-${icon.alt}`} href="#" className="no-underline">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function CompanyTeamSection() {
  return (
    <section>
      <SectionContainer>
        <SectionIntro
          eyebrow={companyTeamIntro.eyebrow}
          title={companyTeamIntro.title}
          description={companyTeamIntro.description}
          className="max-w-[624px]"
          descriptionClassName="max-w-[505px] text-[#232536]/85"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {companyTeamMembers.map((member) => (
            <TeamCard key={`${member.name}-${member.role}`} member={member} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyTeamSection;
