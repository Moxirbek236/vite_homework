import Navbar from "../components/Navbar";
import CareerCultureSection from "../components/career/CareerCultureSection";
import CareerHeader from "../components/career/CareerHeader";
import CareerOpeningsSection from "../components/career/CareerOpeningsSection";
import NewsletterSection from "../components/shared/NewsletterSection";
import SiteFooter from "../components/shared/SiteFooter";

function Career() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <CareerHeader />
      <CareerOpeningsSection />
      <CareerCultureSection />
      <div id="apply">
        <NewsletterSection />
      </div>
      <SiteFooter />
    </div>
  );
}

export default Career;
