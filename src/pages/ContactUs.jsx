import Navbar from "../components/Navbar";
import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactMapSection from "../components/contact/ContactMapSection";
import SiteFooter from "../components/shared/SiteFooter";

function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <ContactHeroSection />
      <ContactMapSection />
      <SiteFooter />
    </div>
  );
}

export default ContactUs;
