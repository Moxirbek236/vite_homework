import Image1 from "../../assets/Image 1.png";
import Image2 from "../../assets/Image 2.png";
import Image3 from "../../assets/Image 3.png";
import SectionIntro from "../shared/ui/SectionIntro";
import TextLink from "../shared/ui/TextLink";
import VerticalStripe from "../shared/ui/VerticalStripe";

const stats = [
  { value: "1560+", label: "Project Delivered" },
  { value: "100+", label: "Professional" },
  { value: "950+", label: "Happy Client" },
  { value: "10 yrs", label: "Experience" },
];

const imageCards = [
  { src: Image1, width: "xl:w-[418px]", position: "object-[center_20%]" },
  { src: Image2, width: "xl:w-[419px]", position: "object-center" },
  { src: Image3, width: "xl:w-[403px]", position: "object-[center_30%]" },
];

function About() {
  return (
    <section className="mx-auto mt-[120px] w-full max-w-[1280px] px-5 pb-24 md:px-10 xl:px-0">
      <div className="grid gap-10 xl:grid-cols-[640px_547px] xl:gap-[92px]">
        <SectionIntro
          eyebrow="About Us"
          title="The company leads entire webdesign process from concept to delivery."
          titleClassName="max-w-[640px]"
        />

        <div className="xl:pt-[43px]">
          <h3 className="text-[32px] font-semibold leading-[1.3] text-[#232536] md:text-[36px] md:leading-[54px]">
            The Era Of Technology.
          </h3>
          <p className="mt-4 max-w-[547px] text-base leading-6 text-[#5D5F6D]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>
      </div>

      <div className="mt-12 grid w-full gap-4 xl:grid-cols-[418px_419px_403px_18px]">
        {imageCards.map((card, index) => (
          <div
            key={index}
            className={`h-[300px] overflow-hidden md:h-[380px] xl:h-[446px] ${card.width}`}
          >
            <img
              src={card.src}
              alt={`About visual ${index + 1}`}
              className={`h-full w-full ${card.position} object-cover`}
            />
          </div>
        ))}

        <VerticalStripe
          className="hidden h-[446px] xl:block"
          widthClassName="w-[18px]"
        />
      </div>

      <div className="mt-12 flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[36px] font-semibold leading-[54px] text-[#232536]">
                {stat.value}
              </p>
              <div className="relative mt-2 h-[6px] w-[72px] bg-[#444CFC]">
                <span className="absolute left-[10px] top-0 h-[6px] w-[62px] bg-[#FFA155]" />
                <span className="absolute left-[10px] top-0 h-[6px] w-[45px] bg-[#FFD3AF]" />
              </div>
              <p className="mt-2 text-base leading-6 text-black/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <TextLink href="#">
          Read about us
        </TextLink>
      </div>
    </section>
  );
}

export default About;
