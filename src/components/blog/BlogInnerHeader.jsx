import SectionContainer from "../shared/ui/SectionContainer";
import { blogInnerHero } from "./blogInnerData";

function BlogInnerHeader() {
  return (
    <section className="pt-28 md:pt-36 xl:pt-44">
      <SectionContainer className="relative pb-10">
        <div className="absolute right-5 top-0 hidden h-[52px] w-12 rotate-180 xl:block xl:right-40">
          <div className="absolute left-0 top-0 h-5 w-[52px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-[34px] top-[14px] h-[14px] w-[14px] rotate-90 bg-[#666DFF]" />
          <div className="absolute right-0 top-0 h-[34px] w-[34px] rotate-90 bg-[#FFA155]" />
          <div className="absolute right-0 top-[14px] h-5 w-5 rotate-90 bg-[#FFD3AF]" />
        </div>

        <div className="max-w-[729px]">
          <div className="mb-6 h-6 w-6 -rotate-90 bg-[#FFD3AF]" />
          <h1 className="text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
            {blogInnerHero.title}
          </h1>
          <p className="mt-6 max-w-[719px] text-base leading-6 text-[#232536]/85">
            {blogInnerHero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#232536]/70">
            <div className="flex items-center gap-3">
              <img
                src={blogInnerHero.avatar}
                alt={blogInnerHero.author}
                className="h-8 w-8 rounded-full object-cover"
                loading="lazy"
              />
              <span className="text-base leading-6 text-[#232536]/90">{blogInnerHero.author}</span>
            </div>
            <span className="hidden h-4 w-px bg-black/20 md:block" />
            <span className="text-base leading-6 text-[#232536]/60">{blogInnerHero.date}</span>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogInnerHeader;
