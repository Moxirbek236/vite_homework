import SectionContainer from "../shared/ui/SectionContainer";
import { careerApplicationForm } from "./careerInnerData";

function CareerApplicationSection() {
  return (
    <section id="apply-form">
      <SectionContainer className="xl:px-[272px]">
        <div className="bg-[#ECF8F9] p-8 md:p-12 xl:p-16">
          <h2 className="text-3xl font-semibold leading-tight text-[#232536] md:text-[36px] md:leading-[54px]">
            {careerApplicationForm.title}
          </h2>

          <form className="mt-10">
            <div className="grid gap-6 md:grid-cols-2">
              {careerApplicationForm.fields.map((field) => (
                <label key={field.name} className="block">
                  <span className="sr-only">{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="h-16 w-full border border-transparent bg-white px-6 text-base text-[#232536] outline-none placeholder:text-[#232536]/50"
                  />
                </label>
              ))}
            </div>

            <label className="mt-6 block">
              <span className="sr-only">{careerApplicationForm.textarea.label}</span>
              <textarea
                name={careerApplicationForm.textarea.name}
                placeholder={careerApplicationForm.textarea.placeholder}
                rows="6"
                className="w-full border border-transparent bg-white px-6 py-5 text-base text-[#232536] outline-none placeholder:text-[#232536]/50"
              />
            </label>

            <label className="mt-6 flex items-start gap-3 text-sm leading-5 text-[#232536]/80">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[#444CFC]" />
              <span>{careerApplicationForm.consent}</span>
            </label>

            <button
              type="submit"
              className="mt-8 inline-flex h-16 items-center justify-center bg-[#444CFC] px-8 text-base font-medium text-white"
            >
              {careerApplicationForm.submitLabel}
            </button>
          </form>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerApplicationSection;
