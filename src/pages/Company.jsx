import Navbar from "../components/Navbar";
import CompanyExpertiseSection from "../components/company/CompanyExpertiseSection";
import CompanyHeader from "../components/company/CompanyHeader";
import CompanyLogoBar from "../components/company/CompanyLogoBar";
import CompanyStorySection from "../components/company/CompanyStorySection";
import CompanyTeamSection from "../components/company/CompanyTeamSection";
import CompanyVisionSection from "../components/company/CompanyVisionSection";
import NewsletterSection from "../components/shared/NewsletterSection";
import SiteFooter from "../components/shared/SiteFooter";

function Company() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <CompanyHeader />
      <CompanyStorySection />
      <CompanyLogoBar />
      <CompanyExpertiseSection />
      <CompanyVisionSection />
      <CompanyTeamSection />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}

export default Company;
