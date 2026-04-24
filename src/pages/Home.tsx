import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/home/About";
import Expertise from "../components/home/Expertise";
import LatestBlogsSection from "../components/home/LatestBlogsSection";
import ReviewsSection from "../components/home/ReviewsSection";
import Services from "../components/home/Services";
import NewsletterSection from "../components/shared/NewsletterSection";
import ProcessSection from "../components/shared/ProcessSection";
import SiteFooter from "../components/shared/SiteFooter";

function Home() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      <Navbar />
      <Header />
      <About />
      <Expertise />
      <Services />
      <ProcessSection />
      <ReviewsSection />
      <LatestBlogsSection />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}

export default Home;
