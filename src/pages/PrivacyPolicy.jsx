import Navbar from "../components/Navbar";
import PrivacyHeroSection from "../components/privacy/PrivacyHeroSection";
import PrivacyContentSection from "../components/privacy/PrivacyContentSection";
import SiteFooter from "../components/shared/SiteFooter";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <PrivacyHeroSection />
      <PrivacyContentSection />
      <SiteFooter />
    </div>
  );
}

export default PrivacyPolicy;
