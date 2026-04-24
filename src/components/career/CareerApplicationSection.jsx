import Arrow from "../shared/ui/Arrow";
import SectionContainer from "../shared/ui/SectionContainer";
import { careerApplicationForm } from "./careerInnerData";

function CareerApplicationSection() {
  return (
    <section id="apply-form">
      <SectionContainer className="pt-10 xl:px-[160px]">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="text-[32px] font-semibold leading-tight text-[#232536] md:text-[36px]">
            {careerApplicationForm.title}
          </h2>

          <form className="mt-10">
            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              {careerApplicationForm.fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="sr-only">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="h-18 w-full bg-[#F7F7FF] px-6 text-sm text-[#232536] outline-none placeholder:text-[#232536]/55"
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 block">
              <span className="sr-only">{careerApplicationForm.textarea.label}</span>
              <textarea
                name={careerApplicationForm.textarea.name}
                placeholder={careerApplicationForm.textarea.placeholder}
                rows="6"
                className="w-full bg-[#F7F7FF] px-6 py-5 text-sm text-[#232536] outline-none placeholder:text-[#232536]/55"
              />
            </label>

            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[#232536]/80 md:text-sm">
              <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 accent-[#444CFC]" />
              <span>{careerApplicationForm.consent}</span>
            </label>

            <button
              type="submit"
              className="group mt-6 inline-flex h-14 items-center gap-3 bg-[#444CFC] px-6 text-sm font-medium text-white"
            >
              <span>{careerApplicationForm.submitLabel}</span>
              <Arrow />
            </button>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerApplicationSection;
