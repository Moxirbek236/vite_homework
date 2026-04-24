import SectionContainer from "../shared/ui/SectionContainer";
import TextLink from "../shared/ui/TextLink";
import { careerOpenings } from "./careerData";

function JobCard({ job }) {
  return (
    <article className="flex min-h-[243px] flex-col justify-between bg-white p-8 shadow-[0_20px_40px_rgba(35,37,54,0.08)]">
      <div>
        <h3 className="text-xl font-semibold leading-7 text-[#232536]">{job.title}</h3>
        <p className="mt-2 text-base leading-6 text-[#232536]/60">{job.location}</p>
        <p className="mt-1 text-base leading-6 text-[#232536]/60">{job.compensation}</p>
      </div>

      <TextLink className="mt-8" href="/career/blog">
        Apply Now
      </TextLink>
    </article>
  );
}

function CareerOpeningsSection() {
  return (
    <section id="open-positions" className="mt-8">
      <SectionContainer className="bg-[#ECF8F9] py-16 md:py-20 xl:px-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {careerOpenings.map((job) => (
            <JobCard key={`${job.title}-${job.location}`} job={job} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerOpeningsSection;
