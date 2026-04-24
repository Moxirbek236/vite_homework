import Navbar from "../components/Navbar";
import CareerApplicationSection from "../components/career/CareerApplicationSection";
import CareerInnerDetailsSection from "../components/career/CareerInnerDetailsSection";
import CareerInnerHeader from "../components/career/CareerInnerHeader";
import NewsletterSection from "../components/shared/NewsletterSection";
import SiteFooter from "../components/shared/SiteFooter";

function CareerInnerPage() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <CareerInnerHeader />
      <CareerInnerDetailsSection />
      <CareerApplicationSection />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}

export default CareerInnerPage;
