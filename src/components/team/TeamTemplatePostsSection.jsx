import { Link } from "react-router-dom";
import Arrow from "../shared/ui/Arrow";
import SectionContainer from "../shared/ui/SectionContainer";

function TeamTemplatePostsSection({ member }) {
  return (
    <section className="bg-[#ECF8F9]">
      <SectionContainer>
        <div className="mb-5 h-4 w-4 bg-[#666DFF]" />
        <h2 className="max-w-[572px] text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
          {member.postsHeading}
        </h2>

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {member.posts.map((post) => (
            <Link
              key={`${member.slug}-${post.title}`}
              to={post.href}
              className="grid overflow-hidden bg-white text-inherit no-underline md:grid-cols-[296px_1fr]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-[248px] w-full object-cover"
                loading="lazy"
              />
              <div className="flex min-h-[248px] flex-col justify-between p-8">
                <div>
                  <p className="text-sm font-medium leading-5 text-[#232536]/60">{post.date}</p>
                  <h3 className="mt-4 max-w-[264px] text-2xl font-semibold leading-9 text-[#232536]">
                    {post.title}
                  </h3>
                </div>
                <span className="mt-8 inline-flex items-center gap-3 text-base font-medium text-[#444CFC]">
                  Read More
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

export default TeamTemplatePostsSection;
