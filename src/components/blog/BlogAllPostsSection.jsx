import { Link } from "react-router-dom";
import SectionContainer from "../shared/ui/SectionContainer";
import { allPosts } from "./blogData";

function BlogPostCard({ post }) {
  return (
    <Link to={post.href} className="block bg-white text-inherit no-underline">
      <img src={post.image} alt={post.title} className="h-[266px] w-full object-cover" loading="lazy" />
      <div className="p-8">
        <h3 className="text-2xl font-semibold leading-9 text-[#232536]">{post.title}</h3>
        <p className="mt-4 text-base leading-6 text-[#232536]/85">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-3">
          <img src={post.avatar} alt={post.author} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
          <div>
            <p className="text-base leading-6 text-[#232536]/90">{post.author}</p>
            <p className="text-sm leading-5 text-[#232536]/60">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogAllPostsSection() {
  return (
    <section className="bg-[#F9F9F9]">
      <SectionContainer>
        <h2 className="text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
          All posts
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {allPosts.map((post) => (
            <BlogPostCard key={`${post.title}-${post.date}`} post={post} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogAllPostsSection;
