import { serviceDetails } from "./data";
import NewsletterSection from "../shared/NewsletterSection";
import ProcessSection from "../shared/ProcessSection";
import ServiceDetailSection from "./sections/ServiceDetailSection";
import SiteFooter from "../shared/SiteFooter";
import ServicesHero from "./sections/ServicesHero";

function OurService() {
  return (
    <main className="w-full bg-white text-[#232536]">
      <ServicesHero />
      <ProcessSection />

      {serviceDetails.map((service) => (
        <ServiceDetailSection key={service.id} service={service} />
      ))}

      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}

export default OurService;
