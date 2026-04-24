import Arrow from "../shared/ui/Arrow";
import SectionContainer from "../shared/ui/SectionContainer";
import {
  contactCard,
  contactFormFields,
  contactIntro,
  contactMessage,
  contactSocialIcons,
} from "./contactData";

function ContactInfoBlock({ title, children }) {
  return (
    <div>
      <p className="text-sm font-medium leading-5 text-white/60">{title}</p>
      <div className="mt-3 border-t border-white/10 pt-3">{children}</div>
    </div>
  );
}

function ContactHeroSection() {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer>
        <div className="grid gap-12 xl:grid-cols-[672px_1fr] xl:items-start xl:justify-between">
          <div>
            <div className="mb-6 h-6 w-6 -rotate-90 bg-[#FFD3AF]" />
            <p className="text-sm font-medium uppercase tracking-[3px] text-[#232536]/90">
              {contactIntro.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[672px] text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
              {contactIntro.title} <span className="inline-block">??</span>
            </h1>
            <p className="mt-6 max-w-[619px] text-base leading-6 text-[#232536]/85">
              {contactIntro.description}
            </p>

            <form className="mt-16 max-w-[405px] space-y-6">
              {contactFormFields.map((field) => (
                <label key={field.name} className="block">
                  <span className="text-sm font-medium leading-5 text-[#232536]/60">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="mt-2 h-9 w-full border-0 border-b border-[#232536]/20 bg-transparent px-0 text-xl leading-8 text-[#232536] outline-none placeholder:text-[#232536]/85"
                  />
                </label>
              ))}

              <label className="block">
                <span className="text-sm font-medium leading-5 text-[#232536]/60">{contactMessage.label}</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder={contactMessage.placeholder}
                  className="mt-2 w-full resize-none border-0 border-b border-[#232536]/20 bg-transparent px-0 py-0 text-xl leading-8 text-[#232536] outline-none placeholder:text-[#232536]/37"
                />
              </label>

              <button
                type="submit"
                className="group relative inline-flex h-16 items-center gap-4 bg-[#444CFC] px-7 text-base font-medium text-white"
              >
                <span className="absolute left-0 top-0 flex h-[27px] w-[29px] overflow-hidden">
                  <span className="h-full w-3 bg-[#666DFF]" />
                  <span className="h-full w-[11px] bg-[#FFA155]" />
                  <span className="h-full flex-1 bg-[#FFD3AF]" />
                </span>
                <span>Send Message</span>
                <Arrow />
              </button>
            </form>
          </div>

          <div className="relative bg-[#666DFF] px-10 py-12 text-white xl:mt-6 xl:w-[512px] xl:justify-self-end">
            <div className="absolute right-0 top-0 flex h-[23px] w-[115px] overflow-hidden">
              <span className="h-full w-[23px] bg-[#FFD3AF]" />
              <span className="h-full w-[23px] bg-[#8389FF]" />
              <span className="h-full flex-1 bg-[#FFA155]" />
            </div>
            <div className="absolute -left-[138px] bottom-9 hidden h-[216px] w-[184px] rotate-90 overflow-hidden xl:block">
              <span className="h-full w-[216px] bg-[#3A41DC]" />
              <span className="h-full w-[185px] bg-[#FFA155]" />
              <span className="h-full flex-1 bg-[#FFD3AF]" />
            </div>

            <div className="space-y-8">
              <ContactInfoBlock title={contactCard.location.title}>
                <p className="text-[18px] font-medium leading-7 text-white">
                  {contactCard.location.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </ContactInfoBlock>

              <ContactInfoBlock title={contactCard.workingHours.title}>
                <p className="text-[18px] font-medium leading-7 text-white">
                  {contactCard.workingHours.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="mt-1 text-sm font-medium leading-5 text-white/60">
                  {contactCard.workingHours.note}
                </p>
              </ContactInfoBlock>

              <ContactInfoBlock title={contactCard.contact.title}>
                <a href={`tel:${contactCard.contact.phone}`} className="block text-[18px] font-medium leading-7 text-white no-underline">
                  {contactCard.contact.phone}
                </a>
                <a href={`mailto:${contactCard.contact.email}`} className="mt-1 block text-sm font-medium leading-5 text-white/60 no-underline">
                  {contactCard.contact.email}
                </a>
              </ContactInfoBlock>

              <div className="flex items-center gap-8 pt-2 opacity-90">
                {contactSocialIcons.map((icon) => (
                  <a key={icon.key} href={icon.href} className="no-underline">
                    <img src={icon.src} alt={icon.alt} className="h-4 w-4 brightness-0 invert" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default ContactHeroSection;
