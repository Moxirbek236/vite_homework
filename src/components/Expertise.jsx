import groupImage1 from '../assets/Group 1749.png'
import groupImage2 from '../assets/Group 1755.png'
import groupImage3 from '../assets/Group 1855.png'

const expertiseItems = [
  {
    key: 'delivery',
    title: 'On Time Delivery',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    key: 'quality',
    title: 'Best Quality',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
  {
    key: 'support',
    title: 'Support Assist',
    description:
      'Through True Rich Attended does no end it his mother since real had half every him.',
  },
]

function ExpertiseIcon({ type }) {
  if (type === 'quality') {
    return (
      <img src={groupImage1} alt="Quality" />
    )
  }

  if (type === 'support') {
    return (
      <img src={groupImage2} alt="Support" />
    )
  }

  return (
    <img src={groupImage3} alt="Delivery" />
  )
}


function Expertise() {
  return (
    <section className="mt-24 w-full bg-[#ECF8F9]">
      <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-16 md:px-10 lg:px-16 xl:h-[660px] xl:grid-cols-[624px_515px] xl:gap-[141px] xl:px-[160px] xl:py-24">
        <div className="xl:pt-[42px]">
          <p className="text-sm font-medium uppercase tracking-[3px] text-black/90">
            Our expertise
          </p>

          <h2 className="mt-4 max-w-[622px] text-4xl font-semibold leading-tight text-[#232536] md:text-[48px] md:leading-[58px]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h2>

          <p className="mt-6 max-w-[622px] text-base leading-6 text-[#5D5F6D]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="relative xl:pt-4">
          <span className="absolute -left-4 -top-0 hidden h-4 w-4 bg-[#444CFC] xl:block" />

          <div className="space-y-3">
            {expertiseItems.map((item) => (
              <article
                key={item.key}
                className="flex h-[140px] items-start gap-4 bg-white px-8 py-8"
              >
                <div className="flex h-[47px] w-[47px] shrink-0 items-center justify-center rounded-full bg-[#FFE6D2]/50">
                  <ExpertiseIcon type={item.key} />
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-7 text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[303px] text-sm font-medium leading-5 text-[#5D5F6D]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-0 h-2 w-full overflow-hidden">
            <span className="absolute inset-0 bg-[#FFA155]" />
            <span className="absolute left-[135px] top-0 h-2 w-[355px] bg-[#FFD3AF]" />
            <span className="absolute right-0 top-0 h-2 w-[133px] bg-[#444CFC]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
