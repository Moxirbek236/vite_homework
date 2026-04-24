import { Link } from "react-router-dom";
import SectionContainer from "../shared/ui/SectionContainer";
import { recentPosts } from "./blogData";

function RecentCard({ post }) {
  return (
    <Link
      to={post.href}
      className="grid overflow-hidden bg-[#F9F9FF] text-inherit no-underline md:grid-cols-[296px_1fr]"
    >
      <img src={post.image} alt={post.title} className="h-[248px] w-full object-cover" loading="lazy" />
      <div className="flex flex-col justify-between p-8">
        <h3 className="max-w-[264px] text-2xl font-semibold leading-9 text-[#232536]">
          {post.title}
        </h3>
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

function BlogRecentSection() {
  return (
    <section>
      <SectionContainer>
        <h2 className="text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
          Read Recent Post
        </h2>
        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          {recentPosts.map((post) => (
            <RecentCard key={`${post.title}-${post.date}`} post={post} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogRecentSection;
