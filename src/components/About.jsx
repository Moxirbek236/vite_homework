import Image1 from "../assets/Image 1.png";
import Image2 from "../assets/Image 2.png";
import Image3 from "../assets/Image 3.png";

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
        <div>
          <p className="text-sm font-medium uppercase tracking-[3px] text-black/90">
            About Us
          </p>
          <h2 className="mt-4 max-w-[640px] text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
            The company leads entire webdesign process from concept to delivery.
          </h2>
        </div>

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

      <div className="mt-12 gap-0 flex w-full xl:gap-0">
        <div className="w-[103%] flex gap-10 grid gap-4 xl:grid-cols-[418px_419px_403px_18px]">
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
        </div>

        <div className="relative hidden h-[446px] w-[18px] xl:block">
          <span className="absolute left-0 top-0 h-[424px] w-[18px] bg-[#FFA155]" />
          <span className="absolute left-0 top-[122px] h-[302px] w-[18px] bg-[#FFD3AF]" />
          <span className="absolute left-0 top-[332px] h-[114px] w-[18px] bg-[#444CFC]" />
        </div>
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

        <a
          href="#"
          className="inline-flex items-center gap-3 text-base font-medium leading-6 text-[#444CFC] no-underline"
        >
          Read about us
          <span className="text-sm text-black">{"-->"}</span>
        </a>
      </div>
    </section>
  );
}

export default About;
