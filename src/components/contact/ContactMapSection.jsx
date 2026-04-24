import SectionContainer from "../shared/ui/SectionContainer";
import { contactMap } from "./contactData";

function ContactMapSection() {
  return (
    <section>
      <SectionContainer className="pt-6">
        <div className="overflow-hidden">
          <iframe
            title={contactMap.title}
            src={contactMap.embedUrl}
            className="h-[320px] w-full border-0 md:h-[409px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </SectionContainer>
    </section>
  );
}

export default ContactMapSection;
