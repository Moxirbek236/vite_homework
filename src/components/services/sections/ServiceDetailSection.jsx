import { serviceDescription } from "../data";
import SectionContainer from "../../shared/ui/SectionContainer";

function ServiceCopy({ service }) {
  return (
    <div
      className={`max-w-[624px] self-center ${
        service.flipped ? "xl:order-1" : ""
      }`}
    >
      <h2 className="text-2xl font-semibold leading-9 text-[#232536] md:text-[24px]">
        {service.title}
      </h2>

      {service.headingFirst ? (
        <>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
            {service.heading}
          </h3>
          <p className="mt-4 text-base leading-6 text-[#5D5F6D]">
            {serviceDescription}
          </p>
        </>
      ) : (
        <>
          <p className="mt-4 text-base leading-6 text-[#5D5F6D]">
            {serviceDescription}
          </p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
            {service.heading}
          </h3>
        </>
      )}
    </div>
  );
}

function ServiceImage({ service }) {
  return (
    <div
      className={`h-[320px] w-full overflow-hidden md:h-[445px] xl:w-[624px] ${
        service.flipped ? "xl:order-2" : ""
      }`}
    >
      <img
        src={service.image}
        alt={service.alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function ServiceDetailSection({ service }) {
  return (
    <section id={service.id} className={`w-full ${service.background}`}>
      <SectionContainer className="grid gap-10 xl:grid-cols-2 xl:gap-20">
        <ServiceImage service={service} />
        <ServiceCopy service={service} />
      </SectionContainer>
    </section>
  );
}

export default ServiceDetailSection;
