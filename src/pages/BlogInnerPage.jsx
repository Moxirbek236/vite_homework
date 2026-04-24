import BlogInnerContentSection from "../components/blog/BlogInnerContentSection";
import BlogInnerHeader from "../components/blog/BlogInnerHeader";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/shared/NewsletterSection";
import SiteFooter from "../components/shared/SiteFooter";

function BlogInnerPage() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <BlogInnerHeader />
      <BlogInnerContentSection />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}

export default BlogInnerPage;
