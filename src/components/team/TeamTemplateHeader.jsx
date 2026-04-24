import SectionContainer from "../shared/ui/SectionContainer";
import { teamSocialIcons } from "./teamData";

function TeamTemplateHeader({ member }) {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="pb-12">
        <div className="mx-auto flex max-w-[505px] flex-col items-center text-center">
          <img
            src={member.image}
            alt={member.name}
            className="h-[220px] w-[220px] rounded-full object-cover md:h-[320px] md:w-[320px]"
            loading="lazy"
          />

          <h1 className="mt-10 text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[54px]">
            {member.name}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[1px] text-[#232536]/70">
            {member.role}
          </p>
          <p className="mt-8 text-base leading-6 text-[#232536]/85">{member.bio}</p>

          <div className="mt-8 flex items-center gap-8 opacity-80">
            {teamSocialIcons.map((icon) => (
              <a key={`${member.slug}-${icon.key}`} href={icon.href} className="no-underline">
                <img src={icon.src} alt={icon.alt} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TeamTemplateHeader;
