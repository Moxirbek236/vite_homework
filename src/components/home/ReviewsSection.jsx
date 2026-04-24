import SectionContainer from "../shared/ui/SectionContainer";
import SectionIntro from "../shared/ui/SectionIntro";
import VerticalStripe from "../shared/ui/VerticalStripe";
import { testimonials } from "./homeData";
import clientLogo1 from "../../assets/Logo (1).png";


const featuredTestimonial = testimonials[0];

function ReviewsSection() {
  return (
    <section className="w-full bg-[#F9F9FF]">
      <SectionContainer>
        <div className="mb-6 h-4 w-4 bg-[#444CFC]" />

        <div className="grid gap-12 xl:grid-cols-[492px_1fr] xl:items-center xl:gap-[154px]">
          <div>
            <SectionIntro
              title="Our customers love what we do"
              titleClassName="!mt-0 max-w-[492px]"
            />
            <h3 className="mt-4 max-w-[492px] text-lg font-semibold leading-7 text-[#232536]">
              Transform your idea into reality with finsweet
            </h3>
            <p className="mt-4 max-w-[492px] text-base leading-6 text-[#5D5F6D]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="mt-8 flex items-center">
              {testimonials.map((testimonial, index) => (
                <img
                  key={testimonial.name}
                  src={testimonial.avatar}
                  alt={`${testimonial.name} profile`}
                  className={`h-12 w-12 rounded-full border-2 border-white object-cover ${
                    index > 0 ? "-ml-3" : ""
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-base font-medium leading-6 text-[#232536]">
              30+ <span className="text-xs text-[#5D5F6D]">customer reviews</span>
            </p>
          </div>

          <article className="relative bg-white px-8 py-10 shadow-[0_30px_60px_rgba(35,37,54,0.08)] md:px-12 md:py-12">
            <VerticalStripe
              className="absolute -left-4 top-0 hidden md:block"
              widthClassName="w-4"
            />

            <img
              src={clientLogo1}
              alt=""
              className="absolute right-8 top-0 h-12 w-12 -translate-y-1/2 object-contain"
            />

            <p className="max-w-[498px] text-2xl font-semibold leading-9 text-[#232536]">
              {featuredTestimonial.quote}
            </p>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={featuredTestimonial.avatar}
                  alt={`${featuredTestimonial.name} profile`}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-base font-semibold leading-6 text-[#232536]">
                    {featuredTestimonial.name}
                  </h4>
                  <p className="text-sm leading-5 text-[#5D5F6D]">
                    {featuredTestimonial.role}
                  </p>
                </div>
              </div>

              <img
                src={clientLogo1}
                alt="Client logo"
                className="h-6 w-[112px] object-contain object-left"
              />
            </div>

            <div className="mt-8 flex gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#232536]" />
              <span className="h-3 w-3 rounded-full bg-[#232536]/20" />
              <span className="h-3 w-3 rounded-full bg-[#232536]/20" />
            </div>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}

export default ReviewsSection;
