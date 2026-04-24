import BlogAllPostsSection from "../components/blog/BlogAllPostsSection";
import BlogHeader from "../components/blog/BlogHeader";
import BlogRecentSection from "../components/blog/BlogRecentSection";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/shared/NewsletterSection";
import SiteFooter from "../components/shared/SiteFooter";

function Blog() {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#232536]">
      <Navbar />
      <BlogHeader />
      <BlogRecentSection />
      <BlogAllPostsSection />
      <NewsletterSection />
      <SiteFooter />
    </div>
  );
}

export default Blog;
