import IconCard from '../shared/IconCard'
import PrimaryButton from '../shared/ui/PrimaryButton'
import SectionContainer from '../shared/ui/SectionContainer'
import SectionIntro from '../shared/ui/SectionIntro'
import { homeServices } from './homeData'

function Services() {
  return (
    <section className="w-full bg-[#FFE6D2]">
      <SectionContainer className="xl:h-[917px]">
        <div className="max-w-[777px]">
          <SectionIntro
            eyebrow="Our Services"
            title="We build software solutions that solve client's business challenges"
            titleClassName="!mt-3"
          />

          <div className="mt-10">
            <PrimaryButton>Request quote</PrimaryButton>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:mt-20 xl:grid-cols-3 xl:gap-8">
          {homeServices.map((service) => (
            <IconCard
              key={service.key}
              alt={service.alt}
              description="We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service"
              featured={service.featured}
              href="/service"
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export default Services
