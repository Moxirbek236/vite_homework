import { processItems } from "./data";
import CornerBlocks from "./ui/CornerBlocks";
import ProcessCard from "./ProcessCard";
import SectionContainer from "./ui/SectionContainer";
import SectionIntro from "./ui/SectionIntro";

function ProcessSection() {
  const lastItemIndex = processItems.length - 1;

  return (
    <section className="w-full bg-[#F9F9FF]">
      <SectionContainer>
        <div className="relative">
          <SectionIntro
            eyebrow="Our process"
            title="The process we are working with our clients worldwide"
            description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable."
            className="max-w-[733px]"
            />
          <CornerBlocks className="right-0 top-0 hidden rotate-90 xl:block" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {processItems.map((item, index) => (
            <ProcessCard
              key={item.number}
              item={item}
              showTopStripe={index === 0}
              showBottomStripe={index === lastItemIndex}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default ProcessSection;
