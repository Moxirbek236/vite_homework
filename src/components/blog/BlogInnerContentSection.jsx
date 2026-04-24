import SectionContainer from "../shared/ui/SectionContainer";
import { blogInnerContent, blogInnerHero } from "./blogInnerData";

function BlogInnerContentSection() {
  return (
    <section>
      <SectionContainer className="pt-0 xl:px-[160px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative">
            <img
              src={blogInnerHero.image}
              alt={blogInnerHero.imageAlt}
              className="h-[260px] w-full object-cover md:h-[369px]"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 hidden h-[17px] w-[346px] xl:block">
              <div className="absolute inset-0 bg-[#444CFC]" />
              <div className="absolute right-0 top-0 h-full w-[296px] bg-[#FFA155]" />
              <div className="absolute right-0 top-0 h-full w-[215px] bg-[#FFD3AF]" />
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-[842px]">
            <h2 className="text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
              {blogInnerContent.title}
            </h2>

            <div className="mt-6 space-y-6 text-base leading-6 text-[#232536]/90">
              {blogInnerContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              {blogInnerContent.sections.map((section) => (
                <div key={`${section.title}-${section.body[0]}`}>
                  <h3 className="text-2xl font-semibold leading-9 text-[#232536]">
                    {section.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-base leading-6 text-[#232536]/90">
                    {section.body.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogInnerContentSection;
