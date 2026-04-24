import { serviceLinks } from "../../shared/data";
import Arrow from "../../shared/ui/Arrow";
import PrimaryButton from "../../shared/ui/PrimaryButton";
import SectionIntro from "../../shared/ui/SectionIntro";

function ServicesHero() {
  return (
    <section className="w-full bg-[#FFE6D2] pt-[176px]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 pb-16 md:px-10 lg:px-16 xl:grid-cols-[624px_1fr] xl:gap-[190px] xl:px-[160px] xl:pb-24">
        <div>
          <SectionIntro
            as="h1"
            eyebrow="Our Mission & Vision"
            title="We want to get local identification in every corner of the world"
            description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."
            titleClassName="!mt-6 max-w-[624px]"
            descriptionClassName="!mt-6 max-w-[624px]"
          />
          <div className="mt-10">
            <PrimaryButton>Request quote</PrimaryButton>
          </div>
        </div>

        <div className="flex flex-col gap-6 self-center xl:pt-10">
          {serviceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center justify-between gap-6 text-2xl font-semibold leading-9 text-black no-underline"
            >
              <span>{link.label}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
