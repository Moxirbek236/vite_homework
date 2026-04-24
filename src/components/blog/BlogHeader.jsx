import { Link } from "react-router-dom";
import Arrow from "../shared/ui/Arrow";
import SectionContainer from "../shared/ui/SectionContainer";
import { blogHero, blogSidebarPosts } from "./blogData";

function AuthorRow({ avatar, author, date }) {
  return (
    <div className="flex items-center gap-3">
      <img src={avatar} alt={author} className="h-8 w-8 rounded-full object-cover" loading="lazy" />
      <div>
        <p className="text-base leading-6 text-[#232536]/90">{author}</p>
        <p className="text-sm leading-5 text-[#232536]/60">{date}</p>
      </div>
    </div>
  );
}

function BlogHeader() {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative">
        <div className="absolute right-5 top-0 hidden h-[52px] w-12 rotate-180 xl:block xl:right-40">
          <div className="absolute left-0 top-0 h-5 w-[52px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-[34px] top-[14px] h-[14px] w-[14px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-0 top-0 h-[34px] w-[34px] rotate-90 bg-[#FFA155]" />
          <div className="absolute right-0 top-[14px] h-5 w-5 rotate-90 bg-[#FFD3AF]" />
        </div>

        <div className="grid gap-10 xl:grid-cols-[624px_515px] xl:items-start xl:justify-between">
          <div>
            <div className="mb-5 h-6 w-6 -rotate-90 bg-[#FFD3AF]" />
            <p className="text-sm font-medium uppercase tracking-[3px] text-[#232536]/90">
              {blogHero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[624px] text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
              {blogHero.title}
            </h1>
            <p className="mt-6 max-w-[624px] text-base leading-6 text-[#232536]/85">
              {blogHero.description}
            </p>
            <Link
              to={blogHero.href}
              className="mt-6 inline-flex items-center gap-3 text-base font-medium text-[#444CFC] no-underline"
            >
              <span>Read More</span>
              <Arrow className="text-black" />
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-[#232536]/70">
              <AuthorRow avatar={blogSidebarPosts[0].avatar} author={blogHero.author} date={blogHero.date} />
            </div>

            <div className="relative mt-12 overflow-hidden">
              <div className="absolute right-0 top-0 hidden h-full w-[204px] rotate-180 xl:block">
                <div className="absolute inset-0 bg-[#444CFC]" />
                <div className="absolute left-0 top-0 h-full w-[170px] bg-[#FFA155]" />
                <div className="absolute left-0 top-0 h-full w-[122px] bg-[#FFD3AF]" />
              </div>
              <img
                src={blogHero.image}
                alt={blogHero.imageAlt}
                className="relative z-10 h-[280px] w-full object-cover md:h-[390px] xl:w-[608px]"
              />
            </div>
          </div>

          <div className="bg-[#FFDFC6] px-8 py-10 md:px-10 xl:min-h-[738px]">
            <div className="space-y-10">
              {blogSidebarPosts.map((post) => (
                <article key={`${post.title}-${post.author}`}>
                  <h2 className="max-w-[366px] text-2xl font-semibold leading-9 text-[#232536]">
                    {post.title}
                  </h2>
                  <div className="mt-4">
                    <AuthorRow avatar={post.avatar} author={post.author} date={post.date} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogHeader;
