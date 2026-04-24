import { Link } from "react-router-dom";
import Arrow from "../shared/ui/Arrow";
import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import { blogPosts } from "./homeData";

function LatestBlogsSection() {
  return (
    <section className="w-full bg-[#ECF8F9]">
      <SectionContainer>
        <div className="mb-6 h-4 w-4 bg-[#444CFC]" />
        <SectionIntro
          title={
            <>
              Read our
              <br />
              latest blogs &amp; news
            </>
          }
          titleClassName="!mt-0 max-w-[624px]"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              to={post.href}
              className="group grid overflow-hidden bg-white text-[#232536] no-underline sm:grid-cols-[248px_1fr]"
            >
              <div className="h-[220px] overflow-hidden sm:h-full">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex min-h-[248px] flex-col px-8 py-8">
                <p className="text-sm leading-5 text-[#5D5F6D]">{post.date}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-9 text-[#232536]">
                  {post.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 text-base font-medium leading-6 text-[#444CFC]">
                  Read more
                  <Arrow className="text-black" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default LatestBlogsSection;
