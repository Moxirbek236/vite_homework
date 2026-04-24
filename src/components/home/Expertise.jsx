import IconCard from '../shared/IconCard'
import SectionContainer from '../shared/ui/SectionContainer'
import SectionIntro from '../shared/ui/SectionIntro'
import Stripe from '../shared/ui/Stripe'
import { expertiseItems } from './homeData'

function Expertise() {
  return (
    <section className="mt-24 w-full bg-[#ECF8F9]">
      <SectionContainer className="grid gap-12 xl:h-[660px] xl:grid-cols-[624px_515px] xl:gap-[141px]">
        <SectionIntro
          eyebrow="Our expertise"
          title="We want to get local identification in every corner of the world in this era of global citizenship"
          description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded."
          className="xl:pt-[42px]"
          descriptionClassName="!mt-6 max-w-[622px]"
          titleClassName="max-w-[622px]"
        />

        <div className="relative xl:pt-4">
          <span className="absolute -left-4 -top-0 hidden h-4 w-4 bg-[#444CFC] xl:block" />

          <div className="space-y-3">
            {expertiseItems.map((item) => (
              <IconCard
                key={item.key}
                alt={item.alt}
                description={item.description}
                icon={item.icon}
                title={item.title}
                variant="row"
              />
            ))}
          </div>

          <div className="relative mt-0 h-2 w-full overflow-hidden">
            <Stripe />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
export default Expertise
